// Test utility for EmailJS integration
// This file can be used to test EmailJS configuration before going live

import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, BUSINESS_EMAIL, EmailTemplateParams } from '../config/emailjs';

export const testEmailJS = async () => {
  try {
    console.log('Testing EmailJS configuration...');
    console.log('Service ID:', EMAILJS_CONFIG.SERVICE_ID);
    console.log('Template ID:', EMAILJS_CONFIG.TEMPLATE_ID);
    console.log('Public Key:', EMAILJS_CONFIG.PUBLIC_KEY ? 'Set' : 'Not set');
    
    // Test template parameters
    const testParams: EmailTemplateParams = {
      from_name: 'Test User',
      from_email: 'test@example.com',
      phone: '0726 960 376',
      vehicle: 'BMW E46 2003',
      message: 'This is a test message from the contact form.',
      to_email: BUSINESS_EMAIL,
    };

    console.log('Test parameters:', testParams);
    
    // Note: This won't actually send an email unless you have valid credentials
    // Uncomment the following lines to test actual sending:
    
    /*
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      testParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    
    console.log('EmailJS response:', response);
    */
    
    console.log('EmailJS configuration test completed successfully!');
    return true;
  } catch (error) {
    console.error('EmailJS test failed:', error);
    return false;
  }
};

// Function to validate EmailJS configuration
export const validateEmailJSConfig = () => {
  const issues: string[] = [];
  
  if (!EMAILJS_CONFIG.SERVICE_ID || EMAILJS_CONFIG.SERVICE_ID.includes('xxxxxxxxx')) {
    issues.push('Service ID is not configured');
  }
  
  if (!EMAILJS_CONFIG.TEMPLATE_ID || EMAILJS_CONFIG.TEMPLATE_ID.includes('xxxxxxxxx')) {
    issues.push('Template ID is not configured');
  }
  
  if (!EMAILJS_CONFIG.PUBLIC_KEY || EMAILJS_CONFIG.PUBLIC_KEY.includes('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')) {
    issues.push('Public Key is not configured');
  }
  
  if (issues.length > 0) {
    console.warn('EmailJS Configuration Issues:');
    issues.forEach(issue => console.warn(`- ${issue}`));
    return false;
  }
  
  console.log('EmailJS configuration is valid!');
  return true;
};
