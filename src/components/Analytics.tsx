import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Extend Window interface for global variables
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

interface AnalyticsProps {
  googleAnalyticsId?: string;
  facebookPixelId?: string;
}

// Helper function to track events
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Helper function to track conversions
export const trackConversion = (conversionType: string, value?: number, currency = 'RON') => {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': conversionType,
      'value': value,
      'currency': currency
    });
  }
};

const Analytics: React.FC<AnalyticsProps> = ({ 
  googleAnalyticsId = import.meta.env.VITE_GA4_ID || 'G-XXXXXXXXXX',
  facebookPixelId = import.meta.env.VITE_FB_PIXEL_ID || 'XXXXXXXXXX'
}) => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics 4
    if (googleAnalyticsId && googleAnalyticsId !== 'G-XXXXXXXXXX') {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', googleAnalyticsId, {
        page_path: location.pathname + location.search,
        send_page_view: true
      });
    }

    // Facebook Pixel
    if (facebookPixelId && facebookPixelId !== 'XXXXXXXXXX') {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(script);
      
      script.onload = () => {
        if (window.fbq) {
          window.fbq('init', facebookPixelId);
          window.fbq('track', 'PageView');
        }
      };
    }
  }, [googleAnalyticsId, facebookPixelId]);

  // Track page views on route change
  useEffect(() => {
    if (window.gtag && googleAnalyticsId && googleAnalyticsId !== 'G-XXXXXXXXXX') {
      window.gtag('config', googleAnalyticsId, {
        page_path: location.pathname + location.search,
        page_title: document.title
      });
    }
  }, [location, googleAnalyticsId]);

  // Track scroll depth
  useEffect(() => {
    let scrollTracked = {
      '25': false,
      '50': false,
      '75': false,
      '100': false
    };

    const handleScroll = () => {
      const scrollPercent = Math.round(
        ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
      );

      if (scrollPercent >= 25 && !scrollTracked['25']) {
        trackEvent('scroll', { scroll_depth: 25 });
        scrollTracked['25'] = true;
      }
      if (scrollPercent >= 50 && !scrollTracked['50']) {
        trackEvent('scroll', { scroll_depth: 50 });
        scrollTracked['50'] = true;
      }
      if (scrollPercent >= 75 && !scrollTracked['75']) {
        trackEvent('scroll', { scroll_depth: 75 });
        scrollTracked['75'] = true;
      }
      if (scrollPercent >= 100 && !scrollTracked['100']) {
        trackEvent('scroll', { scroll_depth: 100 });
        scrollTracked['100'] = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
};

export default Analytics;
