# Airtable Integration Setup Guide

## 📋 Step 1: Create an Airtable Base

1. Go to [Airtable.com](https://airtable.com) and sign in (or create a free account)
2. Click **"+ Create"** to create a new base
3. Name it: **"Website Questionnaire Submissions"**
4. Rename the default table to: **"Submissions"**

## 🔧 Step 2: Set Up Your Table Structure

Create the following fields in your Airtable table:

### Required Fields (Single Line Text):
- `businessName`
- `existingWebsite`
- `websiteURL`
- `domainHosting`
- `mainGoal`
- `visitorAction`
- `targetAudience`
- `demographics`
- `brandAssets`
- `brandDetails`
- `exampleSites`
- `overallVibe`
- `additionalPages`
- `contentProvision`
- `contentStructure`
- `contentCreation`
- `brandingMaterials`
- `integrations`
- `optimization`
- `launchDate`
- `maintenance`
- `training`
- `additionalNotes`
- `submittedAt` (Date field)

### Multi-Select Fields:
- `designStyle` (Options: modern, classic, minimalist, bold, elegant)
- `pages` (Options: home, about, services, portfolio, blog, contact)
- `specialFeatures` (Options: testimonials, faq, newsletter, gallery)
- `functionality` (Options: ecommerce, booking, contact, search, login, multilingual)

## 🔑 Step 3: Get Your API Credentials

### Get your API Key:
1. Click your profile icon (top right)
2. Go to **Account** → **API**
3. Under "Personal Access Token", click **"Generate Token"**
4. Name it: "Website Questionnaire Form"
5. Give it these scopes:
   - `data.records:write`
   - `data.records:read`
6. Select your base from the list
7. Click **Create Token**
8. **Copy and save your token** (you won't see it again!)

### Get your Base ID:
1. Go to [Airtable API Documentation](https://airtable.com/api)
2. Select your base
3. The Base ID is shown in the URL and documentation (starts with `app...`)
   - Example: `appXXXXXXXXXXXXXX`

## 📝 Step 4: Update Your Code

Open `index.html` and find these lines (around line 743):

```javascript
const AIRTABLE_API_KEY = 'YOUR_AIRTABLE_API_KEY';
const AIRTABLE_BASE_ID = 'YOUR_BASE_ID';
const AIRTABLE_TABLE_NAME = 'Submissions';
```

Replace with your actual credentials:

```javascript
const AIRTABLE_API_KEY = 'patXXXXXXXXXXXXXXXX'; // Your token
const AIRTABLE_BASE_ID = 'appXXXXXXXXXXXXXX'; // Your base ID
const AIRTABLE_TABLE_NAME = 'Submissions'; // Keep this
```

## 🚀 Step 5: Deploy Updated Code

```bash
git add .
git commit -m "Add Airtable integration"
git push origin main
npx vercel --prod
```

## ✅ Step 6: Test Your Form

1. Go to your live site
2. Fill out the questionnaire
3. Click Submit
4. Check your Airtable base - you should see a new record!

## 🔒 Security Best Practice

**⚠️ IMPORTANT:** Your API key is currently exposed in the frontend code. This is okay for testing, but for production, you should:

### Option 1: Use Vercel Environment Variables (Recommended)

1. Create an API endpoint in Vercel
2. Store API key as environment variable
3. Make form submit to your API endpoint instead

### Option 2: Use Airtable Forms API

Use Airtable's built-in form endpoint which doesn't expose your API key.

## 📊 View Submissions

Go to your Airtable base to:
- View all submissions in a spreadsheet format
- Filter and sort responses
- Create different views (Grid, Calendar, Gallery)
- Export data as CSV
- Set up automations

## 🆘 Troubleshooting

### "Error submitting form"
- Check that your API key is correct
- Verify your Base ID matches
- Ensure table name is exactly "Submissions"
- Check field names match your Airtable fields

### "Network error"
- Check internet connection
- Verify Airtable API is accessible
- Check browser console for errors

## 📞 Need Help?

- [Airtable API Documentation](https://airtable.com/developers/web/api/introduction)
- [Airtable Community](https://community.airtable.com)

