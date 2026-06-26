/**
 * Helper function to track events in Google Analytics
 */
export const trackEvent = (eventName: string, eventParams?: Record<string, unknown>) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Helper function to track conversions in Google Analytics
 */
export const trackConversion = (conversionType: string, value?: number, currency = 'RON') => {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': conversionType,
      'value': value,
      'currency': currency
    });
  }
};
