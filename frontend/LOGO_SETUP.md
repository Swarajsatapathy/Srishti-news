# SRISHTI NEWS Logo Setup Instructions

## Adding the SRISHTI NEWS Logo

To add the actual SRISHTI NEWS logo to the website:

1. **Save the logo image** as `srishti-logo.png` in the `/public` folder
2. **Recommended specifications:**
   - Format: PNG with transparent background
   - Size: 300x180 pixels (maintaining the wide aspect ratio of the original logo)
   - High resolution for crisp display on all devices

3. **File location:** `/public/srishti-logo.png`

## Current Fallback

The website currently uses a fallback logo that displays:
- "SRISHTI" in white text on blue background
- "NEWS" in red text below
- Matching the blue and red color scheme of the brand

## Brand Colors Updated

- **Primary Blue**: `#1E3A8A` (Blue-800) for main headings and top bar
- **Accent Red**: `#DC2626` for "NEWS" text and accents
- **Navigation**: Blue hover states instead of red

## Usage

The logo is used in:
- Header component (main site logo)
- Fallback system ensures the site works even without the image file
- Updated color scheme throughout the website to match the new branding

Once you add the actual logo file to `/public/srishti-logo.png`, it will automatically replace the fallback design.