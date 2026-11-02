import { useState, useEffect } from "react";
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Car, 
  Compass, 
  Plane, 
  Building2, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Maximize2,
  Calendar,
  Layers,
  CheckCircle2
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function Location() {
  const [mapView, setMapView] = useState<"google" | "masterplan">("masterplan");
  const [siteTourModalOpen, setSiteTourModalOpen] = useState(false);
  const [tourSuccess, setTourSuccess] = useState(false);
  const [tourForm, setTourForm] = useState({ name: "", phone: "", date: "", guests: "2 People" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const connectivityCards = [
    {
      title: "Lahore Ring Road (SL-3 / Interchange)",
      time: "5 - 7 Mins",
      type: "Direct Interchange",
      desc: "Direct interchange connectivity providing rapid signal-free transit across DHA Lahore, Gulberg, Lake City, and North Lahore arteries.",
      icon: Navigation,
      badge: "Express Access",
    },
    {
      title: "M-2 Motorway (Islamabad-Lahore)",
      time: "10 Mins",
      type: "Signal-Free Transit",
      desc: "Immediate signal-free gateway through Babu Sabu & Ravi interchange, unlocking seamless inter-city travel to Islamabad and motorways.",
      icon: Car,
      badge: "National Transit",
    },
    {
      title: "Allama Iqbal International Airport",
      time: "25 Mins",
      type: "Highway Transit",
      desc: "Effortless non-stop transit via the Lahore Ring Road network directly to international flight terminals without city congestion.",
      icon: Plane,
      badge: "Direct Corridor",
    },
    {
      title: "Thokar Niaz Baig / Mall Road & Central Lahore",
      time: "15 - 20 Mins",
      type: "Artery Access",
      desc: "Rapid multi-lane highway connectivity bridging you to Lahore's traditional cultural centers, commercial markets, and university zones.",
      icon: Building2,
      badge: "City Core Link",
    },
  ];

  const commuteDistances = [
    { landmark: "Lahore Ring Road Interchange", distance: "3.5 km", time: "5 Minutes", route: "Direct Expressway Connector" },
    { landmark: "M-2 Motorway Babu Sabu", distance: "8.0 km", time: "10 Minutes", route: "Signal-Free Artery" },
    { landmark: "Thokar Niaz Baig", distance: "14.0 km", time: "15 Minutes", route: "Canal Bank Corridor" },
    { landmark: "Sharaqpur Sharif Interchange", distance: "6.0 km", time: "8 Minutes", route: "Riverfront Boulevard" },
    { landmark: "Gulberg / Main Boulevard", distance: "21.0 km", time: "22 Minutes", route: "Ring Road Express" },
    { landmark: "Allama Iqbal Airport (LHE)", distance: "28.0 km", time: "25 Minutes", route: "Ring Road North Loop" },
    { landmark: "DHA Lahore Phase 5 / 6", distance: "30.0 km", time: "28 Minutes", route: "Direct Highway Speed-way" },
  ];

  const infrastructureFeatures = [
    {
      title: "120-Foot Main Entrance Boulevard",
      desc: "Monumental dual-carriageway welcoming residents with dedicated tree-lined pedestrian tracks and smart LED illumination.",
    },
    {
      title: "40-Foot Minimum Internal Roads",
      desc: "Even interior residential streets boast a generous minimum 40-foot paved width, preventing curbside congestion.",
    },
    {
      title: "Underground Electrification & Solar Grid",
      desc: "A completely wire-free skyline with sustainable hybrid solar micro-grids and modern storm-water drainage.",
    },
    {
      title: "Ravi Riverfront Green Embankments",
      desc: "Naturally landscaped ecological promenades and flood-mitigation barriers engineered by HRL Construction Pvt Limited.",
    },
  ];

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTourSuccess(true);
  };

  return (
    <main className="walkthrough-page location-page">
      {/* Self-referencing Canonical & Standardized Global Technical SEO */}
      <SEOHead
        title={SEO_CONFIG.pages.location.title}
        description={SEO_CONFIG.pages.location.description}
        keywords={SEO_CONFIG.pages.location.keywords}
        canonical={SEO_CONFIG.pages.location.canonical}
        ogImage="https://royalswisscity.com/images/og-share.jpg"
        twitterImage="https://royalswisscity.com/images/og-share.jpg"
        structuredData={SEO_CONFIG.schema.location}
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
            backgroundImage: "url('/Map_thecity-mobile.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.16,
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
            <Compass size={14} />
            Strategic Prime Positioning
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
            Royal Swiss City Lahore Location & Access Routes
          </h1>

          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(255, 255, 255, 0.82)",
              maxWidth: "760px",
              margin: "0 auto 30px auto",
              lineHeight: 1.6,
              fontWeight: 300,
            }}
          >
            Strategically positioned on Lahore's Ravi Riverfront development corridor. 
            Enjoy effortless, signal-free access from Lahore Ring Road, M-2 Motorway, and Allama Iqbal International Airport.
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
              onClick={() => setSiteTourModalOpen(true)}
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
              <Calendar size={16} />
              Book a Guided Site Tour
            </button>

            <a
              href="https://maps.google.com/?q=Lahore+Ravi+Riverfront+Pakistan"
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
                e.currentTarget.style.borderColor = "#c4b08a";
                e.currentTarget.style.color = "#c4b08a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.28)";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              <MapPin size={16} />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Main Section Content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 20px" }}>

        {/* Section 1: Ravi Riverfront Prime Positioning */}
        <section id="riverfront-positioning" style={{ marginBottom: "80px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "32px", gap: "20px" }}>
            <div>
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
                The Future of Urban Growth
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
                Ravi Riverfront Prime Positioning
              </h2>
            </div>

            {/* Map Mode Toggle */}
            <div
              style={{
                display: "inline-flex",
                background: "#ffffff",
                padding: "4px",
                borderRadius: "999px",
                border: "1px solid #d1d5db",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              <button
                onClick={() => setMapView("masterplan")}
                style={{
                  padding: "8px 18px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  background: mapView === "masterplan" ? "#0B1E2B" : "transparent",
                  color: mapView === "masterplan" ? "#ffffff" : "#666",
                  transition: "all 0.2s ease",
                }}
              >
                Master Plan View
              </button>
              <button
                onClick={() => setMapView("google")}
                style={{
                  padding: "8px 18px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  background: mapView === "google" ? "#0B1E2B" : "transparent",
                  color: mapView === "google" ? "#ffffff" : "#666",
                  transition: "all 0.2s ease",
                }}
              >
                Satellite / Google Map
              </button>
            </div>
          </div>

          {/* Interactive Map Embed Container */}
          <div
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #e5e7eb",
              boxShadow: "0 14px 40px rgba(0, 0, 0, 0.08)",
              minHeight: "480px",
              background: "#0B1E2B",
            }}
          >
            {mapView === "masterplan" ? (
              <div style={{ position: "relative", width: "100%", height: "520px", overflow: "hidden" }}>
                <img
                  src="/Map_thecity.gif"
                  alt="Royal Swiss City Master Plan & Access Routes Animation"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  loading="lazy"
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    background: "rgba(11, 30, 43, 0.88)",
                    backdropFilter: "blur(8px)",
                    color: "#ffffff",
                    padding: "12px 20px",
                    borderRadius: "8px",
                    border: "1px solid rgba(178, 153, 106, 0.4)",
                    fontSize: "13px",
                  }}
                >
                  <strong style={{ color: "#c4b08a" }}>Royal Swiss City Master Plan Corridor</strong>
                  <span style={{ display: "block", fontSize: "11px", color: "rgba(255,255,255,0.75)", marginTop: "2px" }}>
                    Ravi Riverfront Development Zone · Direct Highway Links
                  </span>
                </div>
              </div>
            ) : (
              <iframe
                title="Royal Swiss City Location Map on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108846.5414272109!2d74.20456184999999!3d31.5796791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191d09e37706d9%3A0x63351d382c7320c2!2sRavi%20Riverfront%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="520"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
          </div>
        </section>

        {/* Section 2: Connectivity Grid Cards */}
        <section id="connectivity-grid" style={{ marginBottom: "80px" }}>
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
              Signal-Free Mobility
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
              Proximity & Commute Distances from Major Landmarks
            </h2>
            <p style={{ color: "#666", fontSize: "15px", lineHeight: 1.6 }}>
              Centrally connected to Lahore’s premier transport arteries, ensuring effortless daily commutes and superior capital appreciation.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {connectivityCards.map((card) => {
              const IconComp = card.icon;
              return (
                <div
                  key={card.title}
                  style={{
                    background: "#ffffff",
                    borderRadius: "14px",
                    padding: "32px 24px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
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
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "10px",
                          background: "rgba(178, 153, 106, 0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#8c6e3b",
                        }}
                      >
                        <IconComp size={22} />
                      </div>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          padding: "4px 10px",
                          borderRadius: "999px",
                          background: "#0B1E2B",
                          color: "#c4b08a",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {card.badge}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        color: "#0B1E2B",
                        margin: "0 0 6px 0",
                        fontFamily: "var(--serif)",
                      }}
                    >
                      {card.title}
                    </h3>

                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#b2996a", fontWeight: 700, fontSize: "14px", marginBottom: "12px" }}>
                      <Clock size={15} />
                      <span>{card.time} Drive</span>
                    </div>

                    <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6, margin: 0 }}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Commute Table */}
          <div
            style={{
              marginTop: "40px",
              background: "#ffffff",
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
              overflowX: "auto",
              boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
            }}
          >
            <table style={{ width: "100%", minWidth: "640px", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr style={{ background: "#F7F5F0", borderBottom: "1px solid #e5e7eb" }}>
                  <th style={{ padding: "14px 20px", fontSize: "12px", color: "#0B1E2B", textTransform: "uppercase", letterSpacing: "1px" }}>Key Destination</th>
                  <th style={{ padding: "14px 20px", fontSize: "12px", color: "#0B1E2B", textTransform: "uppercase", letterSpacing: "1px" }}>Approx. Distance</th>
                  <th style={{ padding: "14px 20px", fontSize: "12px", color: "#0B1E2B", textTransform: "uppercase", letterSpacing: "1px" }}>Est. Drive Time</th>
                  <th style={{ padding: "14px 20px", fontSize: "12px", color: "#0B1E2B", textTransform: "uppercase", letterSpacing: "1px" }}>Access Route</th>
                </tr>
              </thead>
              <tbody>
                {commuteDistances.map((c, i) => (
                  <tr key={c.landmark} style={{ borderBottom: "1px solid #f0f0f0", background: i % 2 === 0 ? "#ffffff" : "#FAFAFA" }}>
                    <td style={{ padding: "14px 20px", fontWeight: 600, color: "#0B1E2B", fontSize: "14px" }}>{c.landmark}</td>
                    <td style={{ padding: "14px 20px", color: "#555", fontSize: "14px" }}>{c.distance}</td>
                    <td style={{ padding: "14px 20px", color: "#b2996a", fontWeight: 700, fontSize: "14px" }}>{c.time}</td>
                    <td style={{ padding: "14px 20px", color: "#777", fontSize: "13px" }}>{c.route}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Site Master Plan & Road Infrastructure */}
        <section id="site-master-plan" style={{ marginBottom: "80px" }}>
          <div style={{ marginBottom: "32px" }}>
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
              World-Class Engineering
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
              Site Master Plan & Road Infrastructure
            </h2>
            <p style={{ color: "#666", fontSize: "15px", marginTop: "8px", maxWidth: "800px" }}>
              Developed by <strong>HRL Construction Pvt Limited</strong>, Royal Swiss City incorporates six decades of premier civil and infrastructure engineering.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {infrastructureFeatures.map((f, i) => (
              <div
                key={f.title}
                style={{
                  background: "#ffffff",
                  padding: "28px 24px",
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <CheckCircle2 size={18} color="#b2996a" />
                  <h3 style={{ margin: 0, fontSize: "16px", color: "#0B1E2B", fontWeight: 700 }}>
                    {f.title}
                  </h3>
                </div>
                <p style={{ margin: 0, fontSize: "14px", color: "#666", lineHeight: 1.6 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Visual Showcase Graphic */}
          <div
            style={{
              marginTop: "36px",
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid #e5e7eb",
              position: "relative",
            }}
          >
            <img
              src="/40_feet_roads.webp"
              alt="Royal Swiss City 40 Feet Wide Infrastructure Boulevards"
              style={{ width: "100%", height: "360px", objectFit: "cover" }}
              loading="lazy"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(11,30,43,0.85) 0%, rgba(11,30,43,0.1) 60%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "30px",
                color: "#ffffff",
              }}
            >
              <h4 style={{ margin: "0 0 6px 0", fontSize: "20px", fontFamily: "var(--serif)" }}>
                Engineered for Future Generations
              </h4>
              <p style={{ margin: 0, fontSize: "14px", color: "rgba(255,255,255,0.8)", maxWidth: "600px" }}>
                Built strictly to international standards with reinforced culverts, smart street furniture, underground cabling, and landscaped median belts.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner: Book a Guided Site Tour */}
        <div
          style={{
            background: "linear-gradient(135deg, #0B1E2B 0%, #152E40 100%)",
            borderRadius: "16px",
            padding: "50px 30px",
            textAlign: "center",
            color: "#ffffff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "relative", zIndex: 2, maxWidth: "680px", margin: "0 auto" }}>
            <span
              style={{
                display: "inline-block",
                padding: "4px 12px",
                borderRadius: "999px",
                background: "rgba(178, 153, 106, 0.2)",
                border: "1px solid rgba(178, 153, 106, 0.4)",
                color: "#c4b08a",
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "14px",
                fontWeight: 600,
              }}
            >
              Complimentary Executive Transport
            </span>
            <h3
              style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontFamily: "var(--serif)",
                fontWeight: 500,
                margin: "0 0 14px 0",
              }}
            >
              Book a Guided Site Tour
            </h3>
            <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "15px", lineHeight: 1.6, margin: "0 0 28px 0" }}>
              Experience the breathtaking riverfront setting, wide 40-ft boulevards, and rapid on-ground development milestones firsthand with an official HRL property consultant.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
              <button
                onClick={() => setSiteTourModalOpen(true)}
                style={{
                  padding: "14px 32px",
                  background: "#b2996a",
                  color: "#0B1E2B",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 6px 20px rgba(178, 153, 106, 0.3)",
                }}
              >
                Schedule My Visit Now
              </button>
              <a
                href="https://wa.me/923004647979?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20guided%20site%20tour%20for%20Royal%20Swiss%20City"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
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
                <MessageCircle size={16} />
                WhatsApp Site Concierge
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Site Tour Booking Modal */}
      {siteTourModalOpen && (
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
          onClick={() => setSiteTourModalOpen(false)}
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
              onClick={() => setSiteTourModalOpen(false)}
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

            {!tourSuccess ? (
              <form onSubmit={handleTourSubmit}>
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
                    <Calendar size={24} />
                  </div>
                  <h3 style={{ margin: "0 0 6px 0", fontSize: "20px", color: "#0B1E2B", fontFamily: "var(--serif)" }}>
                    Schedule Guided Site Tour
                  </h3>
                  <p style={{ margin: 0, fontSize: "13px", color: "#666" }}>
                    Select your preferred visit date. Executive transport pickup can be arranged from Lahore Ring Road interchanges.
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
                      placeholder="e.g. Salman Malik"
                      value={tourForm.name}
                      onChange={(e) => setTourForm({ ...tourForm, name: e.target.value })}
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
                      value={tourForm.phone}
                      onChange={(e) => setTourForm({ ...tourForm, phone: e.target.value })}
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
                      Preferred Visit Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={tourForm.date}
                      onChange={(e) => setTourForm({ ...tourForm, date: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "14px",
                      }}
                    />
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
                    Confirm Tour Reservation
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <CheckCircle2 size={48} color="#10B981" style={{ margin: "0 auto 16px auto" }} />
                <h4 style={{ margin: "0 0 8px 0", fontSize: "20px", color: "#0B1E2B" }}>
                  Tour Scheduled!
                </h4>
                <p style={{ margin: "0 0 20px 0", fontSize: "14px", color: "#666", lineHeight: 1.6 }}>
                  Thank you, <strong>{tourForm.name}</strong>. An HRL site concierge will contact you on <strong>{tourForm.phone}</strong> to confirm transport logistics and gate entry clearance.
                </p>
                <button
                  onClick={() => {
                    setSiteTourModalOpen(false);
                    setTourSuccess(false);
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
