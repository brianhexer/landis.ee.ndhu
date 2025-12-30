# GitHub Pages Deployment Instructions

## Current Status
✅ Code is ready and pushed to GitHub
✅ GitHub Actions workflow is configured
✅ Build succeeds locally
❌ GitHub Pages needs to be enabled

## Steps to Enable GitHub Pages

1. **Go to your GitHub repository**: https://github.com/brianhexer/landis

2. **Navigate to Settings**:
   - Click on "Settings" tab at the top

3. **Enable GitHub Pages**:
   - Scroll down to "Pages" in the left sidebar
   - Click on "Pages"
   
4. **Configure Source**:
   - Under "Build and deployment" → "Source"
   - Select: **GitHub Actions** (NOT "Deploy from a branch")
   
5. **Wait for deployment** (~2 minutes):
   - Go to the "Actions" tab
   - You should see a "Deploy to GitHub Pages" workflow running
   - Wait for it to complete (green checkmark)

6. **Visit your site**:
   - https://brianhexer.github.io/landis/

## Troubleshooting

If the site still shows blank after deployment:

1. **Check the Actions tab** for any failed workflows
2. **Check browser console** (F12 → Console tab) for JavaScript errors
3. **Try hard refresh**: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
4. **Clear browser cache** and try again

## Technical Details

- **Base URL**: `/landis/`
- **Build output**: `dist/` folder
- **Workflow file**: `.github/workflows/deploy.yml`
- **SPA routing**: Handled via `404.html` redirect trick
