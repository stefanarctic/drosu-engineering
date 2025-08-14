import { useEffect } from 'react';

// Extend Window interface for global variables
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

interface AnalyticsProps {
  googleAnalyticsId?: string;
  facebookPixelId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ 
  googleAnalyticsId = 'G-XXXXXXXXXX', // Replace with actual GA4 ID
  facebookPixelId = 'XXXXXXXXXX' // Replace with actual Facebook Pixel ID
}) => {
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
      gtag('config', googleAnalyticsId);
    }

    // Facebook Pixel - Simple implementation
    if (facebookPixelId && facebookPixelId !== 'XXXXXXXXXX') {
      // Load Facebook Pixel script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(script);
      
      // Initialize Facebook Pixel after script loads
      script.onload = () => {
        if ((window as any).fbq) {
          (window as any).fbq('init', facebookPixelId);
          (window as any).fbq('track', 'PageView');
        }
      };
    }
  }, [googleAnalyticsId, facebookPixelId]);

  return null;
};

export default Analytics;
