# Environment Variables Setup

## 🔒 Security Best Practices

You should move your EmailJS credentials to environment variables to keep them secure and out of your source code.

## 📁 Create .env File

Create a `.env` file in your project root (same level as `package.json`) with the following content:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_2z0g7rg
VITE_EMAILJS_TEMPLATE_ID=template_5zheu1n
VITE_EMAILJS_PUBLIC_KEY=W4vS-1oqSmYAa3vk0
VITE_BUSINESS_EMAIL=drosuengineering@gmail.com
```

## ⚠️ Important Security Notes

### What to Hide:
- ✅ **Service ID** - Keep this private
- ✅ **Template ID** - Keep this private  
- ✅ **Public Key** - Despite the name, keep this private
- ✅ **Business Email** - Keep this private

### What's Safe to Expose:
- ❌ **Nothing** - All EmailJS credentials should be kept private

## 🚫 Git Security

**CRITICAL:** Make sure `.env` is in your `.gitignore` file!

Check if you have a `.gitignore` file and ensure it contains:
```
.env
.env.local
.env.production
```

## 🔄 How It Works

1. **Development:** The app uses values from `.env` file
2. **Fallback:** If `.env` is missing, it uses the hardcoded values (for development)
3. **Production:** You'll need to set these as environment variables on your hosting platform

## 🌐 Production Deployment

When deploying to production (Vercel, Netlify, etc.), set these environment variables in your hosting platform's dashboard:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID` 
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_BUSINESS_EMAIL`

## ✅ Testing

After creating the `.env` file:

1. Restart your development server: `npm run dev`
2. Test the contact form
3. Check that emails are still being sent correctly

## 🛡️ Why This Matters

- **Security:** Keeps credentials out of your public repository
- **Flexibility:** Easy to change credentials without code changes
- **Team Work:** Different developers can use different credentials
- **Production:** Different environments can use different settings
