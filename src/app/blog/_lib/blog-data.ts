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
  - Chọn TypeScript và Tailwind CSS
  
  ### 2. Hiểu cấu trúc project
  - **app/**: Thư mục chứa các route (App Router)
  - **public/**: Tài nguyên tĩnh
  - **components/**: Components tái sử dụng
  
  ### 3. Tạo các trang cơ bản
  - Trang chủ với design hiện đại
  - Trang giới thiệu
  - Layout với navigation
  
  ## Cảm nhận
  
  Next.js thực sự dễ sử dụng hơn tôi nghĩ! File-based routing rất trực quan và setup ban đầu rất nhanh.
  
  ## Kế hoạch ngày mai
  
  - Học về Dynamic Routing
  - Tạo system blog hoàn chỉnh
  - Implement loading states
    `,
    date: '2024-08-28',
    author: 'Học viên Next.js',
    tags: ['nextjs', 'react', 'web-development'],
    readTime: 5,
    status: 'completed',
  },
  {
    id: 2,
    slug: 'ngay-2-routing-nang-cao',
    title: 'Ngày 2: Routing nâng cao',
    excerpt:
      'Học về dynamic routes, loading states và error handling trong Next.js.',
    content: `
  # Dynamic Routing trong Next.js
  
  Hôm nay tôi đã học về hệ thống routing mạnh mẽ của Next.js.
  
  ## Dynamic Routes
  
  Sử dụng \`[slug]\` để tạo dynamic routes:
  - \`app/blog/[slug]/page.tsx\` → \`/blog/any-slug\`
  - \`app/shop/[...slug]/page.tsx\` → \`/shop/category/subcategory/product\`
  
  ## Loading States
  
  Next.js cho phép tạo loading UI dễ dàng với file \`loading.tsx\`.
  
  ## Error Handling
  
  Xử lý lỗi với \`error.tsx\` và \`not-found.tsx\`.
  
  Thật tuyệt vời!
    `,
    date: '2024-08-29',
    author: 'Học viên Next.js',
    tags: ['nextjs', 'routing', 'loading'],
    readTime: 7,
    status: 'completed',
  },
  {
    id: 3,
    slug: 'ngay-3-components-va-layouts',
    title: 'Ngày 3: Components và Layouts',
    excerpt: 'Xây dựng components tái sử dụng và layout system trong Next.js.',
    content: `
  # Components và Layouts
  
  Ngày thứ 3 sẽ tập trung vào việc xây dựng components và layouts.
  
  ## Kế hoạch học
  
  - Tạo reusable components
  - Nested layouts
  - Server vs Client components
  - Props và TypeScript
  
  Hãy cùng chờ đón!
    `,
    date: '2024-08-30',
    author: 'Học viên Next.js',
    tags: ['nextjs', 'components', 'layouts'],
    readTime: 6,
    status: 'upcoming',
  },
];

// Utility functions
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getCompletedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.status === 'completed');
}
