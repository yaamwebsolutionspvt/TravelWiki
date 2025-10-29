# URL Canonicalization Guide - TravelWiki

## Problem
`https://travelwiki.org.in/` and `https://www.travelwiki.org.in/` should resolve to the **same URL** but currently don't.

## Solution
We've created redirect rules to ensure **www → non-www** canonicalization, forcing all traffic to `https://travelwiki.org.in`

---

## Files Created

### 1. **For Netlify/Vercel** ✅ Already Configured
**File**: `public/_redirects`

This file is already configured and will work automatically on:
- ✅ Netlify
- ✅ Vercel
- ✅ Cloudflare Pages
- ✅ AWS Amplify

```
https://www.travelwiki.org.in/* https://travelwiki.org.in/:splat 301!
http://www.travelwiki.org.in/* https://travelwiki.org.in/:splat 301!
http://travelwiki.org.in/* https://travelwiki.org.in/:splat 301!
/*/ /:splat 301!
/* /index.html 200
```

---

### 2. **For Apache Servers** 🆕 Created
**File**: `public/.htaccess`

Use this if your hosting uses Apache (most shared hosting providers).

**Features**:
- ✅ Redirects `www.travelwiki.org.in` → `travelwiki.org.in`
- ✅ Forces HTTPS
- ✅ Removes trailing slashes
- ✅ Adds security headers (HSTS, X-Frame-Options, etc.)
- ✅ Enables browser caching
- ✅ Enables Gzip compression
- ✅ SPA fallback routing

**Testing on Apache**:
```bash
# Check if mod_rewrite is enabled
apache2ctl -M | grep rewrite

# If not enabled, enable it:
sudo a2enmod rewrite
sudo systemctl restart apache2
```

---

### 3. **For IIS/Windows Servers** 🆕 Created
**File**: `public/web.config`

Use this if your hosting uses IIS (Windows servers).

**Features**:
- ✅ Same redirects as Apache
- ✅ Security headers
- ✅ Custom error pages
- ✅ Static content caching

---

## How It Works

### Redirect Flow

```
User visits ANY of these URLs:
├─ http://www.travelwiki.org.in
├─ http://travelwiki.org.in
├─ https://www.travelwiki.org.in
└─ https://travelwiki.org.in/

↓ ALL redirect to (301 Permanent)

https://travelwiki.org.in
```

### What Happens Step-by-Step

1. **User visits**: `http://www.travelwiki.org.in`
2. **First redirect**: Force HTTPS → `https://www.travelwiki.org.in`
3. **Second redirect**: Remove www → `https://travelwiki.org.in`
4. **Final URL**: `https://travelwiki.org.in` ✅

---

## Deployment Instructions

### Option 1: Netlify (Recommended - Easiest)

1. Deploy your `dist` folder to Netlify
2. The `_redirects` file will be automatically detected
3. **That's it!** ✅ No configuration needed

**Verify it works**:
```bash
curl -I https://www.travelwiki.org.in
# Should show: 301 Moved Permanently
# Location: https://travelwiki.org.in/
```

---

### Option 2: Vercel

1. Deploy your `dist` folder to Vercel
2. The `_redirects` file will be automatically detected
3. **That's it!** ✅ No configuration needed

**Or use `vercel.json`** (alternative):
```json
{
  "redirects": [
    {
      "source": "https://www.travelwiki.org.in/:path*",
      "destination": "https://travelwiki.org.in/:path*",
      "permanent": true
    }
  ]
}
```

---

### Option 3: Apache/cPanel Shared Hosting

**Steps**:

1. **Build your project**:
   ```bash
   npm run build
   ```

2. **Upload `dist` folder contents** via FTP/cPanel File Manager to your `public_html` directory

3. **Ensure `.htaccess` is uploaded**:
   - The file `public/.htaccess` should be in the root of `public_html`
   - Make sure hidden files are visible in your FTP client
   - On cPanel: File Manager → Settings → Show Hidden Files ✓

4. **Verify .htaccess is working**:
   ```bash
   curl -I http://www.travelwiki.org.in
   # Should redirect to https://travelwiki.org.in
   ```

5. **If not working**, check:
   - Apache has `mod_rewrite` enabled
   - `.htaccess` files are allowed (`AllowOverride All` in Apache config)
   - File permissions are correct (644)

**Fix permission if needed**:
```bash
chmod 644 .htaccess
```

---

### Option 4: IIS/Windows Server

**Steps**:

1. **Install URL Rewrite Module**:
   - Download from: https://www.iis.net/downloads/microsoft/url-rewrite
   - Or use Web Platform Installer

2. **Build your project**:
   ```bash
   npm run build
   ```

3. **Deploy `dist` folder** to your IIS website root

4. **Ensure `web.config` is in the root**:
   - The file `public/web.config` should be in the website root
   - IIS will automatically read it

5. **Verify it works**:
   - Open IIS Manager
   - Select your site → URL Rewrite
   - You should see the rules listed

6. **Test**:
   ```bash
   curl -I http://www.travelwiki.org.in
   # Should redirect to https://travelwiki.org.in
   ```

---

### Option 5: Nginx Server

If using Nginx, create this configuration:

**File**: `/etc/nginx/sites-available/travelwiki.org.in`

```nginx
# Redirect HTTP to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name travelwiki.org.in www.travelwiki.org.in;
    return 301 https://travelwiki.org.in$request_uri;
}

# Redirect HTTPS www to non-www
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.travelwiki.org.in;
    
    # SSL certificates (use certbot/Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/travelwiki.org.in/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/travelwiki.org.in/privkey.pem;
    
    return 301 https://travelwiki.org.in$request_uri;
}

# Main server block
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name travelwiki.org.in;
    
    # SSL certificates
    ssl_certificate /etc/letsencrypt/live/travelwiki.org.in/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/travelwiki.org.in/privkey.pem;
    
    root /var/www/travelwiki/dist;
    index index.html;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    # Remove trailing slash
    rewrite ^/(.*)/$ /$1 permanent;
    
    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|webp|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Custom 404
    error_page 404 /404.html;
}
```

**Enable and reload**:
```bash
sudo ln -s /etc/nginx/sites-available/travelwiki.org.in /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## Testing After Deployment

### 1. **Test www → non-www redirect**:
```bash
curl -I https://www.travelwiki.org.in
```

**Expected response**:
```
HTTP/2 301 
location: https://travelwiki.org.in/
```

### 2. **Test HTTP → HTTPS redirect**:
```bash
curl -I http://travelwiki.org.in
```

**Expected response**:
```
HTTP/1.1 301 Moved Permanently
Location: https://travelwiki.org.in/
```

### 3. **Test trailing slash removal**:
```bash
curl -I https://travelwiki.org.in/about-us/
```

**Expected response**:
```
HTTP/2 301
location: https://travelwiki.org.in/about-us
```

### 4. **Online Testing Tools**:

Use these tools to verify canonicalization:
- https://www.redirect-checker.org/
- https://httpstatus.io/
- https://www.whatsmydns.net/

**Enter both URLs**:
- `https://travelwiki.org.in`
- `https://www.travelwiki.org.in`

Both should ultimately resolve to `https://travelwiki.org.in`

---

## Troubleshooting

### Issue: Redirects not working

**Solution for Apache**:
1. Check if mod_rewrite is enabled:
   ```bash
   apache2ctl -M | grep rewrite
   ```

2. Enable it if missing:
   ```bash
   sudo a2enmod rewrite
   sudo systemctl restart apache2
   ```

3. Check Apache config allows `.htaccess`:
   ```apache
   <Directory /var/www/html>
       AllowOverride All
   </Directory>
   ```

---

### Issue: .htaccess file not visible

**Solution**:
1. Enable hidden files in your FTP client
2. In cPanel File Manager: Settings → Show Hidden Files
3. Check file starts with a dot: `.htaccess` (not `htaccess`)

---

### Issue: 500 Internal Server Error

**Solution**:
1. Check `.htaccess` syntax
2. Verify Apache modules are loaded:
   ```bash
   apache2ctl -M | grep -E 'rewrite|headers|expires|deflate'
   ```

3. Check Apache error logs:
   ```bash
   sudo tail -f /var/log/apache2/error.log
   ```

---

### Issue: Cloudflare caching old redirects

**Solution**:
1. Log in to Cloudflare
2. Go to Caching → Purge Everything
3. Wait 5 minutes and test again

---

## DNS Configuration

Ensure your DNS is set up correctly:

### A Records
```
travelwiki.org.in     →  [Your Server IP]
www.travelwiki.org.in →  [Your Server IP]
```

### Or CNAME (if using hosting like Netlify/Vercel)
```
www.travelwiki.org.in → CNAME → travelwiki.org.in
```

---

## SEO Benefits

Once implemented, you'll get:

✅ **Single canonical URL** - Avoids duplicate content penalties  
✅ **Link equity consolidation** - All backlinks count towards one URL  
✅ **Better search rankings** - No content dilution  
✅ **Consistent branding** - One URL in all marketing materials  
✅ **Cleaner analytics** - All traffic in one place  

---

## Google Search Console Setup

After deploying:

1. **Add both versions** to Google Search Console:
   - `https://travelwiki.org.in`
   - `https://www.travelwiki.org.in`

2. **Set preferred domain**:
   - Google will auto-detect the canonical from redirects
   - All traffic will be attributed to `https://travelwiki.org.in`

3. **Submit sitemap** to preferred domain:
   - `https://travelwiki.org.in/sitemap.xml`

---

## Summary

✅ **Created 3 configuration files** for different server types  
✅ **www → non-www** canonicalization  
✅ **HTTP → HTTPS** enforcement  
✅ **Trailing slash** removal  
✅ **Security headers** included  
✅ **Browser caching** optimized  
✅ **SPA routing** configured  

**Choose the file that matches your hosting**:
- Netlify/Vercel → Use `_redirects` (already included)
- Apache → Use `.htaccess` (created)
- IIS → Use `web.config` (created)
- Nginx → Use nginx config (see guide above)

**All files are in the `public/` folder and will be included in your build!** ✅

---

*Last Updated: October 29, 2025*

