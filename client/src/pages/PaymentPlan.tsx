import { useState, useEffect } from "react";
import { 
  FileText, 
  MessageCircle, 
  Download, 
  CheckCircle, 
  CreditCard, 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  ArrowRight,
  Phone,
  Sparkles,
  Calendar,
  Building
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function PaymentPlan() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", phone: "", email: "", plotInterest: "5 Marla Residential" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const residentialPlots = [
    {
      size: "3.5 Marla",
      dimension: "20' × 40'",
      category: "Residential",
      badge: "Compact Luxury",
      booking: "10% Down Payment",
      confirmation: "10% (After 30 Days)",
      installments: "14 Quarterly Installments",
      possession: "15% on Balloting",
      totalPrice: "Contact Sales Desk",
    },
    {
      size: "5 Marla",
      dimension: "25' × 45'",
      category: "Residential",
      badge: "Most Popular",
      booking: "10% Down Payment",
      confirmation: "10% (After 30 Days)",
      installments: "14 Quarterly Installments",
      possession: "15% on Balloting",
      totalPrice: "Contact Sales Desk",
    },
    {
      size: "10 Marla",
      dimension: "35' × 65'",
      category: "Residential",
      badge: "Executive Choice",
      booking: "10% Down Payment",
      confirmation: "10% (After 30 Days)",
      installments: "14 Quarterly Installments",
      possession: "15% on Balloting",
      totalPrice: "Contact Sales Desk",
    },
    {
      size: "1 Kanal",
      dimension: "50' × 90'",
      category: "Residential",
      badge: "Luxury Estate",
      booking: "10% Down Payment",
      confirmation: "10% (After 30 Days)",
      installments: "14 Quarterly Installments",
      possession: "15% on Balloting",
      totalPrice: "Contact Sales Desk",
    },
    {
      size: "2 Kanal",
      dimension: "75' × 120'",
      category: "Residential",
      badge: "Palatial Waterfront",
      booking: "10% Down Payment",
      confirmation: "10% (After 30 Days)",
      installments: "14 Quarterly Installments",
      possession: "15% on Balloting",
      totalPrice: "Contact Sales Desk",
    },
  ];

  const commercialPlots = [
    {
      size: "2 Marla",
      dimension: "15' × 30'",
      category: "Commercial",
      badge: "Boutique Retail",
      booking: "15% Down Payment",
      confirmation: "10% (After 30 Days)",
      installments: "12 Quarterly Installments",
      possession: "15% on Balloting",
      totalPrice: "Contact Sales Desk",
    },
    {
      size: "4 Marla",
      dimension: "25' × 36'",
      category: "Commercial",
      badge: "Prime Commercial Boulevard",
      booking: "15% Down Payment",
      confirmation: "10% (After 30 Days)",
      installments: "12 Quarterly Installments",
      possession: "15% on Balloting",
      totalPrice: "Contact Sales Desk",
    },
    {
      size: "8 Marla",
      dimension: "30' × 60'",
      category: "Commercial",
      badge: "Corporate Plaza Hub",
      booking: "15% Down Payment",
      confirmation: "10% (After 30 Days)",
      installments: "12 Quarterly Installments",
      possession: "15% on Balloting",
      totalPrice: "Contact Sales Desk",
    },
  ];

  const bookingSteps = [
    {
      step: "01",
      title: "Select Plot Category",
      desc: "Choose between residential plots (3.5M, 5M, 10M, 1K, 2K) or strategic commercial locations (2M, 4M, 8M) tailored to your portfolio objectives.",
    },
    {
      step: "02",
      title: "Complete Application Form",
      desc: "Fill in the official HRL Construction booking docket with verified CNIC/NICOP credentials, passport photographs, and designated nominee details.",
    },
    {
      step: "03",
      title: "Submit Down Payment",
      desc: "Process down payment via Pay Order or Bank Demand Draft drawn exclusively in favor of 'HRL Construction Pvt Limited' or through verified banking channels.",
    },
    {
      step: "04",
      title: "Allotment Letter & Schedule",
      desc: "Receive your verified HRL Allotment Certificate along with your customized 3.5 to 4 year quarterly installment payment card and customer portal access.",
    },
  ];

  const faqs = [
    {
      q: "What plot sizes are available in Royal Swiss City Lahore?",
      a: "Royal Swiss City Lahore offers residential plots in 3.5 Marla, 5 Marla, 10 Marla, 1 Kanal, and 2 Kanal, alongside commercial plots in 2 Marla, 4 Marla, and 8 Marla.",
    },
    {
      q: "Are flexible installment plans available?",
      a: "Yes, all residential and commercial plots are available on convenient 3 to 4 year quarterly installment schedules following an initial down payment.",
    },
    {
      q: "Who is the official developer and builder for Royal Swiss City Lahore?",
      a: "Royal Swiss City Lahore is exclusively developed and engineered by HRL Construction Pvt Limited (Habib Rafiq), bringing over six decades of mega infrastructure excellence.",
    },
    {
      q: "What payment methods are accepted for installment dues?",
      a: "Payments can be deposited directly via online banking transfer, designated bank branches across Pakistan, pay order, or demand draft favoring HRL Construction Pvt Limited.",
    },
    {
      q: "Are there any hidden development charges?",
      a: "All payment schedules are transparently structured by HRL Construction Pvt Limited. Development timeline milestone breakdowns are clearly stated in the official booking docket.",
    },
  ];

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloadSuccess(true);
    setTimeout(() => {
      // Simulate PDF download
      const link = document.createElement("a");
      link.href = "/llms.txt";
      link.download = "Royal_Swiss_City_Official_Payment_Plan_2026.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 600);
  };

  return (
    <main className="walkthrough-page payment-plan-page">
      {/* Self-referencing Canonical & Standardized Global Technical SEO */}
      <SEOHead
        title={SEO_CONFIG.pages.paymentPlan.title}
        description={SEO_CONFIG.pages.paymentPlan.description}
        keywords={SEO_CONFIG.pages.paymentPlan.keywords}
        canonical={SEO_CONFIG.pages.paymentPlan.canonical}
        ogImage="https://royalswisscity.com/images/og-share.jpg"
        twitterImage="https://royalswisscity.com/images/og-share.jpg"
        structuredData={SEO_CONFIG.schema.paymentPlan}
        language="en"
      />

      <Breadcrumb />
      <SiteHeader forceScrolled={true} />

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          minHeight: "440px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "140px 20px 70px 20px",
          background: "linear-gradient(180deg, #0B1E2B 0%, #152E40 60%, #1a3a52 100%)",
          color: "#ffffff",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/desktop_city_aerial.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.18,
            filter: "brightness(0.9)",
          }}
        />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "960px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "999px",
              background: "rgba(178, 153, 106, 0.18)",
              border: "1px solid rgba(178, 153, 106, 0.4)",
              color: "#c4b08a",
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "18px",
              fontWeight: 600,
            }}
          >
            <Sparkles size={14} />
            Official 2026 Installment Schedules
          </div>

          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 54px)",
              fontFamily: "var(--serif)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              margin: "0 0 16px 0",
              color: "#ffffff",
            }}
          >
            Royal Swiss City Lahore Payment Plan & Pricing
          </h1>

          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(255, 255, 255, 0.82)",
              maxWidth: "740px",
              margin: "0 auto 30px auto",
              lineHeight: 1.6,
              fontWeight: 300,
            }}
          >
            Engineered by <strong>HRL Construction Pvt Limited</strong> on Lahore’s Ravi Riverfront. 
            Secure your future with flexible 3.5 to 4 year quarterly installment plans tailored for end-users and investors.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => setDownloadModalOpen(true)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 30px",
                backgroundColor: "#b2996a",
                color: "#0B1E2B",
                borderRadius: "999px",
                fontSize: "12px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(178, 153, 106, 0.35)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.backgroundColor = "#c4b08a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.backgroundColor = "#b2996a";
              }}
            >
              <Download size={16} />
              Download Official Payment Plan PDF
            </button>

            <a
              href="https://wa.me/923004647979?text=Hello%20HRL%20Sales%2C%20I%20am%20inquiring%20about%20the%20Royal%20Swiss%20City%20Payment%20Plan"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 28px",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                color: "#ffffff",
                borderRadius: "999px",
                fontSize: "12px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                fontWeight: 600,
                border: "1px solid rgba(255, 255, 255, 0.28)",
                textDecoration: "none",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "#25D366";
                e.currentTarget.style.color = "#25D366";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.28)";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              <MessageCircle size={16} />
              Inquire via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 20px" }}>
        
        {/* Notice Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "14px",
            padding: "16px 24px",
            background: "#ffffff",
            borderRadius: "10px",
            border: "1px solid rgba(178, 153, 106, 0.35)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
            marginBottom: "50px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                display: "inline-block",
                padding: "4px 10px",
                borderRadius: "6px",
                background: "#0B1E2B",
                color: "#b2996a",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Official Notice
            </span>
            <p style={{ margin: 0, fontSize: "14px", color: "#333", fontWeight: 500 }}>
              Contact sales desk for latest official allotment rates and limited-time priority inventory allocations.
            </p>
          </div>
          <a
            href="tel:+9242111777588"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#b2996a",
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            <Phone size={14} />
            042 111 777 588
          </a>
        </div>

        {/* Section 1: Residential Plots */}
        <section id="residential-plan" style={{ marginBottom: "80px" }}>
          <div style={{ marginBottom: "28px" }}>
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#b2996a",
                fontWeight: 700,
                display: "block",
                marginBottom: "6px",
              }}
            >
              Luxury Living By The River
            </span>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 36px)",
                fontFamily: "var(--serif)",
                color: "#0B1E2B",
                margin: 0,
                lineHeight: 1.2,
                fontWeight: 600,
              }}
            >
              Residential Plot Payment Plans (3.5M, 5M, 10M, 1K, 2K)
            </h2>
            <p style={{ color: "#666", fontSize: "15px", marginTop: "8px", maxWidth: "800px" }}>
              Tailored for growing families and discerning homeowners seeking an eco-planned sanctuary with 40-ft minimum wide boulevards and full solar integration.
            </p>
          </div>

          {/* Responsive Residential Table */}
          <div
            style={{
              overflowX: "auto",
              background: "#ffffff",
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
            }}
          >
            <table
              style={{
                width: "100%",
                minWidth: "780px",
                borderCollapse: "collapse",
                textAlign: "left",
                fontFamily: "var(--sans)",
              }}
            >
              <thead>
                <tr style={{ background: "#0B1E2B", color: "#ffffff" }}>
                  <th style={{ padding: "18px 20px", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700 }}>Plot Size</th>
                  <th style={{ padding: "18px 20px", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700 }}>Booking / Down Payment</th>
                  <th style={{ padding: "18px 20px", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700 }}>Confirmation</th>
                  <th style={{ padding: "18px 20px", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700 }}>Quarterly Installments</th>
                  <th style={{ padding: "18px 20px", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700 }}>Balloting / Possession</th>
                  <th style={{ padding: "18px 20px", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700, textAlign: "right" }}>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {residentialPlots.map((plot, idx) => (
                  <tr
                    key={plot.size}
                    style={{
                      borderBottom: "1px solid #f0f0f0",
                      backgroundColor: idx % 2 === 0 ? "#ffffff" : "#FAFAFA",
                      transition: "background 0.2s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F3EFE6"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = idx % 2 === 0 ? "#ffffff" : "#FAFAFA"; }}
                  >
                    <td style={{ padding: "18px 20px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "17px", fontWeight: 700, color: "#0B1E2B" }}>{plot.size}</span>
                        <span
                          style={{
                            fontSize: "10px",
                            padding: "3px 8px",
                            borderRadius: "4px",
                            background: "rgba(178, 153, 106, 0.15)",
                            color: "#8c6e3b",
                            fontWeight: 600,
                          }}
                        >
                          {plot.badge}
                        </span>
                      </div>
                      <span style={{ fontSize: "11px", color: "#888", display: "block", marginTop: "2px" }}>{plot.dimension}</span>
                    </td>
                    <td style={{ padding: "18px 20px", fontSize: "14px", color: "#333", fontWeight: 500 }}>{plot.booking}</td>
                    <td style={{ padding: "18px 20px", fontSize: "14px", color: "#333" }}>{plot.confirmation}</td>
                    <td style={{ padding: "18px 20px", fontSize: "14px", color: "#333" }}>
                      <span style={{ color: "#0B1E2B", fontWeight: 600 }}>{plot.installments}</span>
                      <span style={{ display: "block", fontSize: "11px", color: "#777" }}>Over 3.5 Years</span>
                    </td>
                    <td style={{ padding: "18px 20px", fontSize: "14px", color: "#333" }}>{plot.possession}</td>
                    <td style={{ padding: "18px 20px", textAlign: "right" }}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "6px 12px",
                          borderRadius: "6px",
                          background: "#0B1E2B",
                          color: "#c4b08a",
                          fontSize: "11px",
                          fontWeight: 700,
                          letterSpacing: "0.5px",
                        }}
                      >
                        Contact Sales Desk
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Commercial Plots */}
        <section id="commercial-plan" style={{ marginBottom: "80px" }}>
          <div style={{ marginBottom: "28px" }}>
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#b2996a",
                fontWeight: 700,
                display: "block",
                marginBottom: "6px",
              }}
            >
              High-Yield Commercial Opportunities
            </span>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 36px)",
                fontFamily: "var(--serif)",
                color: "#0B1E2B",
                margin: 0,
                lineHeight: 1.2,
                fontWeight: 600,
              }}
            >
              Commercial Plot Payment Plans (2M, 4M, 8M)
            </h2>
            <p style={{ color: "#666", fontSize: "15px", marginTop: "8px", maxWidth: "800px" }}>
              Position your business along prime 120-ft wide commercial avenues with unparalleled highway transit connectivity and maximum customer exposure.
            </p>
          </div>

          {/* Responsive Commercial Table */}
          <div
            style={{
              overflowX: "auto",
              background: "#ffffff",
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
            }}
          >
            <table
              style={{
                width: "100%",
                minWidth: "780px",
                borderCollapse: "collapse",
                textAlign: "left",
                fontFamily: "var(--sans)",
              }}
            >
              <thead>
                <tr style={{ background: "#1a3a52", color: "#ffffff" }}>
                  <th style={{ padding: "18px 20px", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700 }}>Plot Size</th>
                  <th style={{ padding: "18px 20px", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700 }}>Booking / Down Payment</th>
                  <th style={{ padding: "18px 20px", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700 }}>Confirmation</th>
                  <th style={{ padding: "18px 20px", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700 }}>Quarterly Installments</th>
                  <th style={{ padding: "18px 20px", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700 }}>Balloting / Possession</th>
                  <th style={{ padding: "18px 20px", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700, textAlign: "right" }}>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {commercialPlots.map((plot, idx) => (
                  <tr
                    key={plot.size}
                    style={{
                      borderBottom: "1px solid #f0f0f0",
                      backgroundColor: idx % 2 === 0 ? "#ffffff" : "#FAFAFA",
                      transition: "background 0.2s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F3EFE6"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = idx % 2 === 0 ? "#ffffff" : "#FAFAFA"; }}
                  >
                    <td style={{ padding: "18px 20px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "17px", fontWeight: 700, color: "#0B1E2B" }}>{plot.size}</span>
                        <span
                          style={{
                            fontSize: "10px",
                            padding: "3px 8px",
                            borderRadius: "4px",
                            background: "rgba(178, 153, 106, 0.2)",
                            color: "#8c6e3b",
                            fontWeight: 600,
                          }}
                        >
                          {plot.badge}
                        </span>
                      </div>
                      <span style={{ fontSize: "11px", color: "#888", display: "block", marginTop: "2px" }}>{plot.dimension}</span>
                    </td>
                    <td style={{ padding: "18px 20px", fontSize: "14px", color: "#333", fontWeight: 500 }}>{plot.booking}</td>
                    <td style={{ padding: "18px 20px", fontSize: "14px", color: "#333" }}>{plot.confirmation}</td>
                    <td style={{ padding: "18px 20px", fontSize: "14px", color: "#333" }}>
                      <span style={{ color: "#0B1E2B", fontWeight: 600 }}>{plot.installments}</span>
                      <span style={{ display: "block", fontSize: "11px", color: "#777" }}>3 Year Plan</span>
                    </td>
                    <td style={{ padding: "18px 20px", fontSize: "14px", color: "#333" }}>{plot.possession}</td>
                    <td style={{ padding: "18px 20px", textAlign: "right" }}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "6px 12px",
                          borderRadius: "6px",
                          background: "#0B1E2B",
                          color: "#c4b08a",
                          fontSize: "11px",
                          fontWeight: 700,
                          letterSpacing: "0.5px",
                        }}
                      >
                        Contact Sales Desk
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Booking Process & Guidelines */}
        <section id="booking-process" style={{ marginBottom: "80px" }}>
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 48px auto" }}>
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#b2996a",
                fontWeight: 700,
                display: "block",
                marginBottom: "6px",
              }}
            >
              Step-By-Step Guidance
            </span>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 36px)",
                fontFamily: "var(--serif)",
                color: "#0B1E2B",
                margin: "0 0 14px 0",
                fontWeight: 600,
              }}
            >
              Booking Process & Payment Guidelines
            </h2>
            <p style={{ color: "#666", fontSize: "15px", lineHeight: 1.6 }}>
              Investing in Royal Swiss City is transparent and structured under standard corporate governance by HRL Construction Pvt Limited. Follow these verified four steps.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {bookingSteps.map((step) => (
              <div
                key={step.step}
                style={{
                  background: "#ffffff",
                  padding: "32px 24px",
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "#b2996a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "#e5e7eb";
                }}
              >
                <span
                  style={{
                    fontSize: "36px",
                    fontFamily: "var(--serif)",
                    color: "rgba(178, 153, 106, 0.4)",
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: "16px",
                  }}
                >
                  {step.step}
                </span>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#0B1E2B",
                    margin: "0 0 10px 0",
                    fontFamily: "var(--serif)",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Legal / Payment Safety Callout */}
          <div
            style={{
              marginTop: "36px",
              padding: "24px 28px",
              background: "#F7F5F0",
              borderRadius: "10px",
              borderLeft: "4px solid #b2996a",
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
            <ShieldCheck size={26} color="#b2996a" style={{ flexShrink: 0, marginTop: "2px" }} />
            <div>
              <h4 style={{ margin: "0 0 6px 0", fontSize: "15px", color: "#0B1E2B", fontWeight: 700 }}>
                Important Security & Entity Verification Notice
              </h4>
              <p style={{ margin: 0, fontSize: "13px", color: "#555", lineHeight: 1.6 }}>
                All payments, demand drafts, and pay orders must be issued exclusively to <strong>HRL Construction Pvt Limited</strong>. 
                Do not make cash payments to unaccredited representatives. Ensure you receive an official system-generated receipt containing HRL corporate seal and verification barcode.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section id="faq-section" style={{ marginBottom: "40px" }}>
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 40px auto" }}>
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#b2996a",
                fontWeight: 700,
                display: "block",
                marginBottom: "6px",
              }}
            >
              Clear Answers
            </span>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 36px)",
                fontFamily: "var(--serif)",
                color: "#0B1E2B",
                margin: "0 0 12px 0",
                fontWeight: 600,
              }}
            >
              Frequently Asked Questions About Installments
            </h2>
            <p style={{ color: "#666", fontSize: "15px" }}>
              Everything you need to know about payment terms, quarterly schedules, possession, and transfer procedures.
            </p>
          </div>

          <div style={{ maxWidth: "880px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "14px" }}>
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={faq.q}
                  style={{
                    background: "#ffffff",
                    borderRadius: "10px",
                    border: "1px solid #e5e7eb",
                    overflow: "hidden",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    style={{
                      width: "100%",
                      padding: "20px 24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "16px",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    <span style={{ fontSize: "16px", fontWeight: 600, color: "#0B1E2B" }}>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      color="#b2996a"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                        flexShrink: 0,
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 24px 20px 24px", color: "#555", fontSize: "14px", lineHeight: 1.7 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, #0B1E2B 0%, #152E40 100%)",
            borderRadius: "16px",
            padding: "50px 30px",
            textAlign: "center",
            color: "#ffffff",
            position: "relative",
            overflow: "hidden",
            marginTop: "60px",
          }}
        >
          <div style={{ position: "relative", zIndex: 2, maxWidth: "680px", margin: "0 auto" }}>
            <h3
              style={{
                fontSize: "clamp(24px, 3.5vw, 34px)",
                fontFamily: "var(--serif)",
                fontWeight: 500,
                margin: "0 0 14px 0",
              }}
            >
              Need a Custom Payment Schedule or Site Visit?
            </h3>
            <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "15px", lineHeight: 1.6, margin: "0 0 28px 0" }}>
              Our senior property advisors from HRL Construction Pvt Limited are available 7 days a week to review custom installment solutions, corner plot availability, and corporate bookings.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
              <a
                href="/enquire"
                style={{
                  padding: "12px 28px",
                  background: "#b2996a",
                  color: "#0B1E2B",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Book Guided Consultation
              </a>
              <a
                href="https://wa.me/923004647979?text=Hello%20HRL%20Sales%2C%20I%20would%20like%20to%20request%20the%20Royal%20Swiss%20City%20Payment%20Plan%20PDF"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "12px 28px",
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#ffffff",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Download PDF Modal */}
      {downloadModalOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(0, 0, 0, 0.65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            backdropFilter: "blur(6px)",
          }}
          onClick={() => setDownloadModalOpen(false)}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "14px",
              maxWidth: "480px",
              width: "100%",
              padding: "36px",
              position: "relative",
              boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setDownloadModalOpen(false)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "none",
                border: "none",
                fontSize: "18px",
                color: "#888",
                cursor: "pointer",
              }}
              aria-label="Close"
            >
              ✕
            </button>

            {!downloadSuccess ? (
              <form onSubmit={handleDownloadSubmit}>
                <div style={{ textAlign: "center", marginBottom: "24px" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      background: "rgba(178, 153, 106, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 12px auto",
                      color: "#b2996a",
                    }}
                  >
                    <Download size={24} />
                  </div>
                  <h3 style={{ margin: "0 0 6px 0", fontSize: "20px", color: "#0B1E2B", fontFamily: "var(--serif)" }}>
                    Download Official Payment Plan PDF
                  </h3>
                  <p style={{ margin: 0, fontSize: "13px", color: "#666" }}>
                    Please confirm your contact details to download the complete 2026 installment schedule.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#333", marginBottom: "4px" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mehmood"
                      value={leadForm.name}
                      onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "14px",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#333", marginBottom: "4px" }}>
                      WhatsApp / Mobile Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={leadForm.phone}
                      onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "14px",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#333", marginBottom: "4px" }}>
                      Plot Interest
                    </label>
                    <select
                      value={leadForm.plotInterest}
                      onChange={(e) => setLeadForm({ ...leadForm, plotInterest: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "14px",
                        background: "#fff",
                      }}
                    >
                      <option>3.5 Marla Residential</option>
                      <option>5 Marla Residential</option>
                      <option>10 Marla Residential</option>
                      <option>1 Kanal Residential</option>
                      <option>2 Kanal Residential</option>
                      <option>2 Marla Commercial</option>
                      <option>4 Marla Commercial</option>
                      <option>8 Marla Commercial</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    style={{
                      marginTop: "10px",
                      padding: "12px",
                      borderRadius: "8px",
                      background: "#b2996a",
                      color: "#0B1E2B",
                      fontWeight: 700,
                      fontSize: "13px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Confirm & Download PDF
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <CheckCircle size={48} color="#10B981" style={{ margin: "0 auto 16px auto" }} />
                <h4 style={{ margin: "0 0 8px 0", fontSize: "20px", color: "#0B1E2B" }}>
                  Download Started!
                </h4>
                <p style={{ margin: "0 0 20px 0", fontSize: "14px", color: "#666", lineHeight: 1.6 }}>
                  Thank you, <strong>{leadForm.name}</strong>. Your official Royal Swiss City payment schedule PDF is downloading. An HRL representative will also share detailed allotment guidelines with you.
                </p>
                <button
                  onClick={() => {
                    setDownloadModalOpen(false);
                    setDownloadSuccess(false);
                  }}
                  style={{
                    padding: "10px 24px",
                    borderRadius: "999px",
                    background: "#0B1E2B",
                    color: "#ffffff",
                    fontSize: "12px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <SiteFooter />
    </main>
  );
}
