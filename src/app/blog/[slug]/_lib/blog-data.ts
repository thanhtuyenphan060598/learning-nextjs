// lib/blog-data.ts
export interface BlogPost {
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

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'ngay-1-bat-dau-voi-nextjs',
    title: 'Ngày 1: Bắt đầu với Next.js',
    excerpt:
      'Hôm nay tôi đã tạo được project Next.js đầu tiên và học về cấu trúc cơ bản.',
    content: `
  # Ngày đầu tiên với Next.js
  
  Hôm nay là ngày đầu tiên tôi bắt đầu hành trình học Next.js. Đây là những gì tôi đã học được:
  
  ## Những gì đã hoàn thành
  
  ### 1. Cài đặt môi trường
  - Cài đặt Node.js phiên bản mới nhất
  - Tạo project với \`create-next-app\`
  - Cấu hình TypeScript và Tailwind CSS
  
  ### 2. Hiểu cấu trúc project
  - **app/** directory: Nơi chứa các trang và components
  - **public/** directory: Tài nguyên tĩnh
  - **next.config.js**: Cấu hình Next.js
  
  ### 3. Tạo các trang cơ bản
  - Trang chủ với design đẹp mắt
  - Trang giới thiệu
  - Trang blog placeholder
  
  ## Cảm nhận
  
  Next.js thực sự ấn tượng với:
  - **Zero-config setup**: Không cần cấu hình phức tạp
  - **File-based routing**: Routing tự động dựa trên cấu trúc thư mục
  - **Built-in optimization**: Tối ưu hóa tự động
  
  ## Kế hoạch ngày mai
  
  Ngày mai tôi sẽ học về Dynamic Routing và cách tạo trang chi tiết cho blog posts.
  
  ---
  
  *Hành trình 1000 dặm bắt đầu từ bước chân đầu tiên! 🚀*
    `,
    date: '2024-08-28',
    author: 'Học viên Next.js',
    tags: ['next.js', 'react', 'web-development', 'learning'],
    readTime: 5,
    status: 'completed',
  },
  {
    id: 2,
    slug: 'ngay-2-tim-hieu-routing',
    title: 'Ngày 2: Tìm hiểu về Routing',
    excerpt: 'Học về file-based routing và dynamic routes trong Next.js.',
    content: `
  # Ngày 2: Khám phá Routing System
  
  Hôm nay tôi đã đi sâu vào hệ thống routing của Next.js - một trong những tính năng mạnh mẽ nhất.
  
  ## Dynamic Routes
  
  Dynamic routes cho phép tạo các trang với URL động:
  - \`[slug]\` - Single dynamic segment
  - \`[...slug]\` - Catch-all routes
  - \`[[...slug]]\` - Optional catch-all routes
  
  ## Loading States và Error Handling
  
  Next.js cung cấp các file đặc biệt:
  - \`loading.tsx\` - UI hiển thị khi đang tải
  - \`error.tsx\` - UI hiển thị khi có lỗi
  - \`not-found.tsx\` - UI hiển thị khi không tìm thấy
  
  ## Navigation APIs
  
  - \`Link\` component cho client-side navigation
  - \`useRouter\` hook cho programmatic navigation
  - \`redirect\` function cho server-side redirects
  
  ---
  
  *Routing trong Next.js thật sự mạnh mẽ và trực quan! 🎯*
    `,
    date: '2024-08-29',
    author: 'Học viên Next.js',
    tags: ['next.js', 'routing', 'navigation', 'dynamic-routes'],
    readTime: 7,
    status: 'completed',
  },
  {
    id: 3,
    slug: 'ngay-3-components-va-layouts',
    title: 'Ngày 3: Components và Layouts',
    excerpt: 'Xây dựng components tái sử dụng và layout system.',
    content: `
  # Ngày 3: Components và Layout System
  
  Hôm nay sẽ tập trung vào việc xây dựng components tái sử dụng và hiểu về layout system trong Next.js.
  
  ## Nội dung sẽ học
  
  ### 1. React Components trong Next.js
  - Server Components vs Client Components
  - Props và TypeScript interfaces
  - Component composition patterns
  
  ### 2. Layout System
  - Root layout
  - Nested layouts
  - Route groups
  - Template vs Layout
  
  ### 3. Styling
  - Tailwind CSS best practices
  - CSS Modules
  - Global styles
  
  ---
  
  *Coming soon... 🚧*
    `,
    date: '2024-08-30',
    author: 'Học viên Next.js',
    tags: ['next.js', 'components', 'layouts', 'styling'],
    readTime: 8,
    status: 'upcoming',
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(
  currentSlug: string,
  limit: number = 2
): BlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== currentSlug && post.status === 'completed')
    .slice(0, limit);
}
