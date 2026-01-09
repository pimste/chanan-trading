# Contact Form Email Issue - Fix Guide

## Problem Summary

The contact forms on chanan-trading.com are failing with a 500 error: "Failed to send email. Please try again later."

The forms work fine on nibmvb.eu using the same codebase.

## Root Cause

**The sender email domain is not verified in Resend.**

The API route (`src/app/api/contact/route.ts`) is trying to send emails from:
- `noreply@chanan-trading.com` (when RESEND_FROM_EMAIL is not set)

Resend requires all sender domains to be verified before sending emails. Since nibmvb.eu works, that domain is already verified.

## Solution Options

### Option 1: Verify chanan-trading.com Domain (Recommended)

1. **Log into Resend Dashboard**
   - Go to https://resend.com/domains
   - Click "Add Domain"
   - Enter `chanan-trading.com`

2. **Add DNS Records**
   - Resend will provide you with DNS records (SPF, DKIM)
   - Add these records to your domain's DNS settings
   - Wait for verification (usually takes a few minutes to hours)

3. **Set Environment Variables in Vercel**
   ```bash
   RESEND_API_KEY=re_xxxxx (already set)
   RESEND_FROM_EMAIL=noreply@chanan-trading.com
   RESEND_TO_EMAIL=gid.gehlen@nibmtowercranes.com (or your preferred email)
   ```

4. **Redeploy the Application**
   - After DNS verification and env vars are set, redeploy

### Option 2: Use nibmvb.eu Domain Temporarily

If you want a quick fix while waiting for domain verification:

1. **Set Environment Variables in Vercel**
   ```bash
   RESEND_FROM_EMAIL=noreply@nibmvb.eu (or whatever is verified)
   RESEND_TO_EMAIL=gid.gehlen@nibmtowercranes.com
   ```

2. **Update the Email Template** (Optional)
   - The email will say "Chanan Trading" in the subject but come from nibmvb.eu
   - This works but is not ideal for branding

## How to Set Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Click on "Settings" → "Environment Variables"
3. Add/update the following variables:
   - `RESEND_FROM_EMAIL`
   - `RESEND_TO_EMAIL`
4. Make sure to set them for all environments (Production, Preview, Development)
5. Redeploy the application

## Testing

After making changes:

1. Go to https://www.chanan-trading.com/contact
2. Fill out and submit the contact form
3. Check the Vercel logs for detailed error messages (now includes better logging)
4. Check your email inbox

## Improved Logging

The API route now includes better error logging to help diagnose issues:
- Shows the FROM and TO email addresses being used
- Logs detailed Resend API errors
- Makes debugging much easier

## Files Modified

1. `vercel.json` - Fixed NEXTAUTH_URL to use chanan-trading.com instead of nibmvb.eu
2. `src/app/api/contact/route.ts` - Added better error logging and debugging information

## Next Steps

1. Verify the chanan-trading.com domain in Resend
2. Set the environment variables in Vercel
3. Redeploy the application
4. Test the contact forms

## Support

If you continue to have issues:
1. Check Vercel logs for detailed error messages
2. Check Resend dashboard for any API errors or failed sends
3. Verify that the domain is properly verified in Resend

