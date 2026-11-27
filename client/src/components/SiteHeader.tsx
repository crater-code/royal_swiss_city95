import { useState } from "react";
import { Menu, X, ChevronRight, Phone, MessageSquare } from "lucide-react";

interface SiteHeaderProps {
  scrolled?: boolean;
  forceScrolled?: boolean;
}

export function SiteHeader({ scrolled = false, forceScrolled = false }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isScrolled = forceScrolled || scrolled;

  const leftNav = [
    { label: "HOME", href: "/" },
    { label: "THE CITY", href: "/the-city" },
    { label: "PAYMENT PLAN", href: "/payment-plan" },
    { label: "BUSINESS SALES PARTNER", href: "/#partner" },
  ];

  const rightNav = [
    { label: "GALLERY", href: "/#features" },
    { label: "LOCATION", href: "/location" },
    { label: "DEVELOPER", href: "/developer" },
    { label: "ENQUIRE", href: "/enquire" },
  ];

  const allNavLinks = [...leftNav, ...rightNav];

  return (
    <>
      <header className={`walk-header luxury-ribbon-header ${isScrolled ? "is-scrolled" : ""}`}>
        {/* Desktop Luxury Top Bar (> 920px) - Attached to Top */}
        <div className="luxury-topbar-desktop">
          <div className="luxury-topbar-inner">
            {/* Left Nav Group */}
            <nav className="luxury-nav-group luxury-nav-left" aria-label="Primary Navigation Left">
              {leftNav.map((item, idx) => (
                <div key={item.label} className="luxury-nav-item-wrapper">
                  <a href={item.href} className="luxury-nav-link">
                    {item.label}
                  </a>
                  {idx < leftNav.length - 1 && <span className="luxury-nav-divider" />}
                </div>
              ))}
            </nav>

            {/* Center Anchor with Big Official Logo and Gentle Under-Tuck */}
            <div className="luxury-center-anchor">
              {/* Big, clean, readable official logo with NO outer shell */}
              <a href="/" className="luxury-official-logo-link" aria-label="Royal Swiss City Home">
                <img
                  src="/logo.webp?v=2"
                  alt="Royal Swiss City Official Logo"
                  className="luxury-official-logo-img"
                  width={96}
                  height={96}
                  loading="eager"
                />
              </a>

              {/* Blue Underlayer Cradle SVG tucking gently under the logo */}
              <svg
                className="luxury-cradle-svg"
                viewBox="0 0 180 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Blue cradle body fill */}
                <path
                  d="M 0 0 L 22 0 C 48 0, 64 28, 90 28 C 116 28, 132 0, 158 0 L 180 0 L 180 16 L 158 16 C 132 16, 116 44, 90 44 C 64 44, 48 16, 22 16 L 0 16 Z"
                  fill="url(#navyGradFull)"
                />
                {/* Gold trim stroke along the top cradle curve */}
                <path
                  d="M 0 0 L 22 0 C 48 0, 64 28, 90 28 C 116 28, 132 0, 158 0 L 180 0"
                  stroke="url(#goldGradFull)"
                  strokeWidth="2.5"
                  fill="none"
                />
              </svg>
            </div>

            {/* Right Nav Group */}
            <nav className="luxury-nav-group luxury-nav-right" aria-label="Primary Navigation Right">
              {rightNav.map((item, idx) => (
                <div key={item.label} className="luxury-nav-item-wrapper">
                  <a href={item.href} className="luxury-nav-link">
                    {item.label}
                  </a>
                  {idx < rightNav.length - 1 && <span className="luxury-nav-divider" />}
                </div>
              ))}
            </nav>
          </div>

          {/* Left and Right Metallic Gold Trim Lines */}
          <div className="luxury-bar-gold-line luxury-bar-gold-left" />
          <div className="luxury-bar-gold-line luxury-bar-gold-right" />

          {/* Left and Right Deep Royal Navy Undercarriages (Clearly Visible 16px) */}
          <div className="luxury-bar-navy-underlayer luxury-bar-navy-left" />
          <div className="luxury-bar-navy-underlayer luxury-bar-navy-right" />
        </div>

        {/* Mobile Luxury Bar (<= 920px) - Attached to Top */}
        <div className="luxury-topbar-mobile">
          <button
            className="luxury-mobile-menu-btn"
            aria-label="Open Navigation Menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} color="#0B1E2B" />
          </button>

          <a href="/" className="luxury-mobile-center-logo" aria-label="Royal Swiss City Home">
            <img
              src="/logo.webp?v=2"
              alt="Royal Swiss City Official Logo"
              className="luxury-mobile-clean-logo"
              width={52}
              height={52}
            />
          </a>

          <a href="/enquire" className="luxury-mobile-enquire-btn">
            ENQUIRE
          </a>
        </div>

        {/* Global SVG Gradients */}
        <svg width="0" height="0" style={{ position: "absolute", visibility: "hidden" }}>
          <defs>
            <linearGradient id="goldGradFull" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#96743c" />
              <stop offset="25%" stopColor="#dfba73" />
              <stop offset="50%" stopColor="#fff1c2" />
              <stop offset="75%" stopColor="#dfba73" />
              <stop offset="100%" stopColor="#96743c" />
            </linearGradient>
            <linearGradient id="navyGradFull" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#07233B" />
              <stop offset="100%" stopColor="#031422" />
            </linearGradient>
          </defs>
        </svg>
      </header>

      {/* Luxury Mobile Navigation Drawer */}
      <div className={`luxury-mobile-drawer ${menuOpen ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        <div className="luxury-drawer-backdrop" onClick={() => setMenuOpen(false)} />
        <div className="luxury-drawer-content">
          <div className="luxury-drawer-header">
            <div className="luxury-drawer-brand">
              <img src="/logo.webp?v=2" alt="Royal Swiss City" width={48} height={48} />
              <div>
                <span className="luxury-drawer-title">ROYAL SWISS CITY</span>
                <span className="luxury-drawer-sub">HRL CONSTRUCTION PVT LTD</span>
              </div>
            </div>
            <button className="luxury-drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close Menu">
              <X size={22} color="#b2996a" />
            </button>
          </div>

          <div className="luxury-drawer-divider" />

          <nav className="luxury-drawer-nav">
            {allNavLinks.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="luxury-drawer-link"
                onClick={() => setMenuOpen(false)}
              >
                <span className="luxury-drawer-num">0{index + 1}</span>
                <span className="luxury-drawer-label">{item.label}</span>
                <ChevronRight size={16} className="luxury-drawer-arrow" />
              </a>
            ))}
          </nav>

          <div className="luxury-drawer-footer">
            <a href="tel:+923000000000" className="luxury-drawer-action-btn">
              <Phone size={15} />
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-drawer-action-btn gold"
            >
              <MessageSquare size={15} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteHeader;
