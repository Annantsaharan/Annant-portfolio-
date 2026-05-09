# How to Get Your Formspree Form ID

## Step-by-Step Guide

### Step 1: Go to Formspree
1. Open your browser
2. Go to: **https://formspree.io**
3. Click **"Sign Up"** (top right corner) - it's FREE!

### Step 2: Create Your Account
1. Sign up with:
   - Your email address, OR
   - Your Google account (faster)
2. Verify your email if needed

### Step 3: Create a New Form
1. After logging in, you'll see your dashboard
2. Click the **"New Form"** button (usually a big green/blue button)
3. Give your form a name (e.g., "Portfolio Contact Form")
4. Click **"Create"**

### Step 4: Find Your Form ID
After creating the form, you'll see:

**Option A: In the Form Settings**
- Look for a URL that looks like: `https://formspree.io/f/xvgkqyzw`
- The part after `/f/` is your Form ID (e.g., `xvgkqyzw`)

**Option B: In the Integration Tab**
- Click on your form
- Go to the **"Integration"** or **"Settings"** tab
- You'll see: `action="https://formspree.io/f/YOUR_FORM_ID"`
- Copy the part after `/f/` (this is your Form ID)

**Option C: In the Code Example**
- Formspree will show you example code
- Look for: `action="https://formspree.io/f/xxxxxxxx"`
- The `xxxxxxxx` part is your Form ID

### Step 5: Add It to Your Portfolio
1. Open `index.html` in your code editor
2. Find **line 346** (or search for `YOUR_FORM_ID`)
3. You'll see: `action="https://formspree.io/f/YOUR_FORM_ID"`
4. Replace `YOUR_FORM_ID` with your actual Form ID

**Example:**
- Before: `action="https://formspree.io/f/YOUR_FORM_ID"`
- After: `action="https://formspree.io/f/xvgkqyzw"` (your actual ID)

### Step 6: Test It!
1. Save `index.html`
2. Open your portfolio in a browser
3. Fill out the contact form
4. Submit it
5. Check your email - you should receive the form submission!

## Visual Guide

```
Formspree Dashboard
┌─────────────────────────────────┐
│  Your Forms                     │
│                                  │
│  ┌──────────────────────────┐   │
│  │ Portfolio Contact Form   │   │
│  │                          │   │
│  │ Form ID: xvgkqyzw        │ ← Copy this!
│  │                          │   │
│  │ https://formspree.io/f/  │   │
│  │        xvgkqyzw          │   │
│  └──────────────────────────┘   │
└─────────────────────────────────┘
```

## Troubleshooting

**Can't find the Form ID?**
- Make sure you've created a form first
- Check the form's "Settings" or "Integration" page
- The Form ID is always in the URL: `formspree.io/f/YOUR_ID`

**Form not working?**
- Make sure you replaced `YOUR_FORM_ID` (not just added text)
- Check that your Form ID has no spaces
- Verify the form is active in Formspree dashboard

**Need more help?**
- Formspree has great docs: https://help.formspree.io
- Or email Formspree support

## Quick Example

If your Form ID is `abc123xyz`, your form tag should look like:

```html
<form action="https://formspree.io/f/abc123xyz" method="POST">
```

That's it! Your form will now work! 🎉


