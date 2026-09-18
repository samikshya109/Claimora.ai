# Quick Deployment Checklist

## ✅ Pre-Deployment Checklist

### Code Preparation
- [ ] All files downloaded from Figma Make
- [ ] Project structure matches expected layout
- [ ] Dependencies installed (`pnpm install`)
- [ ] Build successful (`pnpm run build`)
- [ ] Local preview works (`pnpm run preview`)

### Files to Verify
- [ ] `package.json` - Dependencies list
- [ ] `vite.config.ts` - Build configuration
- [ ] `src/main.tsx` - App entry point
- [ ] `index.html` - HTML entry point
- [ ] `src/styles/` - All CSS files present
- [ ] All component files in `src/app/components/`

### Testing
- [ ] Navigation between pages works
- [ ] Sign In modal opens and closes
- [ ] Back button functions correctly
- [ ] "Claimora" logo navigates to home
- [ ] "Add Files" button works
- [ ] Responsive design looks good on mobile
- [ ] No console errors

## 🚀 Fastest Deployment (Vercel)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Navigate to project
cd claimora

# 3. Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Link to existing project? N
# - Project name? claimora
# - Directory? ./
# - Override settings? N

# 4. For production deployment
vercel --prod
```

Your site will be live at: `https://proximate-ai.vercel.app`

## 🌐 Custom Domain Setup (Vercel)

1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your domain: `proximateai.com`
5. Follow DNS configuration instructions
6. Wait for DNS propagation (5-30 minutes)

## 📦 Complete Setup Commands

```bash
# Clone/Download project
cd proximate-ai

# Install dependencies
pnpm install

# Test locally
pnpm run dev

# Build for production
pnpm run build

# Test production build
pnpm run preview

# Deploy to Vercel
vercel --prod

# Or deploy to Netlify
netlify deploy --prod --dir=dist
```

## 🔧 Required Files for Deployment

### index.html (root directory)
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="AI-powered legal intelligence for False Claims Act cases" />
    <title>Proximate AI - Legal Intelligence Platform</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### src/main.tsx
```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### vercel.json (optional but recommended)
```json
{
  "buildCommand": "pnpm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## 🐛 Common Issues & Solutions

### Issue: 404 on page refresh
**Solution:** Add redirect rules (already in vercel.json above)

### Issue: Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules .vite dist
pnpm install
pnpm run build
```

### Issue: Styles not loading
**Solution:** Check that all CSS imports are in `src/main.tsx`:
```typescript
import './styles/index.css';
```

### Issue: Routing doesn't work
**Solution:** Ensure using `HashRouter` or configure redirects for `BrowserRouter`

## 📊 Deployment Platforms Comparison

| Platform | Free Tier | Build Time | Custom Domain | Auto Deploy |
|----------|-----------|------------|---------------|-------------|
| **Vercel** | 100GB bandwidth | ~2 min | ✅ Free | ✅ Yes |
| **Netlify** | 100GB bandwidth | ~2 min | ✅ Free | ✅ Yes |
| **GitHub Pages** | 1GB storage | ~3 min | ✅ Free | ✅ Yes |
| **Cloudflare Pages** | Unlimited | ~2 min | ✅ Free | ✅ Yes |

## 🎯 Recommended: Vercel

**Why Vercel?**
- ✅ Zero configuration needed
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Instant deploys
- ✅ Preview deployments for branches
- ✅ Built by Vite creators

## 📱 Mobile Optimization Check

Before deploying, test on:
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] Tablet (iPad)
- [ ] Different screen sizes

Use Chrome DevTools → Device Mode to test.

## 🔐 Security Before Going Live

1. **Remove any API keys from code**
2. **Use environment variables for secrets**
3. **Enable HTTPS** (automatic on Vercel/Netlify)
4. **Add Content Security Policy headers**
5. **Implement rate limiting** (when backend is added)

## 📈 Post-Deployment

After deployment:
- [ ] Test all pages on live site
- [ ] Set up Google Analytics
- [ ] Configure error tracking (Sentry)
- [ ] Set up monitoring (UptimeRobot)
- [ ] Share URL with stakeholders

## 💰 Cost Estimate

**Free Tier (Perfect for starting):**
- Hosting: $0/month (Vercel/Netlify)
- Domain: $12/year (Google Domains, Namecheap)
- SSL: $0 (automatic with hosting)

**Total: ~$1/month**

## 🆘 Need Help?

- Vercel Support: https://vercel.com/support
- Deployment Guide: See `DEPLOYMENT_GUIDE.md`
- Project Issues: Create GitHub issue

---

**You're ready to deploy! Follow the Vercel quick deploy steps above. 🚀**
