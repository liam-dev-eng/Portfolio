#!/bin/bash

# Portfolio Deployment Script
# Automates the deployment process to GitHub Pages

set -e  # Exit on error

echo "🚀 Starting deployment process..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "${YELLOW}📦 node_modules not found. Running npm install...${NC}"
    npm install
else
    echo "${GREEN}✓ Dependencies already installed${NC}"
fi

# Step 2: Build the project
echo "${YELLOW}🔨 Building production version...${NC}"
npm run build

# Step 3: Deploy to GitHub Pages
echo "${YELLOW}🌐 Deploying to GitHub Pages...${NC}"
npm run deploy

echo "${GREEN}✅ Deployment complete!${NC}"
echo "${GREEN}🎉 Your portfolio is now live at: https://liam-dev-eng.github.io/Portfolio${NC}"
echo ""
echo "Note: It may take 1-2 minutes for changes to appear on GitHub Pages."
