import React from "react";

export function FleurDeLisOrnament({ size = 18 }: { size?: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginBottom: "8px" }}>
      <span style={{ width: "45px", height: "1px", background: "linear-gradient(90deg, transparent, #dfba73)" }} />
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.5))" }}>
        <defs>
          <linearGradient id="fleur-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fae2a6" />
            <stop offset="50%" stopColor="#dfba73" />
            <stop offset="100%" stopColor="#b68832" />
          </linearGradient>
        </defs>
        {/* Central spear petal */}
        <path
          d="M12 2C12 2 10.2 6.5 10.2 9C10.2 10.6 11 11.8 12 12.2C13 11.8 13.8 10.6 13.8 9C13.8 6.5 12 2 12 2Z"
          fill="url(#fleur-gold-grad)"
        />
        {/* Left curving wing petal */}
        <path
          d="M9.8 11.5C8.8 11.5 6.5 10.8 5.5 8.5C4.6 6.5 5.8 4.8 6.5 4.8C7.2 4.8 7.5 6.2 8.2 7.8C8.8 9 9.8 10.2 10.2 10.8C9.9 11.2 9.8 11.5 9.8 11.5Z"
          fill="url(#fleur-gold-grad)"
        />
        {/* Right curving wing petal */}
        <path
          d="M14.2 11.5C15.2 11.5 17.5 10.8 18.5 8.5C19.4 6.5 18.2 4.8 17.5 4.8C16.8 4.8 16.5 6.2 15.8 7.8C15.2 9 14.2 10.2 13.8 10.8C14.1 11.2 14.2 11.5 14.2 11.5Z"
          fill="url(#fleur-gold-grad)"
        />
        {/* Horizontal ribbon bar */}
        <rect x="7" y="12" width="10" height="2" rx="0.5" fill="url(#fleur-gold-grad)" />
        {/* Bottom anchor stem */}
        <path
          d="M10 14.5C10 16.5 10.8 18.5 12 20C13.2 18.5 14 16.5 14 14.5H10Z"
          fill="url(#fleur-gold-grad)"
        />
      </svg>
      <span style={{ width: "45px", height: "1px", background: "linear-gradient(90deg, #dfba73, transparent)" }} />
    </div>
  );
}

export function BetterLifeSwoosh() {
  return (
    <svg
      viewBox="0 0 260 22"
      fill="none"
      style={{
        position: "absolute",
        left: "-4%",
        bottom: "-12px",
        width: "112%",
        height: "auto",
        pointerEvents: "none",
        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
      }}
    >
      <defs>
        <linearGradient id="swoosh-gold-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fae2a6" stopOpacity="0.1" />
          <stop offset="20%" stopColor="#f5ce7a" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#e5a93c" />
          <stop offset="80%" stopColor="#dfba73" />
          <stop offset="100%" stopColor="#b68832" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <path
        d="M3 13.5C48 19 120 21.5 254 6.5C192 17.5 115 16.5 5 10.5C2.2 10.3 1.2 13.2 3 13.5Z"
        fill="url(#swoosh-gold-grad)"
      />
    </svg>
  );
}

export function RudaVisionIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))" }}>
      <defs>
        <linearGradient id="ruda-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fae2a6" />
          <stop offset="50%" stopColor="#dfba73" />
          <stop offset="100%" stopColor="#b68832" />
        </linearGradient>
      </defs>
      {/* Arch / dome of Ravi riverfront */}
      <path
        d="M6 18C6 11.3726 10.4772 6 16 6C21.5228 6 26 11.3726 26 18"
        stroke="url(#ruda-gold-grad)"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Rising sun rays */}
      <path d="M16 9V11.5" stroke="url(#ruda-gold-grad)" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M11 11.5L12.5 13.5" stroke="url(#ruda-gold-grad)" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M21 11.5L19.5 13.5" stroke="url(#ruda-gold-grad)" strokeWidth="1.75" strokeLinecap="round" />
      {/* Sun disk semicircle */}
      <path
        d="M12 17.5C12 15.2909 13.7909 13.5 16 13.5C18.2091 13.5 20 15.2909 20 17.5"
        stroke="url(#ruda-gold-grad)"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* River wave upper */}
      <path
        d="M5 21.5C8.5 19.5 11.5 23 16 21.5C20.5 20 23.5 23.5 27 21.5"
        stroke="url(#ruda-gold-grad)"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* River wave lower */}
      <path
        d="M7 26C10 24.5 12.5 27 16 25.5C19.5 24 22 26.5 25 25"
        stroke="url(#ruda-gold-grad)"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function QantaraCommercialIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))" }}>
      <defs>
        <linearGradient id="qantara-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fae2a6" />
          <stop offset="50%" stopColor="#dfba73" />
          <stop offset="100%" stopColor="#b68832" />
        </linearGradient>
      </defs>
      {/* Center spire */}
      <path d="M16 4V6" stroke="url(#qantara-gold-grad)" strokeWidth="1.75" strokeLinecap="round" />
      {/* Main commercial tower */}
      <path
        d="M12 8L16 6L20 8V27H12V8Z"
        stroke="url(#qantara-gold-grad)"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      {/* Left modern wing */}
      <path
        d="M6 13L12 10.5V27H6V13Z"
        stroke="url(#qantara-gold-grad)"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      {/* Right modern wing */}
      <path
        d="M26 13L20 10.5V27H26V13Z"
        stroke="url(#qantara-gold-grad)"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      {/* Modern glass facade lines */}
      <line x1="14" y1="11" x2="18" y2="11" stroke="url(#qantara-gold-grad)" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="14" y1="15" x2="18" y2="15" stroke="url(#qantara-gold-grad)" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="14" y1="19" x2="18" y2="19" stroke="url(#qantara-gold-grad)" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="14" y1="23" x2="18" y2="23" stroke="url(#qantara-gold-grad)" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="8" y1="15" x2="10.5" y2="15" stroke="url(#qantara-gold-grad)" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="8" y1="19" x2="10.5" y2="19" stroke="url(#qantara-gold-grad)" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="21.5" y1="15" x2="24" y2="15" stroke="url(#qantara-gold-grad)" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="21.5" y1="19" x2="24" y2="19" stroke="url(#qantara-gold-grad)" strokeWidth="1.4" strokeLinecap="round" />
      {/* Horizon baseline */}
      <path d="M4 27H28" stroke="url(#qantara-gold-grad)" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function NatureLivingIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))" }}>
      <defs>
        <linearGradient id="nature-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fae2a6" />
          <stop offset="50%" stopColor="#dfba73" />
          <stop offset="100%" stopColor="#b68832" />
        </linearGradient>
      </defs>
      {/* Tilted organic leaf */}
      <path
        d="M24 6C18 6 9 10 9 20C9 24.5 12.5 27 16 27C24 27 27 16 27 6Z"
        stroke="url(#nature-gold-grad)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Central spine down to stem */}
      <path
        d="M24 6C20 13 15 18 6 25"
        stroke="url(#nature-gold-grad)"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Delicate lateral veins */}
      <path
        d="M17 15C19.5 16 22 15.5 24 14"
        stroke="url(#nature-gold-grad)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M14 19C15.5 21 17.5 22 20 22"
        stroke="url(#nature-gold-grad)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SecureCommunityIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))" }}>
      <defs>
        <linearGradient id="secure-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fae2a6" />
          <stop offset="50%" stopColor="#dfba73" />
          <stop offset="100%" stopColor="#b68832" />
        </linearGradient>
      </defs>
      {/* Sovereign crest shield */}
      <path
        d="M16 4.5L6 8.5V16C6 22.5 10.3 27 16 28.5C21.7 27 26 22.5 26 16V8.5L16 4.5Z"
        stroke="url(#secure-gold-grad)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner security checkmark */}
      <path
        d="M11.5 16L14.5 19L20.5 12.5"
        stroke="url(#secure-gold-grad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InvestmentPotentialIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))" }}>
      <defs>
        <linearGradient id="invest-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fae2a6" />
          <stop offset="50%" stopColor="#dfba73" />
          <stop offset="100%" stopColor="#b68832" />
        </linearGradient>
      </defs>
      {/* Horizontal base */}
      <path d="M5 26H27" stroke="url(#invest-gold-grad)" strokeWidth="1.75" strokeLinecap="round" />
      {/* Bar 1 */}
      <rect x="7" y="19" width="3.5" height="7" rx="0.5" stroke="url(#invest-gold-grad)" strokeWidth="1.5" />
      {/* Bar 2 */}
      <rect x="13.5" y="14" width="3.5" height="12" rx="0.5" stroke="url(#invest-gold-grad)" strokeWidth="1.5" />
      {/* Bar 3 */}
      <rect x="20" y="9" width="3.5" height="17" rx="0.5" stroke="url(#invest-gold-grad)" strokeWidth="1.5" />
      {/* Dynamic growth polyline */}
      <path
        d="M6 16L12 11.5L18 14.5L25.5 6"
        stroke="url(#invest-gold-grad)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Growth arrow head */}
      <path
        d="M21 6H25.5V10.5"
        stroke="url(#invest-gold-grad)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
