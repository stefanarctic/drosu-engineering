# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form on your Drosu Engineering website.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (starts with `service_`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

### Template Subject:
```
Nouă solicitare de consultanță - {{from_name}}
```

### Template Body:
```
Salut,

Ai primit o nouă solicitare de consultanță prin site-ul Drosu Engineering:

**Detalii client:**
- Nume: {{from_name}}
- Email: {{from_email}}
- Telefon: {{phone}}
- Vehicul: {{vehicle}}

**Mesaj:**
{{message}}

---
Acest mesaj a fost trimis automat prin formularul de contact de pe site-ul Drosu Engineering.
```

4. Save the template and note down your **Template ID** (starts with `template_`)

## Step 4: Get Public Key

1. Go to **Account** in your EmailJS dashboard
2. Find your **Public Key** (long string of characters)
3. Copy this key

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts` in your project
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_your_actual_service_id', // Replace with your service ID
  TEMPLATE_ID: 'template_your_actual_template_id', // Replace with your template ID
  PUBLIC_KEY: 'your_actual_public_key', // Replace with your public key
};
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Go to the contact section on your website
3. Fill out and submit the form
4. Check your email to see if the message was received

## Troubleshooting

### Common Issues:

1. **"Invalid service ID"** - Make sure you copied the service ID correctly
2. **"Invalid template ID"** - Verify the template ID is correct
3. **"Invalid public key"** - Check that your public key is correct
4. **"Email not received"** - Check your spam folder and verify email service setup

### EmailJS Limits:

- Free plan: 200 emails/month
- Paid plans start at $15/month for 1,000 emails

## Security Notes

- Never commit your actual EmailJS credentials to version control
- Consider using environment variables for production
- The public key is safe to expose in frontend code

## Support

If you need help with EmailJS setup, check their documentation:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)
