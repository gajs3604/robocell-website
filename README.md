# RoboCell Website - NIT Durgapur

A complete, modern, and innovative website for RoboCell, the premier robotics and embedded systems club under the Centre for Cognitive Activities (CCA), NIT Durgapur.

## Features

### Design & UI

- **Dark Theme**: Futuristic dark theme with neon blue, green, purple, and orange accents
- **Glassmorphism**: Modern glass-like effects and transparency
- **Responsive Design**: Mobile-first approach that works perfectly on all devices
- **Smooth Animations**: Hover effects, floating elements, and smooth transitions
- **Tech Typography**: Orbitron for headings (sci-fi feel) + Inter for body text

### Pages & Functionality

- **Home**: Hero section with animated stats and call-to-action
- **About**: Mission, vision, timeline, and achievements showcase
- **Projects**: Filterable project gallery with categories and search
- **Events**: Timeline of past events and upcoming workshops
- **Team**: Member profiles with filtering by roles and categories
- **Join Us**: Application form with benefits and testimonials
- **Blog**: Technical articles with search and category filtering
- **Contact**: Contact form, information, and social media links

### Technical Features

- **Next.js 14**: Latest App Router with TypeScript
- **Tailwind CSS**: Custom design system with utility classes
- **Interactive Components**: Forms, filters, search, and navigation
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Optimized images and fast loading

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter + Orbitron)
- **Components**: Custom reusable UI components

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm**, **yarn**, or **pnpm** (comes with Node.js)

## Quick Start

### 1. Install Node.js

If you don't have Node.js installed:

- Go to [nodejs.org](https://nodejs.org/)
- Download and install the **LTS version** (recommended)
- Verify installation: `node --version` and `npm --version`

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Start Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### 4. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) to see the website!

## Design System

### Color Palette

- **Primary Brand**: Blue (#0ea5e9)
- **Neon Accents**:
  - 🔵 Neon Blue (#00d4ff) - Primary highlights
  - 🟢 Neon Green (#00ff88) - Success states
  - 🟣 Neon Purple (#8b5cf6) - Special features
  - 🟠 Neon Orange (#fb923c) - Call-to-actions
  - 🩷 Neon Pink (#f472b6) - Accent elements
- **Dark Theme**:
  - Background: #0f172a (darkest) to #1e293b (lighter)
  - Text: White to gray gradients

### Typography

- **Headings**: Orbitron (futuristic, tech-inspired)
- **Body Text**: Inter (clean, highly readable)
- **Code**: Monospace fonts for technical content

### UI Components

- **Cards**: Glassmorphism with backdrop blur
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Glass-style inputs with neon focus states
- **Navigation**: Responsive with smooth transitions
- **Animations**: Floating elements, pulse effects, hover transforms

## Project Structure

```
robocell-website/
├── src/
│   ├── app/                    # Next.js App Router (Pages)
│   │   ├── globals.css        # Global styles & animations
│   │   ├── layout.tsx         # Root layout with fonts
│   │   ├── page.tsx          # Home page
│   │   ├── about/            # About page with timeline
│   │   ├── projects/         # Projects showcase
│   │   ├── events/           # Events & workshops
│   │   ├── team/             # Team member profiles
│   │   ├── join/             # Recruitment page
│   │   ├── blog/             # Technical articles
│   │   └── contact/          # Contact information
│   ├── components/
│   │   ├── layout/           # Header, Footer, Navigation
│   │   ├── sections/         # Page-specific sections
│   │   └── ui/              # Reusable components (Button, Card)
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/                    # Static assets
├── tailwind.config.ts        # Tailwind configuration
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies
└── README.md               # This file
```

## Page Overview

| Page         | Description                      | Key Features                                       |
| ------------ | -------------------------------- | -------------------------------------------------- |
| **Home**     | Landing page with hero section   | Animated stats, call-to-action, floating elements  |
| **About**    | Club information and history     | Mission/vision, interactive timeline, achievements |
| **Projects** | Showcase of robotics projects    | Filterable grid, search, project categories        |
| **Events**   | Past and upcoming events         | Timeline view, event details, registration         |
| **Team**     | Member profiles and roles        | Filterable by category, social links, photos       |
| **Join Us**  | Recruitment and application      | Benefits, testimonials, application form           |
| **Blog**     | Technical articles and tutorials | Search, categories, author profiles                |
| **Contact**  | Contact information and form     | Contact form, social media, location               |

## Development Guide

### Adding New Pages

1. Create a new folder in `src/app/` (e.g., `src/app/newpage/`)
2. Add a `page.tsx` file with your component
3. Update navigation in `src/components/layout/Header.tsx`
4. Add metadata for SEO

### Customizing Styles

- **Theme Colors**: Edit `tailwind.config.ts` to modify color palette
- **Global Styles**: Modify `src/app/globals.css` for site-wide styles
- **Components**: Use Tailwind utility classes for styling
- **Animations**: Add custom animations in `globals.css`

### Adding Components

1. Create in appropriate `src/components/` subfolder
2. Follow TypeScript conventions and interfaces
3. Use existing UI components (Button, Card) as templates
4. Implement responsive design with Tailwind

### Content Management

- **Static Content**: Edit component files directly
- **Dynamic Content**: Consider adding a CMS or database
- **Images**: Use Next.js Image component for optimization
- **SEO**: Update metadata in each page file

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Deploy automatically with each push
4. Get free SSL and global CDN

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start

# Or deploy to Netlify, Railway, etc.
```

## Customization Checklist

### Essential Updates

- [ ] Replace placeholder images with actual photos
- [ ] Update team member information and photos
- [ ] Add real project data and GitHub links
- [ ] Configure contact form backend (Formspree, Netlify Forms, etc.)
- [ ] Update social media links
- [ ] Add Google Analytics or tracking

### Optional Enhancements

- [ ] Add blog CMS (Contentful, Strapi, or markdown files)
- [ ] Implement user authentication for member portal
- [ ] Add project submission system
- [ ] Integrate with GitHub API for live project data
- [ ] Add newsletter signup functionality
- [ ] Implement search functionality
- [ ] Add dark/light mode toggle

## Contributing

We welcome contributions from the RoboCell community! Here's how you can help:

### Bug Reports

- Use GitHub Issues to report bugs
- Include screenshots and steps to reproduce
- Specify browser and device information

### Feature Requests

- Suggest new features via GitHub Issues
- Explain the use case and benefits
- Consider implementation complexity

### Code Contributions

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes with proper TypeScript types
4. Test thoroughly on different devices
5. Commit with clear messages
6. Push to your branch
7. Submit a pull request

### Content Updates

- Update team member information
- Add new projects or events
- Improve documentation
- Fix typos or improve copy

## Support & Help

### Documentation

- Check this README for setup instructions
- Review component files for implementation details
- Look at Tailwind CSS documentation for styling

### Getting Help

- **GitHub Issues**: For bugs and feature requests
- **Email**: Contact RoboCell team directly
- **Discord/Slack**: Join our community channels

### Common Issues

- **Node.js not found**: Install from [nodejs.org](https://nodejs.org/)
- **Port 3000 in use**: Use `npm run dev -- -p 3001` for different port
- **Build errors**: Run `npm install` to ensure all dependencies are installed

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icon library
- **Unsplash** for placeholder images
- **RoboCell Members** for inspiration and feedback

---

<div align="center">

**🤖 Built with ❤️ by RoboCell Team, NIT Durgapur**

_Engineering the Future of Automation_

</div>
