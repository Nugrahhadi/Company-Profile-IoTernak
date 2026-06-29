declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const GOOGLE_ADS_CONVERSION_ID = "AW-18257353348";
export const WHATSAPP_CONVERSION_LABEL = "m5tMCPvnu8IcEIS15IFE";

/**
 * Tracks a Google Ads conversion event for WhatsApp clicks.
 * Safe to call in any context (SSR/Client). Does not throw if window or gtag is unavailable.
 */
export function trackWhatsappConversion(): void {
  if (typeof window === "undefined") return;

  const target = `${GOOGLE_ADS_CONVERSION_ID}/${WHATSAPP_CONVERSION_LABEL}`;

  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: target,
    });
  } else if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: "conversion",
      send_to: target,
    });
  }
}
