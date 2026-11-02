import { useState } from "react";
import { ChevronDown, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

export function SiteFooter() {
  const [openFooter, setOpenFooter] = useState<string | null>(null);

  const footerAccordions = [
    {
      title: "Residential Plots",
      desc: "Discover premium residential plot sizes: 3.5 Marla, 5 Marla, 10 Marla, 1 Kanal, and 2 Kanal on Lahore's Ravi Riverfront with flexible installment plans.",
      link: "/payment-plan",
      cta: "VIEW PAYMENT PLAN →",
    },
    {
      title: "Commercial Plots",
      desc: "Prime commercial plots in 2 Marla, 4 Marla, and 8 Marla located along 120-ft main commercial boulevards designed for retail, offices, and high-yield investments.",
      link: "/payment-plan",
      cta: "VIEW COMMERCIAL PRICING →",
    },
    {
      title: "The City",
      desc: "Discover sustainable riverfront urban living at Royal Swiss City Lahore featuring solar infrastructure, 40-ft minimum roads, aquatic parks, and complete civic zoning.",
      link: "/the-city",
      cta: "EXPLORE THE CITY →",
    },
    {
      title: "Payment Plan",
      desc: "Official Royal Swiss City installment schedules for 2026. Convenient 3 to 4 year quarterly installment plans with low initial down payment options.",
      link: "/payment-plan",
      cta: "CHECK INSTALLMENT SCHEDULE →",
    },
    {
      title: "Location",
      desc: "Prime positioning on Lahore's Ravi Riverfront with direct interchange access to Lahore Ring Road, M-2 Motorway, and Allama Iqbal International Airport.",
      link: "/location",
      cta: "VIEW ACCESS MAP →",
    },
    {
      title: "Developer",
      desc: "Royal Swiss City is engineered and built by HRL Construction Pvt Limited (Habib Rafiq), bringing over 60 years of national mega-project EPC leadership.",
      link: "/developer",
      cta: "DISCOVER HRL LEGACY →",
    },
    {
      title: "FAQ",
      desc: "Browse verified answers to buyer questions regarding NOC status, plot allotment processes, possession timelines, and HRL construction milestones.",
      link: "/faq",
      cta: "READ BUYER FAQ →",
    },
    {
      title: "Enquire",
      desc: "Connect directly with the official HRL sales desk for customized quotations, plot availability, site tour bookings, and dealership authorizations.",
      link: "/enquire",
      cta: "SUBMIT INQUIRY →",
    },
  ];

  const col1 = footerAccordions.filter((_, i) => i % 2 === 0);
  const col2 = footerAccordions.filter((_, i) => i % 2 === 1);

  return (
    <footer
      className="walk-footer reveal-section"
      style={{
        backgroundImage: "url('/footer_bg_desktop.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="footer-accordions">
        <div className="footer-accordion-col">
          {col1.map((item) => (
            <div className={openFooter === item.title ? "open" : ""} key={item.title}>
              <button
                type="button"
                onClick={() => setOpenFooter(openFooter === item.title ? null : item.title)}
                aria-expanded={openFooter === item.title}
              >
                {item.title}
                <ChevronDown size={14} />
              </button>
              {openFooter === item.title && (
                <div>
                  <p style={{ whiteSpace: "pre-line", margin: "8px 0" }}>{item.desc}</p>
                  <a
                    href={item.link}
                    style={{
                      display: "inline-block",
                      marginTop: "12px",
                      color: "#b2996a",
                      fontSize: "10px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    {item.cta}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="footer-accordion-col">
          {col2.map((item) => (
            <div className={openFooter === item.title ? "open" : ""} key={item.title}>
              <button
                type="button"
                onClick={() => setOpenFooter(openFooter === item.title ? null : item.title)}
                aria-expanded={openFooter === item.title}
              >
                {item.title}
                <ChevronDown size={14} />
              </button>
              {openFooter === item.title && (
                <div>
                  <p style={{ whiteSpace: "pre-line", margin: "8px 0" }}>{item.desc}</p>
                  <a
                    href={item.link}
                    style={{
                      display: "inline-block",
                      marginTop: "12px",
                      color: "#b2996a",
                      fontSize: "10px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    {item.cta}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Direct Site Links Row */}
      <nav
        aria-label="Footer Quick Links"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "18px 28px",
          padding: "24px 20px 10px 20px",
          borderTop: "1px solid rgba(255, 255, 255, 0.12)",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <a href="/" style={{ color: "rgba(255,255,255,0.85)", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase" }}>Home</a>
        <a href="/the-city" style={{ color: "rgba(255,255,255,0.85)", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase" }}>The City</a>
        <a href="/payment-plan" style={{ color: "#b2996a", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600 }}>Payment Plan</a>
        <a href="/location" style={{ color: "#b2996a", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600 }}>Location</a>
        <a href="/developer" style={{ color: "rgba(255,255,255,0.85)", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase" }}>Developer</a>
        <a href="/enquire" style={{ color: "rgba(255,255,255,0.85)", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase" }}>Enquire</a>
        <a href="/faq" style={{ color: "rgba(255,255,255,0.85)", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase" }}>FAQ</a>
        <a href="/sitemap.xml" style={{ color: "rgba(255,255,255,0.85)", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase" }}>Sitemap</a>
      </nav>

      <div className="footer-socials">
        <a href="https://instagram.com/royalswisscity" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram">
          <Instagram size={22} />
        </a>
        <a href="https://facebook.com/royalswisscity" target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook">
          <Facebook size={22} />
        </a>
        <a href="https://tiktok.com/@royalswisscity" target="_blank" rel="noopener noreferrer" title="TikTok" aria-label="TikTok">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 0 1-2.4 2.4 2.4 2.4 0 0 1-2.4-2.4 2.4 2.4 0 0 1 2.4-2.4c.34 0 .67.05.98.15V9.41a5.81 5.81 0 0 0-.98-.08 6.04 6.04 0 0 0-6.04 6.04 6.04 6.04 0 0 0 6.04 6.04 6.04 6.04 0 0 0 6.04-6.04v-3.1a7.7 7.7 0 0 0 3.77 1.01V9.81a4.77 4.77 0 0 1-.77-.06z" />
          </svg>
        </a>
        <a href="https://linkedin.com/company/royalswisscity" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
          <Linkedin size={22} />
        </a>
        <a href="https://youtube.com/@royalswisscity" target="_blank" rel="noopener noreferrer" title="YouTube" aria-label="YouTube">
          <Youtube size={22} />
        </a>
        <a href="https://x.com/royalswisscity" target="_blank" rel="noopener noreferrer" title="X" aria-label="X">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.637l-5.1-6.694-5.867 6.694h-3.306l7.733-8.835L2.25 2.25h6.814l4.882 6.45L18.244 2.25zM17.083 18.386h1.83L6.959 4.155H5.049l12.034 14.231z" />
          </svg>
        </a>
      </div>

      <div className="footer-contact">
        <b>Where life happens.</b>
        <span>
          © 2026 ROYAL SWISS CITY LAHORE · DEVELOPED BY HRL CONSTRUCTION PVT LIMITED · ALL RIGHTS RESERVED
        </span>
      </div>
    </footer>
  );
}

export default SiteFooter;
