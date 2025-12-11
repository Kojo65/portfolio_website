# Portfolio Site

A responsive portfolio website built with React, TypeScript, and Vite.

## Features

- Fully responsive design that works on all devices (phones, tablets, laptops, desktops, and smart watches)
- Modern UI with Tailwind CSS and Radix UI components
- Fast performance with Vite
- Contact form with validation
- Project showcase with live demos

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Radix UI
- **Build Tool**: Vite
- **Deployment**: Vercel

## Getting Started

### Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production

```bash
npm run build
```

### Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the build settings and deploy your site

The Vercel configuration is set up in `vercel.json`:
- Uses the `npm run build` command for building
- Serves static files from the `dist` directory
- Handles API routes through the serverless functions

## Responsive Design

The site is fully responsive and optimized for:
- Smart watches and small screens (using custom xs breakpoint)
- Mobile phones
- Tablets
- Laptops
- Desktop monitors

Media queries are implemented with Tailwind CSS breakpoints:
- `xs`: 475px (for smart watches and very small screens)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Project Structure

```
.
├── client/           # Frontend source code
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── lib/          # Utility functions
│   │   └── assets/       # Static assets
│   └── index.html        # Main HTML file
├── server/           # Backend source code
├── shared/           # Shared types and utilities
├── dist/             # Production build output
└── vercel.json       # Vercel deployment configuration
```

## Customization

To customize the portfolio for your own use:

1. Update the content in the `client/src/pages/` directory
2. Replace images in the `attached_assets/` folder
3. Update contact information in `client/src/pages/contact.tsx`
4. Modify projects in `client/src/pages/projects.tsx`
5. Update social media links in `client/src/components/footer.tsx`

## License

MIT