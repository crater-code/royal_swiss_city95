import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";
import {
  FleurDeLisOrnament,
  BetterLifeSwoosh,
  RudaVisionIcon,
  QantaraCommercialIcon,
  NatureLivingIcon,
  SecureCommunityIcon,
  InvestmentPotentialIcon,
} from "./HeroSheetIcons";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const img = { hero: "/city-aerial.webp" };

// Preload image
const preloadImage = (src: string) => {
  const image = new Image();
  image.src = src;
};

export function HeroCapsuleAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    preloadImage("/where-opportunity-bg-clear.png");
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-capsule-stage",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: ".hero-capsule-pin",
        anticipatePin: 1,
      },
    });

    if (!isMobile) {
      // DESKTOP ANIMATION
      tl.to(".art-capsule-desktop", {
        bottom: "10vh",
        duration: 1,
      });

      tl.to(
        ".art-capsule-desktop",
        {
          width: "76vw",
          height: "38vh",
          bottom: "8vh",
          duration: 1,
        },
        0
      );

      tl.to(
        ".art-content-desktop h2",
        {
          fontSize: "calc(1.8rem + 15px)",
          duration: 1,
        },
        0
      );

      tl.to(
        ".art-content-desktop p",
        {
          fontSize: "0.8rem",
          opacity: 1,
          duration: 1,
        },
        0
      );

      tl.to(".art-capsule-desktop", {
        width: "100vw",
        height: "100vh",
        bottom: "0vh",
        borderRadius: "0px",
        duration: 1.5,
        ease: "power2.inOut",
      });

      tl.to(
        ".art-content-desktop h2",
        {
          fontSize: "calc(4rem + 15px)",
          duration: 1.5,
        },
        "-=1.5"
      );

      tl.to(
        ".art-content-desktop p",
        {
          fontSize: "1rem",
          duration: 1.5,
        },
        "-=1.5"
      );

      tl.to(
        ".art-content-desktop",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.35"
      );
    } else {
      // MOBILE ANIMATION (3 STAGES - SMOOTHER & FASTER)
      tl.to(".art-capsule-mobile", {
        width: "90vw",
        height: "80vh",
        bottom: "6vh",
        borderRadius: "150px 150px 0px 0px",
        duration: 1.2,
        ease: "power1.inOut",
      });

      tl.to(".art-capsule-mobile", {
        width: "96vw",
        height: "90vh",
        bottom: "3vh",
        borderRadius: "80px 80px 0px 0px",
        duration: 1.1,
        ease: "power1.inOut",
      });

      tl.to(".art-capsule-mobile", {
        width: "100vw",
        height: "100vh",
        bottom: "0vh",
        borderRadius: "0px",
        duration: 1.0,
        ease: "power1.inOut",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-capsule-stage"
      style={{
        height: "240vh",
        position: "relative",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .art-capsule-desktop {
            display: none !important;
          }
        }
        @media (min-width: 769px) {
          .art-capsule-mobile {
            display: none !important;
          }
        }
      `}</style>
      {/* PRELOAD IMAGE - Render immediately but hide off-screen */}
      

      <div
        className="hero-capsule-pin"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* HERO BACKGROUND - The main hero section */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/city-aerial.webp"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            >
              <source src={typeof window !== "undefined" && window.innerWidth <= 768 ? "/hero-mobile-bg.mp4" : "/home_desktop_bg.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div
            className="hero-shade"
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(rgba(0,0,0,.15), rgba(0,0,0,.35))",
            }}
          />
          <div
            className="hero-copy"
            style={{
              position: "absolute",
              zIndex: 2,
              color: "white",
              textAlign: "center",
              padding: "30px",
              top: window.matchMedia("(max-width: 768px)").matches ? "70%" : "75%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              maxWidth: "90vw",
            }}
          >
            <p
              className="hero-kicker"
              style={{
                fontSize: "clamp(8px, 1.5vw, 10px)",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "20px",
                whiteSpace: window.matchMedia("(max-width: 768px)").matches ? "normal" : "nowrap",
                maxWidth: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              RAVI RIVERFRONT · LAHORE · PAKISTAN
            </p>
            <h1
              style={{
                fontSize: window.matchMedia("(max-width: 768px)").matches ? "clamp(3rem, 10vw, 8rem)" : "clamp(2.5rem, 6vw, 6rem)",
                fontWeight: 400,
                letterSpacing: "-0.06em",
                lineHeight: 1.1,
                marginBottom: "20px",
                textAlign: "center",
                fontStyle: "normal",
              }}
            >
              ROYAL SWISS CITY
            </h1>
          </div>
          <div
            className="hero-scroll"
            style={{
              position: "absolute",
              left: "50%",
              bottom: "35px",
              transform: "translateX(-50%)",
              color: "white",
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} />
          </div>
        </div>

        {/* DESKTOP VERSION */}
        <div
          className="art-capsule art-capsule-desktop"
          style={{
            position: "absolute",
            zIndex: 20,
            left: "50%",
            transform: "translateX(-50%)",
            overflow: "hidden",
            willChange: "width, height, bottom, border-radius",
            display: "block",
            bottom: "-18vh",
            width: "30vw",
            height: "18vh",
            borderRadius: "999px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            backgroundImage: "url(/where-opportunity-bg-clear.png)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {/* Overlay behind text and in front of picture for maximum readability */}
          <div
            className="art-overlay-desktop"
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(5, 17, 38, 0.72) 0%, rgba(7, 23, 50, 0.60) 48%, rgba(8, 26, 56, 0.28) 78%, rgba(0, 0, 0, 0.08) 100%)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          <div
            className="art-content-desktop"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div
              style={{
                maxWidth: "1160px",
                margin: "0 auto",
                padding: "20px 30px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              {/* Top Golden Ornament */}
              <FleurDeLisOrnament size={18} />

              {/* Kicker */}
              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "#dfba73",
                  fontWeight: 700,
                  marginBottom: "12px",
                }}
              >
                ROYAL SWISS CITY
              </div>

              {/* Main Headline */}
              <h2
                className="hero-capsule-heading"
                style={{
                  fontSize: "clamp(26px, 3.8vw, 50px)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  marginBottom: "16px",
                  color: "#ffffff",
                  lineHeight: 1.15,
                  fontFamily: '"Cormorant Garamond", Georgia, serif !important',
                  textAlign: "center",
                }}
              >
                Where Opportunity Meets a{" "}
                <span
                  style={{
                    position: "relative",
                    display: "inline-block",
                    fontStyle: "italic",
                    color: "#e5a93c",
                    fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif !important',
                    fontWeight: 400,
                  }}
                >
                  Better Life.
                  <BetterLifeSwoosh />
                </span>
              </h2>

              {/* Subtitle 1: RUDA Vision */}
              <p
                style={{
                  fontSize: "clamp(13px, 1.3vw, 16.5px)",
                  lineHeight: 1.5,
                  color: "#ffffff",
                  marginTop: "6px",
                  marginBottom: "8px",
                  maxWidth: "900px",
                  textAlign: "center",
                  fontWeight: 400,
                }}
              >
                A premium, future-ready community in Lahore under the visionary{" "}
                <strong style={{ color: "#e5a93c", fontWeight: 700 }}>RUDA</strong> master plan.
              </p>

              {/* Subtitle 2: Qantara Commercial */}
              <p
                style={{
                  fontSize: "clamp(11.5px, 1.05vw, 14px)",
                  lineHeight: 1.6,
                  color: "rgba(255, 255, 255, 0.88)",
                  marginBottom: "28px",
                  maxWidth: "840px",
                  textAlign: "center",
                  fontWeight: 300,
                }}
              >
                Strategically positioned to be part of{" "}
                <strong style={{ color: "#e5a93c", fontWeight: 700 }}>Qantara Commercial</strong>, Royal Swiss City brings together modern living, business growth and long-term value — in one exceptional destination.
              </p>

              {/* 5 Feature Pillars Row */}
              <div
                className="sheet-pillars-desktop"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  maxWidth: "1000px",
                  margin: "0 auto",
                }}
              >
                {[
                  { IconComponent: RudaVisionIcon, line1: "PART OF", line2: "RUDA VISION" },
                  { IconComponent: QantaraCommercialIcon, line1: "FUTURE", line2: "QANTARA COMMERCIAL" },
                  { IconComponent: NatureLivingIcon, line1: "NATURE-INSPIRED", line2: "LIVING" },
                  { IconComponent: SecureCommunityIcon, line1: "A SECURE", line2: "COMMUNITY" },
                  { IconComponent: InvestmentPotentialIcon, line1: "HIGH", line2: "INVESTMENT POTENTIAL" },
                ].map((pillar, idx, arr) => (
                  <div key={pillar.line2} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        flex: 1,
                        padding: "0 8px",
                      }}
                    >
                      <div style={{ marginBottom: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <pillar.IconComponent size={32} />
                      </div>
                      <span
                        style={{
                          fontSize: "9.5px",
                          letterSpacing: "1.2px",
                          color: "rgba(255, 255, 255, 0.72)",
                          textTransform: "uppercase",
                          fontWeight: 600,
                          lineHeight: 1.3,
                        }}
                      >
                        {pillar.line1}
                      </span>
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: "1.2px",
                          color: "#ffffff",
                          textTransform: "uppercase",
                          fontWeight: 700,
                          lineHeight: 1.3,
                          marginTop: "2px",
                        }}
                      >
                        {pillar.line2}
                      </span>
                    </div>
                    {idx < arr.length - 1 && (
                      <div
                        style={{
                          width: "1px",
                          height: "34px",
                          background: "linear-gradient(180deg, rgba(223, 186, 115, 0.1) 0%, rgba(223, 186, 115, 0.5) 50%, rgba(223, 186, 115, 0.1) 100%)",
                          flexShrink: 0,
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE VERSION */}
        <div
          className="art-capsule art-capsule-mobile"
          style={{
            position: "absolute",
            zIndex: 20,
            left: "50%",
            transform: "translateX(-50%)",
            overflow: "hidden",
            willChange: "width, height, bottom, border-radius",
            display: "block",
            bottom: "-65vh",
            width: "85vw",
            height: "65vh",
            borderRadius: "200px 200px 0px 0px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            backgroundImage: "url(/where-opportunity-bg-clear.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay behind text and in front of picture for maximum readability */}
          <div
            className="art-overlay-mobile"
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(5, 17, 38, 0.78) 0%, rgba(7, 23, 50, 0.65) 52%, rgba(8, 26, 56, 0.32) 80%, rgba(0, 0, 0, 0.12) 100%)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          <div
            className="art-content-mobile"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              position: "relative",
              zIndex: 3,
            }}
          >
            <div
              className="art-content-inner"
              style={{
                width: "100%",
                padding: "24px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Top Golden Ornament */}
              <FleurDeLisOrnament size={15} />

              {/* Kicker */}
              <div
                style={{
                  fontSize: "9.5px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#dfba73",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                ROYAL SWISS CITY
              </div>

              {/* Headline */}
              <h2
                className="hero-capsule-heading"
                style={{
                  fontSize: "clamp(20px, 5.5vw, 30px)",
                  marginBottom: "12px",
                  color: "#ffffff",
                  lineHeight: 1.2,
                  letterSpacing: "-0.03em",
                  fontFamily: '"Cormorant Garamond", Georgia, serif !important',
                  fontWeight: 400,
                }}
              >
                Where Opportunity Meets a{" "}
                <span
                  style={{
                    position: "relative",
                    display: "inline-block",
                    fontStyle: "italic",
                    color: "#e5a93c",
                    fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif !important',
                  }}
                >
                  Better Life.
                  <BetterLifeSwoosh />
                </span>
              </h2>

              {/* Subtitles */}
              <p
                style={{
                  fontSize: "12.5px",
                  lineHeight: 1.5,
                  color: "#ffffff",
                  marginTop: "6px",
                  marginBottom: "6px",
                  fontWeight: 400,
                }}
              >
                A premium, future-ready community in Lahore under the visionary{" "}
                <strong style={{ color: "#e5a93c", fontWeight: 700 }}>RUDA</strong> master plan.
              </p>
              <p
                style={{
                  fontSize: "11px",
                  lineHeight: 1.5,
                  color: "rgba(255, 255, 255, 0.85)",
                  marginBottom: "18px",
                  fontWeight: 300,
                  maxWidth: "92%",
                }}
              >
                Strategically positioned to be part of{" "}
                <strong style={{ color: "#e5a93c", fontWeight: 700 }}>Qantara Commercial</strong>, Royal Swiss City brings together modern living, business growth and long-term value — in one exceptional destination.
              </p>

              {/* 5 Feature Pillars in 2-row clean flex */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "12px 8px",
                  width: "100%",
                  maxWidth: "360px",
                }}
              >
                {[
                  { IconComponent: RudaVisionIcon, line1: "PART OF", line2: "RUDA VISION" },
                  { IconComponent: QantaraCommercialIcon, line1: "FUTURE", line2: "QANTARA COMMERCIAL" },
                  { IconComponent: NatureLivingIcon, line1: "NATURE-INSPIRED", line2: "LIVING" },
                  { IconComponent: SecureCommunityIcon, line1: "A SECURE", line2: "COMMUNITY" },
                  { IconComponent: InvestmentPotentialIcon, line1: "HIGH", line2: "INVESTMENT POTENTIAL" },
                ].map((pillar) => (
                  <div
                    key={pillar.line2}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      width: "30%",
                      minWidth: "90px",
                    }}
                  >
                    <div style={{ marginBottom: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <pillar.IconComponent size={26} />
                    </div>
                    <span
                      style={{
                        fontSize: "8.5px",
                        letterSpacing: "0.8px",
                        color: "rgba(255, 255, 255, 0.72)",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    >
                      {pillar.line1}
                    </span>
                    <span
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.8px",
                        color: "#ffffff",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        lineHeight: 1.2,
                        marginTop: "1px",
                      }}
                    >
                      {pillar.line2}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
