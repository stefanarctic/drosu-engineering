// EmailJS Configuration
// Environment variables are used for security
// Create a .env file in your project root with these variables

export const EMAILJS_CONFIG = {
  // Your EmailJS service ID
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  
  // Your EmailJS template ID
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  
  // Your EmailJS public key
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Email template variables that will be sent
export interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  phone?: string;
  vehicle?: string;
  message: string;
  to_email: string; // Your business email
}

// Default recipient email (your business email)
export const BUSINESS_EMAIL = import.meta.env.VITE_BUSINESS_EMAIL;
