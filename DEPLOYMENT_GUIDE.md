# Claimora - Deployment Guide

## Project Overview
Claimora is a legal intelligence platform for analyzing False Claims Act cases. Built with React, TypeScript, Vite, and Tailwind CSS v4.

## Project Structure
```
claimora/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── WelcomeScreen.tsx      # Landing page
│   │   │   ├── UploadScreen.tsx       # File upload interface
│   │   │   ├── AnalysisScreen.tsx     # Analysis progress
│   │   │   ├── ResultsScreen.tsx      # Case results dashboard
│   │   │   ├── HeatmapScreen.tsx      # Evidence heatmap
│   │   │   ├── GapsScreen.tsx         # Evidence gaps analysis
│   │   │   ├── MemoScreen.tsx         # Case memo generator
│   │   │   ├── Header.tsx             # Navigation header
│   │   │   └── SignInModal.tsx        # Authentication modal
│   │   ├── App.tsx                    # Main app component
│   │   └── routes.tsx                 # Route configuration
│   └── styles/
│       ├── tailwind.css               # Tailwind imports
│       ├── theme.css                  # Design tokens
│       ├── index.css                  # Global styles
│       └── fonts.css                  # Font imports
├── package.json
└── vite.config.js (or ts)
```

## Step 1: Export/Download Your Code

Since you're in Figma Make, you'll need to download the project files:

1. Download all files from the project
2. Create a new folder called `claimora` on your computer
3. Copy all the files maintaining the folder structure shown above

## Step 2: Local Setup

### Prerequisites
- Node.js (v18 or higher)
- pnpm (or npm/yarn)

### Installation

1. **Navigate to your project folder:**
```bash
cd claimora
```

2. **Install pnpm (if not installed):**
```bash
npm install -g pnpm
```

3. **Install dependencies:**
```bash
pnpm install
```

4. **Create vite.config.ts (if not exists):**
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
```

5. **Create index.html in root (if not exists):**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Proximate AI - Legal Intelligence Platform</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

6. **Create src/main.tsx (if not exists):**
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

7. **Test locally:**
```bash
pnpm run dev
```

Visit http://localhost:5173 to see your app running locally.

## Step 3: Build for Production

```bash
pnpm run build
```

This creates a `dist` folder with optimized production files.

## Step 4: Deployment Options

### Option A: Vercel (Recommended - Easiest)

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Follow prompts:**
   - Link to existing project or create new
   - Confirm settings
   - Deploy!

4. **Custom Domain (Optional):**
   - Go to Vercel dashboard
   - Navigate to your project → Settings → Domains
   - Add your custom domain

**Vercel Configuration:**
Create `vercel.json` in root:
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

### Option B: Netlify

1. **Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Deploy:**
```bash
netlify deploy --prod
```

3. **Or use Netlify Dashboard:**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import from Git"
   - Connect your GitHub repo
   - Build command: `pnpm run build`
   - Publish directory: `dist`

**Netlify Configuration:**
Create `netlify.toml` in root:
```toml
[build]
  command = "pnpm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option C: GitHub Pages

1. **Update vite.config.ts:**
```typescript
export default defineConfig({
  base: '/proximate-ai/', // Replace with your repo name
  plugins: [react(), tailwindcss()],
});
```

2. **Install gh-pages:**
```bash
pnpm add -D gh-pages
```

3. **Add to package.json scripts:**
```json
{
  "scripts": {
    "predeploy": "pnpm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. **Deploy:**
```bash
pnpm run deploy
```

5. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages

### Option D: Docker + Any Host

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Create `nginx.conf`:
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

**Build and run:**
```bash
docker build -t proximate-ai .
docker run -p 80:80 proximate-ai
```

## Step 5: Environment Variables (If Needed)

If you add backend integration later:

1. **Create `.env` file:**
```
VITE_API_URL=https://api.yourdomain.com
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_key
```

2. **Use in code:**
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. **Add to hosting platform:**
   - Vercel: Environment Variables in dashboard
   - Netlify: Site settings → Environment variables

## Important Notes

### Routing Configuration
The app uses client-side routing (React Router). Make sure your hosting platform redirects all routes to `index.html`:
- ✅ Vercel/Netlify: Configured automatically
- ⚠️ Custom server: Needs manual configuration

### CSS & Tailwind v4
The project uses Tailwind CSS v4 with custom design tokens in `theme.css`. No additional Tailwind config file is needed.

### Security Considerations
Before going live:
1. Implement real authentication (replace dummy login)
2. Add backend API for file processing
3. Set up HTTPS (automatic with Vercel/Netlify)
4. Add rate limiting for API calls
5. Implement proper file upload validation

## Quick Deploy Commands

**For Vercel:**
```bash
pnpm run build && vercel --prod
```

**For Netlify:**
```bash
pnpm run build && netlify deploy --prod --dir=dist
```

**For GitHub Pages:**
```bash
pnpm run deploy
```

## Troubleshooting

### Build Errors
- Check Node version: `node -v` (should be 18+)
- Clear cache: `rm -rf node_modules .vite dist && pnpm install`
- Check for missing files in src/main.tsx and index.html

### Routing Issues (404 on refresh)
- Ensure redirects are configured (see hosting configs above)
- Check base path in vite.config.ts matches deployment path

### Styling Issues
- Verify all CSS files are imported in main.tsx
- Check Tailwind plugin is in vite.config.ts

## Cost Estimates

- **Vercel/Netlify Free Tier:** Perfect for this project (100GB bandwidth)
- **Custom Domain:** ~$10-15/year
- **Future Backend (Supabase):** Free tier includes 500MB database

## Next Steps for Production

1. **Add Analytics:** Google Analytics, Plausible, or Fathom
2. **Error Tracking:** Sentry for production error monitoring
3. **Backend Integration:** Supabase or custom API
4. **File Processing:** AWS S3 + Lambda for document processing
5. **AI Integration:** OpenAI API for actual case analysis
6. **Authentication:** Auth0, Clerk, or Supabase Auth

## Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Vite Docs: https://vitejs.dev/guide/

---

**Your app is now ready to deploy! Choose your preferred hosting option and follow the steps above.**
