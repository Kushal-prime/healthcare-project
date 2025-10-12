# 🚀 Vercel Deployment Guide

This guide will help you deploy the **Empowering Health** project to Vercel.

## 📋 Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Your code should be pushed to GitHub
3. **Node.js**: Version 16 or higher

## 🎯 Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"

2. **Import from GitHub**
   - Select your GitHub repository: `Kushal-prime/healthcare-project`
   - Click "Import"

3. **Configure Project Settings**
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Environment Variables**
   - Add `VITE_API_URL` = `https://your-api-domain.vercel.app`
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy Frontend**
   ```bash
   cd empowering-health
   vercel
   ```

4. **Deploy Backend API**
   ```bash
   cd server
   vercel
   ```

## 🔧 Configuration Files

### Frontend (`vercel.json`)
```json
{
  "version": 2,
  "name": "empowering-health",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Backend API (`server/vercel.json`)
```json
{
  "version": 2,
  "name": "empowering-health-api",
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.js"
    }
  ]
}
```

## 🌐 Environment Variables

### Frontend
- `VITE_API_URL`: Your API domain (e.g., `https://empowering-health-api.vercel.app`)

### Backend
- `NODE_ENV`: `production`
- `PORT`: `3001` (optional, Vercel handles this)

## 📱 After Deployment

1. **Frontend URL**: `https://your-project-name.vercel.app`
2. **API URL**: `https://your-api-project.vercel.app`

## 🔄 Updating Your Deployment

1. **Push changes to GitHub**
   ```bash
   git add .
   git commit -m "Update project"
   git push
   ```

2. **Vercel will automatically redeploy** your project

## 🐛 Troubleshooting

### Build Errors
- Check that all dependencies are in `package.json`
- Ensure build command is correct: `npm run build`
- Verify output directory is `dist`

### API Issues
- Check that API routes are properly configured
- Verify CORS settings
- Ensure environment variables are set

### Environment Variables
- Make sure `VITE_API_URL` points to your deployed API
- Check that all required variables are set in Vercel dashboard

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify all configuration files
3. Ensure GitHub repository is properly connected

## 🎉 Success!

Once deployed, your **Empowering Health** application will be live and accessible worldwide!
