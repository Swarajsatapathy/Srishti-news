# Srishti News - Component Structure

This project has been organized into a modular component structure for better maintainability and reusability.

## Project Structure

```
/home/swaraj-satapathy/Swaraj Satapathy/SRISHTI NEWS/srishti/
├── app/
│   ├── page.js          # Main homepage component
│   ├── layout.js        # Root layout
│   └── globals.css      # Global styles
├── components/          # Reusable UI components
│   ├── Header.js        # Header with navigation and search
│   ├── HeroArticle.js   # Main featured article display
│   ├── NewsCard.js      # Individual news article card
│   ├── NewsGrid.js      # Grid layout for news cards
│   ├── Sidebar.js       # Sidebar with breaking news, weather, ads
│   ├── LatestUpdates.js # Latest updates section
│   └── Footer.js        # Footer with links and social media
├── constants/
│   └── data.js          # Data constants and mock data
└── README.md            # This documentation
```

## Components Overview

### Header.js
- Contains top navigation bar with utility links
- Main logo and title section
- Search functionality
- Category navigation menu

### HeroArticle.js
- Large featured article display
- Image overlay with gradient
- Trending badge and article content
- Props: `heroImage`

### NewsCard.js
- Individual news article card component
- Image, title, excerpt, category badge
- Read more button and timestamp
- Props: `news` (object with id, title, excerpt, image, category, date)

### NewsGrid.js
- Grid layout wrapper for news cards
- Responsive design (1/2/3 columns)
- Props: `featuredNews` (array of news objects)

### Sidebar.js
- Breaking news section with scrollable list
- Weather widget with current conditions
- Advertisement placeholder
- Props: `sideNews` (array of news items)

### LatestUpdates.js
- Grid of 4 latest update cards
- Colored placeholder images
- Hover effects and click interactions
- Self-contained data

### Footer.js
- Company information and description
- Category links and contact information
- Social media buttons
- Copyright notice

## Data Structure

### News Object
```javascript
{
  id: number,
  title: string,
  excerpt: string,
  image: string, // Base64 SVG data URL
  category: string,
  date: string
}
```

### Side News Object
```javascript
{
  title: string,
  time: string
}
```

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop
- **Component-based Architecture**: Easy to maintain and extend
- **Odia Language Support**: Full support for Odia text and typography
- **Modern UI**: Clean design with hover effects and transitions
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Performance**: Optimized images and code splitting

## Usage

The main page imports all components and passes data as props:

```javascript
import Header from '../components/Header';
import HeroArticle from '../components/HeroArticle';
// ... other imports

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <HeroArticle heroImage={heroImage} />
        <NewsGrid featuredNews={featuredNews} />
        <Sidebar sideNews={sideNews} />
        <LatestUpdates />
      </main>
      <Footer />
    </div>
  );
}
```

## Development

To run the development server:
```bash
npm run dev
```

To build for production:
```bash
npm run build
```

## Future Enhancements

- [ ] Add dynamic data fetching from CMS
- [ ] Implement search functionality
- [ ] Add user authentication
- [ ] Create admin panel for content management
- [ ] Add more interactive features (comments, sharing)
- [ ] Implement SEO optimization
- [ ] Add PWA capabilities