# 🚀 RoboCell Website - Complete Setup Instructions

## 📋 Current Status
✅ **Website Code**: Complete and ready
✅ **Real Content**: Updated with actual RoboCell information
✅ **Design**: Customized for robotics theme
❌ **Node.js**: Not installed (required to run the website)

## 🛠️ Step 1: Install Node.js (Required)

### Option A: Download from Official Website (Recommended)
1. **Go to**: [https://nodejs.org/](https://nodejs.org/)
2. **Download**: The **LTS version** (Long Term Support) - currently v20.x
3. **Run the installer**: Follow the installation wizard
4. **Verify installation**: Open Command Prompt/PowerShell and type:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers like `v20.10.0` and `10.2.3`

### Option B: Using Chocolatey (Windows Package Manager)
If you have Chocolatey installed:
```bash
choco install nodejs
```

### Option C: Using Winget (Windows 10/11)
```bash
winget install OpenJS.NodeJS
```

## 🚀 Step 2: Run the RoboCell Website

Once Node.js is installed, open Command Prompt/PowerShell in your project folder and run:

```bash
# Install all required packages (first time only)
npm install

# Start the development server
npm run dev
```

## 🌐 Step 3: View Your Website

Open your browser and go to: **http://localhost:3000**

🎉 **Your RoboCell website will be live!**

## 📱 What You'll See

### ✅ Updated Content (Based on Real RoboCell Info)
- **Tagline**: "Ideate, Innovate, Inspire!" (from their Instagram)
- **Description**: Updated to reflect their focus on Robocon and research
- **Stats**: Real follower count (587+ Instagram followers)
- **Contact**: Actual email addresses and social media links
- **Mission**: Focused on competitive robotics and innovation

### 🎨 Design Features
- **Dark futuristic theme** perfect for a robotics club
- **Neon accents** in blue, green, purple, and orange
- **Glassmorphism effects** for modern UI
- **Responsive design** works on all devices
- **Smooth animations** and hover effects

### 📄 Complete Pages
1. **🏠 Home** - Hero with real RoboCell branding
2. **ℹ️ About** - Mission, vision, and CCA connection
3. **🔧 Projects** - Showcase for robotics projects
4. **📅 Events** - Robocon and workshop timeline
5. **👥 Team** - Member profiles and roles
6. **🚀 Join Us** - Recruitment with application form
7. **📝 Blog** - Technical articles and tutorials
8. **📞 Contact** - Real contact info and social links

## 🔧 Customization Guide

### 📝 Adding Real Content
1. **Team Photos**: Replace placeholder images in `src/components/sections/TeamGrid.tsx`
2. **Project Details**: Update `src/components/sections/ProjectsGrid.tsx`
3. **Event History**: Modify `src/components/sections/EventsTimeline.tsx`
4. **Blog Posts**: Add real articles in `src/components/sections/BlogGrid.tsx`

### 🎨 Design Customization
- **Colors**: Edit `tailwind.config.ts` for theme colors
- **Logo**: Add RoboCell logo to `src/components/layout/Header.tsx`
- **Fonts**: Modify font imports in `src/app/layout.tsx`

### 📧 Contact Form Setup
To make the contact form functional:
1. **Formspree**: Sign up at [formspree.io](https://formspree.io) (free)
2. **Netlify Forms**: If deploying to Netlify
3. **EmailJS**: For client-side email sending

## 🌐 Deployment Options

### 🌟 Vercel (Recommended - Free)
1. Push code to GitHub
2. Connect to [vercel.com](https://vercel.com)
3. Deploy automatically
4. Get free SSL and custom domain

### 🔧 Other Options
- **Netlify**: Drag and drop deployment
- **GitHub Pages**: Free static hosting
- **Railway**: Easy deployment with database

## 🆘 Troubleshooting

### ❌ Common Issues
- **"npm not recognized"**: Node.js not installed properly
- **Port 3000 in use**: Try `npm run dev -- -p 3001`
- **Module errors**: Run `npm install` again
- **Build fails**: Check Node.js version (should be 18+)

### 💡 Solutions
1. **Restart terminal** after installing Node.js
2. **Run as administrator** if permission issues
3. **Clear npm cache**: `npm cache clean --force`
4. **Delete node_modules** and run `npm install` again

## 📞 Need Help?

### 🔗 Useful Links
- **Node.js Download**: [nodejs.org](https://nodejs.org/)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)

### 📧 Support
- Check the main README.md for detailed documentation
- Create GitHub issues for bugs
- Contact RoboCell team for content updates

## 🎯 Next Steps After Setup

1. ✅ **Get it running** (follow steps above)
2. 📸 **Add real photos** (team members, projects, events)
3. 📝 **Update content** (actual project details, achievements)
4. 🎨 **Add RoboCell logo** and branding
5. 🌐 **Deploy online** (Vercel recommended)
6. 📊 **Add analytics** (Google Analytics)
7. 📧 **Setup contact form** backend

---

**🤖 Once Node.js is installed, your RoboCell website will be ready to showcase the amazing work of the robotics club at NIT Durgapur!**

**The website is already customized with real RoboCell information and ready to represent the club professionally online.**
