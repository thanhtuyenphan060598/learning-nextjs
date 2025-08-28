# Technical Context: Learning Next.js Blog

## Technology Stack

### Core Framework

- **Next.js 15.5.2**: Latest version with App Router
- **React 19.1.0**: Latest React with concurrent features
- **TypeScript 5.x**: Full type safety throughout the project

### Styling & UI

- **Tailwind CSS 4.x**: Latest version with modern features
- **PostCSS**: CSS processing pipeline
- **Custom CSS**: Minimal global styles in `globals.css`

### Development Tools

- **ESLint 9.x**: Code linting with Next.js config
- **Yarn**: Package management (preferred over npm)
- **Turbopack**: Build tool for faster development and builds

### Runtime Environment

- **Node.js**: Latest LTS version
- **Windows 10/11**: Development environment
- **Git**: Version control on `develop` branch

## Development Setup

### Installation

```bash
# Install dependencies
yarn install

# Development server
yarn dev

# Production build
yarn build

# Start production server
yarn start
```

### Key Commands

- `yarn dev`: Starts development server with Turbopack
- `yarn build`: Creates optimized production build with Turbopack
- `yarn lint`: Runs ESLint for code quality

## Project Configuration

### Next.js Config (`next.config.ts`)

- TypeScript configuration file
- Turbopack enabled for faster builds
- Default optimization settings

### TypeScript Config (`tsconfig.json`)

- Strict TypeScript settings
- Path mapping for clean imports
- Next.js specific compiler options

### ESLint Config (`eslint.config.mjs`)

- Next.js recommended rules
- Modern ES6+ configuration
- Code quality enforcement

## Development Constraints

### Windows-Specific Issues

- **Build Permission Error**: `.next/trace` file permission issues
- **Path Separators**: Backslash vs forward slash handling
- **File System**: Case sensitivity considerations

### Performance Considerations

- Turbopack for faster development builds
- Static generation for optimal performance
- Minimal bundle size with tree shaking

### Learning-Focused Constraints

- Keep dependencies minimal to focus on Next.js core concepts
- Avoid complex state management (no Redux/Zustand needed)
- Static data to avoid database complexity
- Simple deployment requirements

## Dependencies Management

- **Production Dependencies**: Only React, React-DOM, and Next.js
- **Development Dependencies**: TypeScript, ESLint, Tailwind CSS
- **No External APIs**: Self-contained learning environment
- **Version Pinning**: Using exact versions for consistency
