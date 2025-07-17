# Muhammad Uzair Portfolio Information

## Summary

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. The site showcases Uzair Shaikh's professional background, projects, and skills with interactive elements and an AI assistant integration.

## Structure

- **src/**: Core application code (components, pages, styles)
- **public/**: Static assets (images, icons)
- **src/components/**: Reusable UI components
- **src/pages/**: Next.js page components and API routes
- **src/data/**: Content data (projects, skills, experience)
- **src/styles/**: Global styles and Tailwind configuration
- **src/lib/**: Utility libraries and integrations

## Language & Runtime

**Language**: TypeScript/JavaScript
**Version**: Node.js (requires v18+)
**Framework**: Next.js
**Package Manager**: npm/yarn

## Dependencies

**Main Dependencies**:

- Next.js (React framework)
- React (UI library)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Lucide React (icons)
- Google Generative AI (@google/generative-ai)

**Development Dependencies**:

- TypeScript
- ESLint
- Prettier
- Husky (git hooks)

## Build & Installation

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## Docker

**Dockerfile**: Dockerfile at root
**Configuration**: Multi-stage build process for optimized production image

```bash
# Build Docker image
docker build -t uzair-portfolio .

# Run container
docker run -p 3000:3000 uzair-portfolio
```

## Features

- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **AI Assistant**: Integration with Google's Gemini AI model
- **Contact Form**: Email functionality using Nodemailer
- **Dark/Light Mode**: Theme switching capability
- **SEO Optimized**: Dynamic metadata and sitemap generation

## AI Integration

The portfolio includes an AI assistant feature that allows visitors to ask questions about Uzair's professional background. The implementation uses:

- Google's Gemini Pro model via the Generative AI SDK
- Conversation history management for contextual responses
- System prompts to guide the AI's responses
- Real-time chat interface with typing indicators

## Key Components

- **Assistant.tsx**: Chat interface component
- **gemini.ts**: Google Generative AI integration
- **chat.ts**: API route handler for AI requests
- **landing-hero.tsx**: Main landing page hero section
- **projects/**: Project showcase components
- **experience/**: Work experience timeline
