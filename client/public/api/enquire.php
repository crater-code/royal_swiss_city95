<?php
/**
 * Royal Swiss City - Hardened Enquiry Form API
 * Fully protected against DDoS, flood submissions, bot spam, and header injection.
 */

// 1. DYNAMIC CORS (Restrict strictly to authorized domains)
$allowed_origins = [
    'https://royalswisscity.com',
    'https://www.royalswisscity.com',
    'http://localhost:3000',
    'http://127.0.0.1:3000'
];

$http_origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
if (in_array($http_origin, $allowed_origins, true)) {
    header("Access-Control-Allow-Origin: " . $http_origin);
} else {
    header("Access-Control-Allow-Origin: https://royalswisscity.com");
}

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
header("X-Content-Type-Options: nosniff");
header("X-Frame-Options: DENY");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed."]);
    exit();
}

// 2. CLIENT IP IDENTIFICATION (Cloudflare-Aware)
function getClientIP() {
    if (!empty($_SERVER['HTTP_CF_CONNECTING_IP'])) {
        return $_SERVER['HTTP_CF_CONNECTING_IP'];
    }
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip_list = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        return trim($ip_list[0]);
    }
    return $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
}

$client_ip = getClientIP();

// 3. RATE LIMITING (Max 5 submissions per 10 minutes per IP)
$rate_limit_dir = sys_get_temp_dir() . '/rsc_rate_limits';
if (!is_dir($rate_limit_dir)) {
    @mkdir($rate_limit_dir, 0755, true);
}

$rate_limit_file = $rate_limit_dir . '/ip_' . md5($client_ip) . '.json';
$now = time();
$window_time = 600; // 10 minutes
$max_requests = 5;

$rate_data = ['count' => 0, 'start' => $now];
if (file_exists($rate_limit_file)) {
    $existing = json_decode(@file_get_contents($rate_limit_file), true);
    if ($existing && ($now - $existing['start']) < $window_time) {
        $rate_data = $existing;
    }
}

if ($rate_data['count'] >= $max_requests) {
    http_response_code(429);
    echo json_encode([
        "success" => false,
        "message" => "Too many requests. Please wait a few minutes before submitting again."
    ]);
    exit();
}

// 4. PARSE & SANITIZE INPUT DATA
$raw_input = file_get_contents("php://input");
$data = json_decode($raw_input, true) ?: $_POST;

// 5. BOT HONEYPOT TRAP
// If any honeypot field is filled, it is 100% an automated bot script.
if (!empty($data['website_url_trap']) || !empty($data['company_fax_check'])) {
    echo json_encode([
        "success" => true,
        "message" => "Thank you! Your enquiry has been received successfully."
    ]);
    exit();
}

// Sanitize & enforce maximum length
function clean_input($val, $max = 255) {
    $val = trim((string)$val);
    $val = str_replace(["\r", "\n", "%0a", "%0d"], ' ', $val); // Prevent header injection
    return mb_substr($val, 0, $max, 'UTF-8');
}

$full_name    = clean_input($data['fullName'] ?? '', 100);
$company_name = clean_input($data['companyName'] ?? '', 150);
$email        = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone        = clean_input($data['phone'] ?? '', 30);
$city         = clean_input($data['city'] ?? '', 100);
$enquiry_type = clean_input($data['enquiryType'] ?? '', 80);
$plot_size    = clean_input($data['plotSize'] ?? '', 80);
$message      = mb_substr(trim((string)($data['message'] ?? '')), 0, 2000, 'UTF-8');

// Validation
if (empty($full_name) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Please fill all required fields (Full Name, Email, Phone)."
    ]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Please provide a valid email address."
    ]);
    exit();
}

// Increment rate limit counter after valid submission attempt
$rate_data['count']++;
@file_put_contents($rate_limit_file, json_encode($rate_data), LOCK_EX);

// 6. DATABASE CONFIGURATION
$db_host = "localhost";
$db_name = "royalswi_rsc";
$db_user = "royalswi_royalswi";
$db_pass = ';zfC]EvT5KrWdtxi';
$admin_email = "info@royalswisscity.com";

$db_saved = false;

try {
    if (!empty($db_name) && $db_name !== "YOUR_DATABASE_NAME") {
        $dsn = "mysql:host={$db_host};dbname={$db_name};charset=utf8mb4";
        $pdo = new PDO($dsn, $db_user, $db_pass, [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4"
        ]);

        $stmt = $pdo->prepare("
            INSERT INTO enquiries 
            (full_name, company_name, email, phone, city, enquiry_type, plot_size, message, status) 
            VALUES 
            (:full_name, :company_name, :email, :phone, :city, :enquiry_type, :plot_size, :message, 'New')
        ");

        $stmt->execute([
            ':full_name'    => $full_name,
            ':company_name' => $company_name,
            ':email'        => $email,
            ':phone'        => $phone,
            ':city'         => $city,
            ':enquiry_type' => $enquiry_type,
            ':plot_size'    => $plot_size,
            ':message'      => $message,
        ]);

        $db_saved = true;
    }
} catch (PDOException $e) {
    error_log("Database Error: " . $e->getMessage());
}

// 7. SEND EMAIL NOTIFICATION (Protected against header injection)
$subject = "New Enquiry from " . $full_name . " - Royal Swiss City";
$email_body = "You have received a new enquiry from the Royal Swiss City website.\n\n"
            . "----------------------------------------\n"
            . "Name:         " . $full_name . "\n"
            . "Company:      " . ($company_name ?: "N/A") . "\n"
            . "Email:        " . $email . "\n"
            . "Phone:        " . $phone . "\n"
            . "City:         " . ($city ?: "N/A") . "\n"
            . "Enquiry Type: " . ($enquiry_type ?: "N/A") . "\n"
            . "Plot Size:    " . ($plot_size ?: "N/A") . "\n"
            . "Client IP:    " . $client_ip . "\n"
            . "Date:         " . date("Y-m-d H:i:s") . "\n"
            . "----------------------------------------\n\n"
            . "Message:\n" . ($message ?: "No additional message.") . "\n";

$headers = "From: Royal Swiss City <info@royalswisscity.com>\r\n"
         . "Reply-To: " . $email . "\r\n"
         . "Content-Type: text/plain; charset=UTF-8\r\n";

@mail($admin_email, $subject, $email_body, $headers);

http_response_code(200);
echo json_encode([
    "success"  => true,
    "message"  => "Thank you! Your enquiry has been received successfully. Our sales desk will contact you shortly.",
    "db_saved" => $db_saved
]);
exit();
