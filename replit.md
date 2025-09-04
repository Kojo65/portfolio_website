# Portfolio Application

## Overview

This is a modern full-stack portfolio application built with React, TypeScript, and Express.js. The application showcases a developer's work through multiple pages including home, about, projects, and contact sections. It features a dark theme design with responsive navigation and a contact form with email integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Middleware**: Custom logging middleware for API request tracking
- **Error Handling**: Centralized error handling middleware
- **Development**: Hot module replacement with Vite integration

### Data Storage Solutions
- **Primary Storage**: In-memory storage implementation for contact messages
- **Database Integration**: Drizzle ORM configured for PostgreSQL (schema defined but not actively used)
- **Session Management**: PostgreSQL session store support configured

### Authentication and Authorization
- **Current State**: No authentication implemented (portfolio is public-facing)
- **Session Support**: Connect-pg-simple configured for future session management needs

### External Dependencies
- **Database**: PostgreSQL via @neondatabase/serverless
- **ORM**: Drizzle ORM with Zod schema validation
- **Email Service**: Nodemailer configured for Gmail SMTP
- **UI Components**: Comprehensive Radix UI component collection
- **Icons**: Lucide React icon library
- **Date Handling**: date-fns for date formatting and manipulation
- **Styling**: Tailwind CSS with PostCSS processing
- **Development**: Replit-specific plugins for error handling and debugging

### Key Design Decisions

1. **Monorepo Structure**: Organized into client/, server/, and shared/ directories for clear separation of concerns
2. **Shared Schema**: Common TypeScript types and Zod schemas in shared/ directory for type safety across frontend and backend
3. **Component Architecture**: Atomic design approach with reusable UI components from Shadcn/ui
4. **Theme System**: CSS custom properties for consistent dark theme across the application
5. **Email Integration**: Contact form submissions trigger email notifications via Nodemailer
6. **Type Safety**: End-to-end TypeScript with strict configuration and Zod runtime validation
7. **Build Strategy**: Separate build processes for client (Vite) and server (esbuild) with optimized production outputs

The application prioritizes developer experience with hot reload, comprehensive TypeScript support, and a modern component-based architecture while maintaining simplicity for a portfolio showcase.