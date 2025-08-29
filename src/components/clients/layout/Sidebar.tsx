// components/layout/Sidebar.tsx
import Link from 'next/link';
import Card, {
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/clients/ui/Card';
import Badge from '@/components/clients/ui/Badge';

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = '' }: SidebarProps) {
  const categories = [
    { name: 'Next.js Basics', count: 5, slug: 'nextjs-basics' },
    { name: 'Routing', count: 3, slug: 'routing' },
    { name: 'Components', count: 4, slug: 'components' },
    { name: 'Data Fetching', count: 2, slug: 'data-fetching' },
  ];

  const tags = [
    'nextjs',
    'react',
    'typescript',
    'routing',
    'components',
    'ssr',
    'ssg',
    'api',
    'deployment',
    'optimization',
  ];

  const recentPosts = [
    {
      title: 'Ngày 1: Bắt đầu với Next.js',
      slug: 'ngay-1-bat-dau-voi-nextjs',
      date: '2024-08-28',
    },
    {
      title: 'Ngày 2: Routing nâng cao',
      slug: 'ngay-2-routing-nang-cao',
      date: '2024-08-29',
    },
  ];

  return (
    <aside className={`space-y-6 ${className}`}>
      {/* About Widget */}
      <Card>
        <CardHeader>
          <CardTitle>Về Blog Này</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-sm">
            Ghi chép hành trình học Next.js từ cơ bản đến nâng cao. Mỗi ngày một
            bài học mới! 🚀
          </p>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Danh Mục</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm text-gray-700">{category.name}</span>
                <Badge variant="default" size="sm">
                  {category.count}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Bài Viết Gần Đây</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-2 rounded hover:bg-gray-50 transition-colors"
              >
                <h4 className="text-sm font-medium text-gray-900 mb-1">
                  {post.title}
                </h4>
                <time className="text-xs text-gray-500">{post.date}</time>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tags */}
      <Card>
        <CardHeader>
          <CardTitle>Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className="inline-block"
              >
                <Badge
                  variant="default"
                  size="sm"
                  className="hover:bg-blue-100 hover:text-blue-800 transition-colors"
                >
                  #{tag}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Progress Widget */}
      <Card>
        <CardHeader>
          <CardTitle>Tiến Độ Học Tập</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Hoàn thành</span>
                <span>50%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: '50%' }}
                ></div>
              </div>
            </div>
            <div className="text-xs text-gray-600">3/6 tuần đã hoàn thành</div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
