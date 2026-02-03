# Contact Form Email Setup Guide

Your contact form is fully built and ready to send emails! Follow these steps to make it work:

## Step 1: Choose Your Email Provider

### Option A: Gmail (Recommended)
1. Go to [Google Account Security Settings](https://myaccount.google.com/security)
2. Enable 2-Step Verification if not already enabled
3. Create an App Password:
   - Search for "App passwords" in security settings
   - Select "Mail" and "Windows Computer"
   - Google will generate a 16-character password
4. Copy that 16-character password

### Option B: Outlook/Hotmail
1. Go to [Account Settings](https://account.microsoft.com/security)
2. Enable two-step verification
3. Create an app password
4. Copy the password

### Option C: Custom Email Server
If using your own email server, ask your provider for SMTP details:
- Service name
- SMTP server address
- Port number (usually 587 or 465)
- Email address
- Password

## Step 2: Update `.env` File

Open `server/.env` and replace the placeholder values:

```dotenv
EMAIL_SERVICE=gmail

EMAIL_USER=your-actual-email@gmail.com

EMAIL_PASSWORD=your-16-character-app-password

ADMIN_EMAIL=where-contact-forms-should-go@gmail.com

PORT=4000
```

**Example with Gmail:**
```dotenv
EMAIL_SERVICE=gmail
EMAIL_USER=johndoe123@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
ADMIN_EMAIL=admin@yourwebsite.com
PORT=4000
```

## Step 3: Start the Server

```bash
cd server
npm start
```

You should see:
```
API server running on http://localhost:4000
```

## Step 4: Test the Contact Form

1. Go to http://localhost:3000/contact
2. Fill in the form:
   - Name: Your Name
   - Email: your-email@gmail.com
   - Subject: Test Message
   - Message: This is a test
3. Click "Send Message"
4. You should see a success message
5. Check both your email inbox and the ADMIN_EMAIL inbox for confirmation emails

## What Happens When Form is Submitted:

✅ **Email 1 - Admin Notification**
- Sent to: ADMIN_EMAIL
- Contains: Customer's name, email, subject, and message

✅ **Email 2 - Customer Confirmation**
- Sent to: Customer's email address
- Contains: Thank you message with their submitted message

## Troubleshooting

**Error: "Failed to send email"**
- Check if `.env` file exists in `server/` folder
- Verify EMAIL_USER and EMAIL_PASSWORD are correct
- For Gmail: Make sure you generated an App Password (not your regular password)
- Ensure server is running (`npm start`)

**Emails not arriving**
- Check spam/junk folder
- Gmail: May need to [enable "Less secure apps"](https://support.google.com/accounts/answer/6010255) (not recommended, use app password instead)
- Try a different email address in the form

**Form submits but no emails sent**
- Open browser DevTools (F12)
- Check Console tab for error messages
- Look at server terminal for error details

## Email Verification

After setup, test with:
1. Contact form submission with test data
2. Check both destination emails
3. Verify email content is correct

Once working, users can fill the contact form and both they and your admin email will receive confirmation!

## Security Notes

⚠️ Never commit `.env` file to git (it's already in `.gitignore`)
⚠️ Never share your EMAIL_PASSWORD
⚠️ For Gmail, use App Passwords instead of your actual password
⚠️ Change EMAIL_PASSWORD if you accidentally expose it

---

**Need Help?**
- Contact form is at: `src/pages/Contact.jsx`
- Backend endpoint: `server/index.js` (line 108+)
- Email config: `server/.env`
