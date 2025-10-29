# Deployment Checklist - TravelWiki SEO Fixes

## Pre-Deployment Steps

### 1. Environment Configuration
- [ ] Copy `.env.example` to `.env`
  ```bash
  cp .env.example .env
  ```
- [ ] Add your Google Analytics 4 Measurement ID in `.env`
  - Get from: https://analytics.google.com/
  - Replace `G-XXXXXXXXXX` with your actual ID
- [ ] (Optional) Add Google Tag Manager ID
- [ ] (Optional) Add Facebook Pixel ID

### 2. Build the Application
```bash
# Install dependencies (if needed)
npm install

# Build for production
npm run build
```

### 3. Test Locally
```bash
# Preview the production build
npm run preview
```
- [ ] Test homepage loads correctly
- [ ] Test a few package pages
- [ ] Test 404 page (visit a non-existent URL)
- [ ] Check images load properly
- [ ] Verify no console errors

---

## Deployment

### For Netlify (Recommended)
The `_redirects` and `_headers` files work automatically!

1. Deploy the `dist` folder to Netlify
2. Netlify will automatically read:
   - `_redirects` for URL redirects
   - `_headers` for security headers

### For Vercel
You may need to add configuration to `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "https://www.travelwiki.org.in/:path*",
      "destination": "https://travelwiki.org.in/:path*",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains; preload"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### For Other Hosting Providers
Configure these in your server settings:
- URL redirects (www to non-www)
- HTTPS enforcement
- Security headers (HSTS, etc.)

---

## Post-Deployment Testing

### 1. URL Canonicalization
- [ ] Visit `http://www.travelwiki.org.in` → Should redirect to `https://travelwiki.org.in`
- [ ] Visit `http://travelwiki.org.in` → Should redirect to `https://travelwiki.org.in`
- [ ] Check any URL with trailing slash redirects to non-trailing version

### 2. Security Headers
Open browser DevTools → Network tab → Click any request → Check Response Headers:
- [ ] `Strict-Transport-Security` header present
- [ ] `X-Content-Type-Options: nosniff` present
- [ ] `X-Frame-Options: DENY` present

### 3. 404 Page
- [ ] Visit a non-existent URL (e.g., `/this-page-does-not-exist`)
- [ ] Should show enhanced 404 page with helpful links
- [ ] All links on 404 page work correctly

### 4. Images
- [ ] Images load properly on homepage
- [ ] Images are responsive (resize browser to test)
- [ ] No distorted images
- [ ] Check Network tab: images should be WebP format

### 5. Analytics (If ID Added)
- [ ] Open browser DevTools → Network tab
- [ ] Look for requests to `google-analytics.com` or `googletagmanager.com`
- [ ] Visit Google Analytics dashboard and check Real-Time reports

### 6. Performance
Run tests on deployed site:
- [ ] Google PageSpeed Insights: https://pagespeed.web.dev/
- [ ] GTmetrix: https://gtmetrix.com/
- [ ] WebPageTest: https://www.webpagetest.org/

Expected improvements:
- Performance score: 85-95
- SEO score: 85-95
- Best Practices: 90-100

---

## SEO Verification

### 1. Google Search Console
- [ ] Submit sitemap (already at `/sitemap.xml`)
- [ ] Check for indexing issues
- [ ] Monitor Core Web Vitals

### 2. Run SEO Audit
Use the same tool that generated the original report:
- [ ] Run new audit on deployed site
- [ ] Compare with previous score (was 77/100)
- [ ] Expected new score: 85-90/100

### 3. Check Structured Data
- [ ] Use Google's Rich Results Test: https://search.google.com/test/rich-results
- [ ] Should detect TravelAgency schema
- [ ] Should detect LocalBusiness schema

---

## Monitoring Setup

### 1. Set Up Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: `https://travelwiki.org.in`
3. Verify ownership
4. Submit sitemap: `https://travelwiki.org.in/sitemap.xml`

### 2. Set Up Google Analytics (If Not Already)
1. Go to https://analytics.google.com/
2. Create property for travelwiki.org.in
3. Get Measurement ID (format: G-XXXXXXXXXX)
4. Add to `.env` file
5. Redeploy

### 3. Enable Monitoring
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom, etc.)
- [ ] Configure email alerts for site downtime
- [ ] Set up weekly performance reports

---

## Rollback Plan (If Issues Occur)

If you encounter issues after deployment:

1. **Revert to previous deployment** via your hosting provider
2. **Check specific issues**:
   - If redirects aren't working → Check hosting provider settings
   - If images don't load → Check image paths and Cloudinary config
   - If Analytics doesn't work → Verify GA ID in environment variables
3. **Review error logs** in hosting provider dashboard

---

## Success Metrics

After 1 week of deployment, check:
- [ ] SEO score improved (target: 85-90)
- [ ] Page load time < 3 seconds
- [ ] No increase in bounce rate
- [ ] Core Web Vitals in "Good" range:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
- [ ] No errors in Google Search Console

---

## Maintenance Schedule

### Daily
- Monitor analytics for unusual traffic patterns
- Check for errors in hosting provider logs

### Weekly
- Review Google Search Console for issues
- Check Core Web Vitals
- Monitor page load speeds

### Monthly
- Run full SEO audit
- Review and optimize underperforming pages
- Check for broken links
- Update sitemap if needed

### Quarterly
- Review and update content
- Optimize images (check for new images that need optimization)
- Update dependencies: `npm audit` and fix vulnerabilities
- Review and update keywords

---

## Support Contacts

- **Hosting Issues**: Contact your hosting provider support
- **Analytics Issues**: Google Analytics Help Center
- **SEO Issues**: Google Search Console Help

---

## Additional Resources

- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Web.dev](https://web.dev/) - Performance best practices
- [Schema.org](https://schema.org/) - Structured data documentation

---

**Ready to Deploy?** ✅

Once you've completed all pre-deployment steps, you're ready to deploy!

**Remember**: After deployment, don't forget to run the post-deployment tests and SEO verification.

Good luck! 🚀

