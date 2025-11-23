# Google Analytics 4 Setup

This project is configured to use Google Analytics 4 (GA4) for tracking user interactions.

## Environment Variable Setup

To enable Google Analytics tracking, you need to create a `.env` file in the project root with your GA4 Measurement ID:

```env
# Google Analytics 4 Configuration
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual GA4 Measurement ID.

## How to Get Your GA4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring" or "Admin" (gear icon)
4. Create an Account (name it "Rural IA" or similar)
5. Create a Property (name it "Rural IA Website")
6. Fill in business details and click through the setup
7. Choose "Web" as the platform
8. Set up a data stream:
   - Enter your website URL: `https://ruralia.ruralhackers.com`
   - Stream name: "Rural IA Website"
9. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)
10. Add it to your `.env` file as shown above

## Tracked Events

The following events are tracked automatically:

### Form Button Clicks
- **Event Name**: `form_button_click`
- **Locations**: 
  - Hero section: "Inscríbete Agora" button
  - CTA section: "Solicita a túa praza" button
- **Parameters**: `button_label` (identifies which button was clicked)

### Google Maps Link Clicks
- **Event Name**: `maps_link_click`
- **Location**: About section (Anceu Coliving location)
- **Parameters**: `location` (identifies the location being viewed)

## Development

During development, if no Measurement ID is provided, Google Analytics will not initialize and a warning will be logged to the console. This allows development to continue without requiring a GA4 account.

## Deployment

Make sure to add the `VITE_GA_MEASUREMENT_ID` environment variable to your deployment platform (Vercel, Netlify, etc.) with your actual GA4 Measurement ID.

