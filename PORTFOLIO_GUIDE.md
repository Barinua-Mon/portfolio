# Modern Portfolio Website

A beautifully designed, fully animated portfolio website built with Next.js, React, and Framer Motion.

## Features

✨ **Smooth Animations** - Elegant fade-ins, slide animations, and scroll transitions using Framer Motion
🌓 **Theme Toggle** - Light and dark mode support with next-themes
📱 **Responsive Design** - Mobile-first design that looks great on all devices
🎯 **Smooth Scroll Navigation** - Seamless navigation between sections
⚡ **Fast Performance** - Optimized with Next.js and Tailwind CSS
🎨 **Modern UI** - Built with shadcn/ui components and custom designs

## Sections

### Hero Section
- Eye-catching welcome with animated gradient text
- Call-to-action buttons with smooth scrolling
- Statistics showcase
- Animated background blurs

### Projects Showcase
- Grid layout with 6 featured projects
- Project cards with hover animations
- Technology badges
- Live demo and GitHub links

### About Section
- Personal introduction with prose styling
- Skill cards organized by category (Frontend, Backend, Tools)
- Experience timeline with visual indicators
- Professional journey overview

### Contact Section
- Contact form with validation
- Social media links with hover effects
- Direct contact options (Email, LinkedIn, GitHub, Twitter)
- Form submission feedback

### Navigation
- Sticky header with theme toggle
- Active section highlighting
- Smooth scroll navigation
- Responsive mobile menu support

## Customization

### Update Personal Information

1. **Hero Section** (`components/hero.tsx`)
   - Change the headline and description
   - Update statistics

2. **Projects** (`components/projects.tsx`)
   - Replace project data with your own projects
   - Update project links and descriptions

3. **About Section** (`components/about.tsx`)
   - Update personal bio
   - Modify skills and experience
   - Add or remove timeline entries

4. **Contact** (`components/contact.tsx`)
   - Update social media links
   - Modify email address

5. **Navigation** (`components/navigation.tsx`)
   - Change the logo/brand name

### Color Theme

The portfolio uses a modern color system with:
- Primary: Blue (#3B82F6)
- Secondary/Accent: Purple/Indigo
- Destructive: Red (for alerts)

To customize colors, edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: 217 91% 60%;      /* Change primary color */
  --accent: 260 80% 56%;        /* Change accent color */
  /* ... other colors ... */
}

.dark {
  /* Dark mode colors */
}
```

### Animations

All animations are configured in `lib/animation-variants.ts`. You can:
- Adjust animation duration
- Change easing functions
- Modify stagger timing
- Create new animation variants

## Technologies Used

- **Framework**: Next.js 15+
- **UI Library**: React 19+
- **Animation**: Framer Motion
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Theme**: next-themes
- **Forms**: react-hook-form
- **Icons**: lucide-react

## Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Build
pnpm build

# Start production server
pnpm start
```

## File Structure

```
components/
├── hero.tsx              # Hero/landing section
├── projects.tsx          # Projects showcase
├── about.tsx             # About me section
├── contact.tsx           # Contact form and links
├── navigation.tsx        # Header navigation
├── theme-toggle.tsx      # Dark/light mode toggle
├── footer.tsx            # Footer section
└── ui/                   # shadcn/ui components

lib/
├── animation-variants.ts # Framer Motion animation configs
└── utils.ts             # Utility functions

app/
├── page.tsx             # Main page
├── layout.tsx           # Root layout with providers
└── globals.css          # Global styles and CSS variables
```

## Deployment

### Deploy to Vercel

```bash
# Push to GitHub
git push origin main

# Connect repository to Vercel
# https://vercel.com/new
```

The portfolio is optimized for Vercel deployment with:
- Image optimization
- Edge function support
- Automatic deployments on push

## Performance Tips

1. **Optimize Images** - Replace project images with optimized versions
2. **Lazy Load** - Components use `whileInView` for animation on scroll
3. **Code Splitting** - Framer Motion is tree-shakeable
4. **Font Optimization** - Uses next/font for Google Fonts

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Feel free to use this portfolio template for your own projects!

## Support

For questions or improvements, feel free to:
- Open issues on GitHub
- Submit pull requests
- Check Next.js and Framer Motion documentation

---

**Happy coding!** 🚀
