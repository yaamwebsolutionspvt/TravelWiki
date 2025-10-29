# Image Optimization Guide for TravelWiki

This guide explains how images are optimized in the TravelWiki application to improve SEO, performance, and user experience.

## Image Optimization Features

### 1. Modern Image Formats (WebP)
- All images should be in WebP format for optimal compression
- The `OptimizedImage` component automatically provides fallbacks for browsers that don't support WebP
- WebP images are ~30% smaller than JPEG/PNG while maintaining quality

### 2. Responsive Images
- Images are served in multiple sizes based on device screen width
- Uses `srcset` and `sizes` attributes for responsive loading
- Breakpoints: 320px, 480px, 640px, 768px, 1024px, 1280px, 1536px, 1920px

### 3. Proper Aspect Ratios
- All images maintain their aspect ratio to prevent distortion
- Uses CSS `aspect-ratio` property for layout stability
- Prevents Cumulative Layout Shift (CLS)

### 4. Lazy Loading
- Images load only when they enter the viewport
- Reduces initial page load time
- Uses native browser lazy loading with `loading="lazy"`

## Using the OptimizedImage Component

```jsx
import OptimizedImage from '../components/OptimizedImage';

<OptimizedImage
  src="/path/to/image.webp"
  alt="Descriptive alt text"
  width={800}
  height={600}
  loading="lazy" // or "eager" for above-the-fold images
  objectFit="cover" // or "contain", "fill", etc.
/>
```

## Best Practices

### 1. Always Provide Width and Height
```jsx
// Good ✅
<OptimizedImage src="image.webp" alt="Kashmir valley" width={1200} height={800} />

// Bad ❌ - Missing dimensions
<OptimizedImage src="image.webp" alt="Kashmir valley" />
```

### 2. Use Descriptive Alt Text
```jsx
// Good ✅
<OptimizedImage src="dal-lake.webp" alt="Shikara boats on Dal Lake in Srinagar, Kashmir" width={1200} height={800} />

// Bad ❌ - Generic or missing alt
<OptimizedImage src="dal-lake.webp" alt="image" width={1200} height={800} />
```

### 3. Choose Appropriate Loading Strategy
```jsx
// Above-the-fold images (hero sections)
<OptimizedImage src="hero.webp" alt="Kashmir landscape" width={1920} height={1080} loading="eager" />

// Below-the-fold images
<OptimizedImage src="tour-package.webp" alt="Tour package details" width={800} height={600} loading="lazy" />
```

### 4. Use Correct Object Fit
```jsx
// For maintaining aspect ratio and filling container
<OptimizedImage src="image.webp" alt="..." width={800} height={600} objectFit="cover" />

// For showing entire image without cropping
<OptimizedImage src="logo.webp" alt="..." width={200} height={100} objectFit="contain" />
```

## Converting Images to WebP

### Using Command Line (cwebp)
```bash
# Install cwebp
npm install -g cwebp

# Convert single image
cwebp input.jpg -q 80 -o output.webp

# Convert all images in a directory
for file in *.jpg; do cwebp "$file" -q 80 -o "${file%.jpg}.webp"; done
```

### Using Online Tools
- [Squoosh](https://squoosh.app/) - Google's image optimization tool
- [CloudConvert](https://cloudconvert.com/jpg-to-webp)

## Image Naming Conventions

Use descriptive, SEO-friendly names:
```
// Good ✅
kashmir-valley-landscape.webp
dal-lake-shikara-boat.webp
gulmarg-skiing-resort.webp

// Bad ❌
img001.webp
photo.webp
DSC_1234.webp
```

## Cloudinary Integration

The site uses Cloudinary for image hosting and optimization:

```jsx
// Cloudinary URL with automatic optimization
const cloudinaryUrl = "https://res.cloudinary.com/dw1sh368y/image/upload/";

// Automatic format conversion and quality optimization
<OptimizedImage 
  src={`${cloudinaryUrl}f_auto,q_auto/v1234567890/image.jpg`}
  alt="..."
  width={800}
  height={600}
/>
```

## Performance Checklist

- [ ] All images are in WebP format
- [ ] All images have width and height attributes
- [ ] All images have descriptive alt text
- [ ] Above-the-fold images use `loading="eager"`
- [ ] Below-the-fold images use `loading="lazy"`
- [ ] Images are appropriately sized (not serving 4K images for thumbnails)
- [ ] No distorted images (aspect ratios are maintained)

## Troubleshooting

### Images appear distorted
- Ensure width and height match the actual image aspect ratio
- Use `objectFit="cover"` to maintain aspect ratio

### Images load slowly
- Check if images are too large (reduce file size)
- Ensure lazy loading is enabled for below-the-fold images
- Use Cloudinary's automatic optimization (`f_auto,q_auto`)

### Images don't appear at all
- Check that the image path is correct
- Verify the image file exists in the public folder or Cloudinary
- Check browser console for errors

## SEO Impact

Proper image optimization improves:
- **Page Load Speed**: Faster loading = better rankings
- **Core Web Vitals**: Especially LCP (Largest Contentful Paint)
- **Mobile Performance**: Critical for mobile-first indexing
- **Accessibility**: Alt text helps screen readers and SEO
- **Image Search**: Optimized images rank in Google Image Search

## Tools for Monitoring

- Google PageSpeed Insights
- Lighthouse (Chrome DevTools)
- WebPageTest
- GTmetrix

## Additional Resources

- [WebP Image Format Documentation](https://developers.google.com/speed/webp)
- [Responsive Images Guide](https://web.dev/responsive-images/)
- [Image Optimization Best Practices](https://web.dev/fast/#optimize-your-images)

