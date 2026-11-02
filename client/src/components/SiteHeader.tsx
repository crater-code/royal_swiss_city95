import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

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
  ];

  const rightNav = [
    { label: "LOCATION", href: "/location" },
    { label: "DEVELOPER", href: "/developer" },
    { label: "ENQUIRE", href: "/enquire" },
  ];

  const mobileNav = [
    { label: "HOME", href: "/" },
    { label: "THE CITY", href: "/the-city" },
    { label: "PAYMENT PLAN", href: "/payment-plan" },
    { label: "LOCATION", href: "/location" },
    { label: "DEVELOPER", href: "/developer" },
    { label: "ENQUIRE", href: "/enquire" },
  ];

  return (
    <>
      <header className={`walk-header ${isScrolled ? "is-scrolled" : ""}`}>
        <button
          className="mobile-menu-trigger"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={22} strokeWidth={1.4} />
        </button>

        <nav className="desktop-links desktop-links--left" aria-label="Primary Navigation Left">
          {leftNav.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="centered-brand" href="/" aria-label="Royal Swiss City Home">
          <img
            className="brand-logo"
            src="/logo.webp?v=2"
            alt="Royal Swiss City Lahore - HRL Construction Pvt Limited"
            loading="eager"
            width={260}
            height={140}
          />
        </a>

        <nav className="desktop-links desktop-links--right" aria-label="Primary Navigation Right">
          {rightNav.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        <div className="mobile-menu__top">
          <button onClick={() => setMenuOpen(false)} aria-label="Close Menu">
            <ChevronDown size={22} />
          </button>
          <button onClick={() => setMenuOpen(false)} aria-label="Close Menu">
            <X size={22} />
          </button>
        </div>
        <div className="mobile-menu__links">
          {mobileNav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default SiteHeader;
