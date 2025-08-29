// components/blog/PostCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import Card, { CardContent } from '@/components/clients/ui/Card';
import Badge from '@/components/clients/ui/Badge';
import Button from '@/components/clients/ui/Button';
import { BlogPost } from '@/lib/blog-data';

interface PostCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'compact';
}

export default function PostCard({ post, variant = 'default' }: PostCardProps) {
  if (variant === 'featured') {
    return <FeaturedPostCard post={post} />;
  }

  if (variant === 'compact') {
    return <CompactPostCard post={post} />;
  }

  return <DefaultPostCard post={post} />;
}

function DefaultPostCard({ post }: { post: BlogPost }) {
  return (
    <Card hover className="h-full">
      <CardContent>
        {/* Status and Meta */}
        <div className="flex items-center justify-between mb-4">
          <Badge
            variant={post.status === 'completed' ? 'success' : 'warning'}
            size="sm"
          >
            {post.status === 'completed' ? '✅ Hoàn thành' : '⏳ Sắp tới'}
          </Badge>
          <div className="flex items-center space-x-3 text-gray-500 text-sm">
            <span>📅 {post.date}</span>
            <span>⏱️ {post.readTime} phút</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="default" size="sm">
              #{tag}
            </Badge>
          ))}
          {post.tags.length > 3 && (
            <Badge variant="default" size="sm">
              +{post.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Action */}
        {post.status === 'completed' && (
          <Link href={`/blog/${post.slug}`}>
            <Button variant="outline" size="sm" className="w-full">
              Đọc thêm →
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}

function FeaturedPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="overflow-hidden">
      <div className="md:flex">
        {/* Image placeholder */}
        <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <div className="text-white text-4xl">📚</div>
        </div>

        <div className="md:w-2/3 p-6">
          <Badge variant="info" size="sm" className="mb-3">
            ⭐ Bài viết nổi bật
          </Badge>

          <h2 className="text-2xl font-bold mb-3">
            <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
              {post.title}
            </Link>
          </h2>

          <p className="text-gray-600 mb-4">{post.excerpt}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>📅 {post.date}</span>
              <span>⏱️ {post.readTime} phút</span>
            </div>

            <Link href={`/blog/${post.slug}`}>
              <Button variant="primary" size="sm">
                Đọc ngay
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}

function CompactPostCard({ post }: { post: BlogPost }) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <span className="text-blue-600 text-lg">📄</span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-gray-900 truncate">
          <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
            {post.title}
          </Link>
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          {post.date} • {post.readTime} phút đọc
        </p>
      </div>

      <Badge
        variant={post.status === 'completed' ? 'success' : 'warning'}
        size="sm"
      >
        {post.status === 'completed' ? '✅' : '⏳'}
      </Badge>
    </div>
  );
}
