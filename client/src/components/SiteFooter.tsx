import { useState } from "react";
import { ChevronDown, Instagram, Facebook, Youtube } from "lucide-react";

export function SiteFooter() {
  const [openFooter, setOpenFooter] = useState<string | null>(null);

  const footerAccordions = [
    {
      title: "The City",
      desc: "Discover sustainable riverfront urban living at Royal Swiss City Lahore featuring solar infrastructure, 40-ft minimum roads, aquatic parks, and complete civic zoning.",
      link: "/the-city",
      cta: "EXPLORE THE CITY →",
    },
    {
      title: "Payment Plan",
      desc: "Official Royal Swiss City 4-year monthly installment schedules for 2026. Convenient booking from PKR 250,000 and monthly installments from PKR 25,000.",
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
      desc: "Royal Swiss City is engineered and built by HRL Construction Pvt Ltd (Habib Rafiq Construction Pvt Ltd), bringing over 60 years of national mega-project EPC leadership.",
      link: "/developer",
      cta: "DISCOVER HRL CONSTRUCTION PVT LTD LEGACY →",
    },
    {
      title: "FAQ",
      desc: "Browse verified answers to buyer questions regarding NOC status, plot allotment processes, possession timelines, and HRL Construction Pvt Ltd construction milestones.",
      link: "/faq",
      cta: "READ BUYER FAQ →",
    },
    {
      title: "Enquire",
      desc: "Connect directly with the official HRL Construction Pvt Ltd sales desk for customized quotations, plot availability, site tour bookings, and dealership authorizations.",
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
          borderTop: "1px solid rgba(178, 153, 106, 0.25)",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <a href="/" style={{ color: "#b2996a", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600, textDecoration: "none" }}>Home</a>
        <a href="/the-city" style={{ color: "#b2996a", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600, textDecoration: "none" }}>The City</a>
        <a href="/payment-plan" style={{ color: "#b2996a", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600, textDecoration: "none" }}>Payment Plan</a>
        <a href="/location" style={{ color: "#b2996a", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600, textDecoration: "none" }}>Location</a>
        <a href="/developer" style={{ color: "#b2996a", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600, textDecoration: "none" }}>Developer</a>
        <a href="/enquire" style={{ color: "#b2996a", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600, textDecoration: "none" }}>Enquire</a>
        <a href="/faq" style={{ color: "#b2996a", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600, textDecoration: "none" }}>FAQ</a>
      </nav>

      <div className="footer-socials">
        <a href="https://instagram.com/royalswisscity" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram">
          <Instagram size={22} />
        </a>
        <a href="https://facebook.com/royalswisscity" target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook">
          <Facebook size={22} />
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
          © 2026 ROYAL SWISS CITY LAHORE · DEVELOPED BY HRL CONSTRUCTION PVT LTD · ALL RIGHTS RESERVED
        </span>
      </div>
    </footer>
  );
}

export default SiteFooter;
