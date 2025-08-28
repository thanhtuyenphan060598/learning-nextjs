# System Patterns: Learning Next.js Blog

## Architecture Overview

This project follows Next.js App Router patterns with a focus on simplicity and learning-friendly structure.

```
src/app/
├── globals.css          # Global styles
├── layout.tsx           # Root layout with navigation
├── page.tsx            # Home page
├── about/page.tsx      # About page
└── blog/
    ├── page.tsx        # Blog listing page
    ├── _lib/
    │   └── blog-data.ts # Static blog data and utilities
    └── [slug]/
        ├── page.tsx    # Dynamic blog post page
        ├── loading.tsx # Loading UI
        └── not-found.tsx # 404 page
```

## Key Technical Decisions

### 1. Static Data Approach

- **Decision**: Use static data instead of database
- **Rationale**: Focus on Next.js learning, not database complexity
- **Implementation**: TypeScript interfaces with hardcoded data in `blog-data.ts`

### 2. App Router Usage

- **Decision**: Use Next.js 13+ App Router
- **Rationale**: Learn the latest Next.js patterns
- **Benefits**: Better performance, simpler data fetching, nested layouts

### 3. TypeScript Throughout

- **Decision**: Full TypeScript implementation
- **Rationale**: Better developer experience and type safety
- **Implementation**: Strict types for blog posts, components, and utilities

### 4. Tailwind CSS Styling

- **Decision**: Use Tailwind CSS v4
- **Rationale**: Rapid prototyping and modern CSS practices
- **Patterns**: Utility-first, responsive design, consistent spacing

## Component Patterns

### Blog Post Structure

```typescript
interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  readTime: number;
  status: 'completed' | 'upcoming';
}
```

### Route Patterns

- **Static Routes**: `/`, `/about`, `/blog`
- **Dynamic Routes**: `/blog/[slug]` for individual posts
- **Special Files**: `loading.tsx`, `not-found.tsx`, `error.tsx`

### Layout Hierarchy

- Root layout provides consistent navigation
- Individual pages focus on content
- Blog section uses nested routing patterns

## Data Flow

1. Static blog data defined in `_lib/blog-data.ts`
2. Utility functions for filtering and fetching posts
3. Dynamic routes use `getPostBySlug()` for individual posts
4. Client-side navigation between posts

## Performance Patterns

- Static generation for all blog posts
- Optimized images and fonts
- Minimal JavaScript bundle size
- Server-side rendering where appropriate
