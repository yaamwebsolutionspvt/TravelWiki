import React from 'react';
import { Link } from 'react-router-dom';

// SEO Utilities for proper heading hierarchy and keyword targeting

// SEO Keywords for different page types
export const SEO_KEYWORDS = {
  home: {
    primary: 'Kashmir Tourism',
    secondary: 'Kashmir Tour Packages',
    tertiary: 'Kashmir Holiday Deals'
  },
  packages: {
    primary: 'Kashmir Tour Packages',
    secondary: 'Kashmir Holiday Packages',
    tertiary: 'Kashmir Travel Deals'
  },
  honeymoon: {
    primary: 'Kashmir Honeymoon Packages',
    secondary: 'Kashmir Romantic Tours',
    tertiary: 'Kashmir Couple Packages'
  },
  family: {
    primary: 'Kashmir Family Packages',
    secondary: 'Kashmir Family Tours',
    tertiary: 'Kashmir Family Holidays'
  },
  adventure: {
    primary: 'Kashmir Adventure Tours',
    secondary: 'Kashmir Adventure Packages',
    tertiary: 'Kashmir Adventure Activities'
  },
  cultural: {
    primary: 'Kashmir Cultural Tours',
    secondary: 'Kashmir Cultural Packages',
    tertiary: 'Kashmir Heritage Tours'
  },
  ladakh: {
    primary: 'Ladakh Tour Packages',
    secondary: 'Ladakh Travel Packages',
    tertiary: 'Ladakh Adventure Tours'
  },
  srinagar: {
    primary: 'Srinagar Tourism',
    secondary: 'Srinagar Tour Packages',
    tertiary: 'Srinagar Travel Guide'
  },
  gulmarg: {
    primary: 'Gulmarg Tourism',
    secondary: 'Gulmarg Tour Packages',
    tertiary: 'Gulmarg Skiing Tours'
  },
  pahalgam: {
    primary: 'Pahalgam Tourism',
    secondary: 'Pahalgam Tour Packages',
    tertiary: 'Pahalgam Valley Tours'
  },
  sonamarg: {
    primary: 'Sonamarg Tourism',
    secondary: 'Sonamarg Tour Packages',
    tertiary: 'Sonamarg Glacier Tours'
  }
};

// Heading hierarchy management
export class HeadingManager {
  constructor() {
    this.headings = {
      h1: 0,
      h2: 0,
      h3: 0,
      h4: 0,
      h5: 0,
      h6: 0
    };
    this.currentLevel = 0;
  }

  // Check if we can add a heading at a specific level
  canAddHeading(level) {
    if (level === 1) {
      return this.headings.h1 === 0; // Only one H1 per page
    }
    
    // Ensure proper hierarchy
    for (let i = 1; i < level; i++) {
      if (this.headings[`h${i}`] === 0) {
        return false; // Can't skip levels
      }
    }
    
    return true;
  }

  // Add a heading and track it
  addHeading(level) {
    if (this.canAddHeading(level)) {
      this.headings[`h${level}`]++;
      this.currentLevel = level;
      return true;
    }
    return false;
  }

  // Get current heading count
  getHeadingCount(level) {
    return this.headings[`h${level}`];
  }

  // Reset for new page
  reset() {
    this.headings = {
      h1: 0,
      h2: 0,
      h3: 0,
      h4: 0,
      h5: 0,
      h6: 0
    };
    this.currentLevel = 0;
  }

  // Validate heading structure
  validateStructure() {
    const issues = [];
    
    if (this.headings.h1 === 0) {
      issues.push('Missing H1 tag - each page should have exactly one H1');
    } else if (this.headings.h1 > 1) {
      issues.push('Multiple H1 tags found - each page should have only one H1');
    }
    
    // Check for skipped levels
    for (let i = 1; i < 6; i++) {
      if (this.headings[`h${i}`] === 0 && this.headings[`h${i + 1}`] > 0) {
        issues.push(`H${i} is missing but H${i + 1} exists - heading levels should not be skipped`);
      }
    }
    
    return issues;
  }
}

// SEO Component wrapper for proper heading management
export const SEOHeading = ({ 
  level, 
  children, 
  className = '', 
  keyword = '', 
  headingManager,
  ...props 
}) => {
  const HeadingTag = `h${level}`;
  
  // Validate heading level
  if (level < 1 || level > 6) {
    return <div className={className} {...props}>{children}</div>;
  }

  // Check if we can add this heading
  if (headingManager && !headingManager.canAddHeading(level)) {
    // Fallback to a div with heading styles
    return (
      <div 
        className={`heading-h${level} ${className}`} 
        role="heading" 
        aria-level={level}
        {...props}
      >
        {children}
      </div>
    );
  }

  // Add heading to manager if provided
  if (headingManager) {
    headingManager.addHeading(level);
  }

  // Apply keyword optimization classes
  const keywordClass = keyword ? `keyword-${keyword.toLowerCase().replace(/\s+/g, '-')}` : '';
  const finalClassName = `${className} ${keywordClass}`.trim();

  return (
    <HeadingTag className={finalClassName} {...props}>
      {children}
    </HeadingTag>
  );
};

// SEO Content wrapper for semantic structure
export const SEOContent = ({ 
  children, 
  className = '', 
  semantic = 'section',
  ...props 
}) => {
  const Element = semantic;
  
  return (
    <Element className={className} {...props}>
      {children}
    </Element>
  );
};

// SEO List wrapper for better semantic structure
export const SEOList = ({ 
  items, 
  type = 'ul', 
  className = '', 
  itemClassName = '',
  ...props 
}) => {
  const ListTag = type;
  
  return (
    <ListTag className={className} {...props}>
      {items.map((item, index) => (
        <li key={index} className={itemClassName}>
          {item}
        </li>
      ))}
    </ListTag>
  );
};

// SEO Link wrapper with proper attributes
export const SEOLink = ({ 
  to, 
  children, 
  className = '', 
  keyword = '',
  ...props 
}) => {
  const keywordClass = keyword ? `keyword-${keyword.toLowerCase().replace(/\s+/g, '-')}` : '';
  const finalClassName = `${className} ${keywordClass}`.trim();
  
  return (
    <Link to={to} className={finalClassName} {...props}>
      {children}
    </Link>
  );
};

// SEO Image wrapper with proper alt text and loading
export const SEOImage = ({ 
  src, 
  alt, 
  className = '', 
  keyword = '',
  loading = 'lazy',
  ...props 
}) => {
  const keywordClass = keyword ? `keyword-${keyword.toLowerCase().replace(/\s+/g, '-')}` : '';
  const finalClassName = `${className} ${keywordClass}`.trim();
  
  // Ensure alt text contains keywords
  const optimizedAlt = keyword && !alt.includes(keyword) 
    ? `${alt} - ${keyword}` 
    : alt;
  
  return (
    <img
      src={src}
      alt={optimizedAlt}
      className={finalClassName}
      loading={loading}
      {...props}
    />
  );
};

// SEO Paragraph wrapper with keyword optimization
export const SEOParagraph = ({ 
  children, 
  className = '', 
  keyword = '',
  ...props 
}) => {
  const keywordClass = keyword ? `keyword-${keyword.toLowerCase().replace(/\s+/g, '-')}` : '';
  const finalClassName = `${className} ${keywordClass}`.trim();
  
  return (
    <div className={finalClassName} {...props}>
      {children}
    </div>
  );
};

// SEO Button wrapper with proper accessibility
export const SEOButton = ({ 
  children, 
  className = '', 
  keyword = '',
  onClick,
  type = 'button',
  ...props 
}) => {
  const keywordClass = keyword ? `keyword-${keyword.toLowerCase().replace(/\s+/g, '-')}` : '';
  const finalClassName = `${className} ${keywordClass}`.trim();
  
  return (
    <button
      type={type}
      className={finalClassName}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// SEO validation helper
export const validateSEOPage = (headingManager, pageType) => {
  const issues = headingManager.validateStructure();
  
  // Page-specific validations
  if (pageType === 'home' && headingManager.getHeadingCount(1) === 0) {
    issues.push('Home page must have an H1 tag');
  }
  
  if (headingManager.getHeadingCount(1) > 1) {
    issues.push('Page has multiple H1 tags - only one H1 per page is allowed');
  }
  
  return {
    isValid: issues.length === 0,
    issues,
    headingCount: headingManager.headings
  };
};

// Keyword density checker
export const checkKeywordDensity = (text, keyword) => {
  if (!text || !keyword) return 0;
  
  const wordCount = text.toLowerCase().split(/\s+/).length;
  const keywordMatches = (text.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'g')) || []).length;
  
  return (keywordMatches / wordCount) * 100;
};

// Meta description generator
export const generateMetaDescription = (pageType, keywords, maxLength = 160) => {
  const baseDescriptions = {
    home: 'Discover Kashmir\'s breathtaking beauty with our exclusive tour packages. Experience Dal Lake\'s serenity, Gulmarg\'s snow-capped peaks, and Pahalgam\'s meadows.',
    packages: 'Explore our curated Kashmir tour packages including honeymoon specials, family tours, adventure trips, and cultural experiences.',
    honeymoon: 'Romantic Kashmir honeymoon packages with houseboat stays, scenic views, and unforgettable experiences for couples.',
    family: 'Family-friendly Kashmir tour packages with activities for all ages, comfortable accommodations, and safe travel experiences.',
    adventure: 'Thrilling Kashmir adventure tours including trekking, skiing, river rafting, and outdoor activities for adventure seekers.',
    cultural: 'Immerse yourself in Kashmir\'s rich culture with our heritage tours, local experiences, and traditional activities.',
    ladakh: 'Explore the mystical landscapes of Ladakh with our adventure packages, cultural tours, and spiritual experiences.',
    srinagar: 'Experience Srinagar\'s beauty with Dal Lake houseboat stays, Mughal gardens, and traditional Kashmiri culture.',
    gulmarg: 'Discover Gulmarg\'s winter wonderland with skiing packages, gondola rides, and snow adventure activities.',
    pahalgam: 'Explore Pahalgam\'s scenic valleys, trekking trails, and natural beauty with our guided tour packages.',
    sonamarg: 'Experience Sonamarg\'s glaciers, meadows, and adventure activities with our comprehensive tour packages.'
  };
  
  let description = baseDescriptions[pageType] || baseDescriptions.home;
  
  // Add keywords if they fit
  if (keywords && keywords.length > 0) {
    const keywordString = keywords.join(', ');
    const newDescription = `${description} ${keywordString}`;
    
    if (newDescription.length <= maxLength) {
      description = newDescription;
    }
  }
  
  // Truncate if too long
  if (description.length > maxLength) {
    description = description.substring(0, maxLength - 3) + '...';
  }
  
  return description;
};

// Title tag generator
export const generateTitle = (pageType, keywords, maxLength = 60) => {
  const baseTitles = {
    home: 'Kashmir Tourism 2025 - Best Tour Packages & Holiday Deals',
    packages: 'Kashmir Tour Packages - Best Holiday Deals & Travel Packages',
    honeymoon: 'Kashmir Honeymoon Packages - Romantic Tours & Couple Packages',
    family: 'Kashmir Family Packages - Family Tours & Holiday Deals',
    adventure: 'Kashmir Adventure Tours - Adventure Packages & Outdoor Activities',
    cultural: 'Kashmir Cultural Tours - Heritage Packages & Local Experiences',
    ladakh: 'Ladakh Tour Packages - Adventure Tours & Travel Packages',
    srinagar: 'Srinagar Tourism - Tour Packages & Travel Guide',
    gulmarg: 'Gulmarg Tourism - Skiing Packages & Adventure Tours',
    pahalgam: 'Pahalgam Tourism - Valley Tours & Adventure Packages',
    sonamarg: 'Sonamarg Tourism - Glacier Tours & Adventure Packages'
  };
  
  let title = baseTitles[pageType] || baseTitles.home;
  
  // Add keywords if they fit
  if (keywords && keywords.length > 0) {
    const keywordString = keywords.join(' - ');
    const newTitle = `${title} - ${keywordString}`;
    
    if (newTitle.length <= maxLength) {
      title = newTitle;
    }
  }
  
  // Truncate if too long
  if (title.length > maxLength) {
    title = title.substring(0, maxLength - 3) + '...';
  }
  
  return title;
};
