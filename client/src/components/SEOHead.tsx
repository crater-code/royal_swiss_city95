/**
 * SEO Head Component
 * Dynamically manages meta tags, structured data, and SEO optimization
 * Supports multi-language (English & Urdu)
 */

import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, any>;
  language?: "en" | "ur";
  alternate?: Array<{ hrefLang: string; href: string }>;
  noindex?: boolean;
  nofollow?: boolean;
}

export function SEOHead({
  title = "Royal Swiss City Lahore | Official Portal | HRL Construction",
  description = "Official website of Royal Swiss City Lahore by HRL Construction Pvt Limited. Explore luxury residential & commercial plots on Ravi Riverfront with flexible installment plans.",
  keywords = "Royal Swiss City Lahore, payment plan, installment schedule, location map, HRL Construction Pvt Limited, Habib Rafiq, Ravi Riverfront",
  canonical = "https://royalswisscity.com/",
  ogImage = "https://royalswisscity.com/images/og-share.jpg",
  ogType = "website",
  ogTitle,
  ogDescription,
  twitterImage,
  structuredData,
  language = "en",
  alternate = [],
  noindex = false,
  nofollow = false,
}: SEOHeadProps) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Helper function to set meta tag
    const setMeta = (name: string, content: string, isProperty: boolean = false) => {
      let element = document.querySelector(
        isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        if (isProperty) {
          element.setAttribute("property", name);
        } else {
          element.setAttribute("name", name);
        }
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const resolvedOgImage = ogImage || "https://royalswisscity.com/images/og-share.jpg";
    const resolvedTwitterImage = twitterImage || resolvedOgImage;

    // Core Meta Tags
    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("author", "HRL Construction Pvt Limited");
    setMeta("viewport", "width=device-width, initial-scale=1.0, maximum-scale=5.0");
    setMeta("robots", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"},max-snippet:-1,max-image-preview:large,max-video-preview:-1`);
    setMeta("googlebot", "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1");
    setMeta("language", language === "ur" ? "Urdu" : "English");

    // Open Graph Tags (Standardized Global Technical SEO)
    setMeta("og:site_name", "Royal Swiss City Lahore", true);
    setMeta("og:title", ogTitle || title, true);
    setMeta("og:description", ogDescription || description, true);
    setMeta("og:url", canonical, true);
    setMeta("og:type", ogType || "website", true);
    setMeta("og:image", resolvedOgImage, true);
    setMeta("og:image:alt", "Royal Swiss City Lahore Master Plan & Riverfront", true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("og:locale", "en_PK", true);
    
    // Twitter Card Tags
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", ogTitle || title);
    setMeta("twitter:description", ogDescription || description);
    setMeta("twitter:image", resolvedTwitterImage);
    setMeta("twitter:site", "@royalswisscity");
    setMeta("twitter:creator", "@royalswisscity");

    // Business Tags
    setMeta("business:contact_data:street_address", "Ravi Riverfront Development Zone");
    setMeta("business:contact_data:locality", "Lahore");
    setMeta("business:contact_data:region", "Punjab");
    setMeta("business:contact_data:postal_code", "54000");
    setMeta("business:contact_data:country_name", "Pakistan");

    // Theme Color
    setMeta("theme-color", "#0B1E2B");
    setMeta("msapplication-TileColor", "#0B1E2B");

    // Canonical Link (Self-referencing canonical on every route)
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);

    // Alternate Language Links (Hreflang)
    document.querySelectorAll("link[rel='alternate'][hreflang]").forEach((el) => el.remove());

    alternate.forEach(({ hrefLang, href }) => {
      const altLink = document.createElement("link");
      altLink.setAttribute("rel", "alternate");
      altLink.setAttribute("hreflang", hrefLang);
      altLink.setAttribute("href", href);
      document.head.appendChild(altLink);
    });

    const xDefaultLink = document.createElement("link");
    xDefaultLink.setAttribute("rel", "alternate");
    xDefaultLink.setAttribute("hreflang", "x-default");
    xDefaultLink.setAttribute("href", canonical);
    document.head.appendChild(xDefaultLink);

    // Structured Data (Route-specific JSON-LD)
    if (structuredData) {
      let scriptTag = document.querySelector('script[data-route-jsonld="true"]');
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.setAttribute("type", "application/ld+json");
        scriptTag.setAttribute("data-route-jsonld", "true");
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData, null, 2);
    }

    // Preconnect to external domains for performance
    const domains = [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://maps.googleapis.com",
    ];

    domains.forEach((domain) => {
      let link = document.querySelector(`link[rel='preconnect'][href='${domain}']`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "preconnect");
        link.setAttribute("href", domain);
        document.head.appendChild(link);
      }
    });

    // Prefetch DNS for external resources
    const dnsPrefetch = [
      "https://www.google-analytics.com",
      "https://www.googletagmanager.com",
    ];

    dnsPrefetch.forEach((domain) => {
      let link = document.querySelector(`link[rel='dns-prefetch'][href='${domain}']`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "dns-prefetch");
        link.setAttribute("href", domain);
        document.head.appendChild(link);
      }
    });

  }, [title, description, keywords, canonical, ogImage, ogType, ogTitle, ogDescription, twitterImage, structuredData, language, alternate, noindex, nofollow]);

  return null;
}

export default SEOHead;
