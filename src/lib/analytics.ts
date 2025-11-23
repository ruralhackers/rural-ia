import ReactGA from "react-ga4";

// Event names for tracking
export const ANALYTICS_EVENTS = {
  FORM_BUTTON_CLICK: "form_button_click",
  MAPS_LINK_CLICK: "maps_link_click",
} as const;

// Initialize Google Analytics
export const initGA = (measurementId: string) => {
  if (!measurementId) {
    console.warn("Google Analytics Measurement ID not provided");
    return;
  }
  
  ReactGA.initialize(measurementId);
  console.log("Google Analytics initialized with ID:", measurementId);
};

// Track custom events
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, string | number>
) => {
  ReactGA.event({
    category: eventName,
    action: eventName,
    ...eventParams,
  });
};

// Specific tracking functions
export const trackFormButtonClick = (buttonLabel: string) => {
  trackEvent(ANALYTICS_EVENTS.FORM_BUTTON_CLICK, {
    button_label: buttonLabel,
  });
};

export const trackMapsLinkClick = (location: string) => {
  trackEvent(ANALYTICS_EVENTS.MAPS_LINK_CLICK, {
    location: location,
  });
};

