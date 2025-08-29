// app/blog/page.tsx
import { getAllPosts, getCompletedPosts } from '@/lib/blog-data';
import PostCard from '@/components/clients/blog/PostCard';
import Card, {
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/clients/ui/Card';
import Badge from '@/components/clients/ui/Badge';

export default function Blog() {
  const allPosts = getAllPosts();
  const completedPosts = getCompletedPosts();
  const upcomingPosts = allPosts.filter((post) => post.status === 'upcoming');

  // Featured post (latest completed)
  const featuredPost = completedPosts[0];
  const otherPosts = allPosts.filter((post) => post.id !== featuredPost?.id);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          📝 Blog học tập Next.js
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Ghi chép hành trình học Next.js từ cơ bản đến nâng cao. Mỗi ngày một
          bài học mới!
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {allPosts.length}
            </div>
            <div className="text-gray-600 text-sm">Tổng bài viết</div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {completedPosts.length}
            </div>
            <div className="text-gray-600 text-sm">Đã hoàn thành</div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {upcomingPosts.length}
            </div>
            <div className="text-gray-600 text-sm">Sắp tới</div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {Math.round((completedPosts.length / allPosts.length) * 100)}%
            </div>
            <div className="text-gray-600 text-sm">Tiến độ</div>
          </CardContent>
        </Card>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="mr-2">⭐</span>
            Bài viết nổi bật
          </h2>
          <PostCard post={featuredPost} variant="featured" />
        </div>
      )}

      {/* All Posts */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="mr-2">📚</span>
          Tất cả bài viết
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {otherPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Learning Progress */}
      <Card>
        <CardHeader>
          <CardTitle>🎯 Lộ trình học tập</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Tiến độ tổng thể</span>
              <Badge variant="info">
                {Math.round((completedPosts.length / allPosts.length) * 100)}%
                hoàn thành
              </Badge>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500"
                style={{
                  width: `${(completedPosts.length / allPosts.length) * 100}%`,
                }}
              ></div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="font-semibold text-green-600">Tuần 1-2</div>
                <div className="text-gray-600">Cơ bản ✅</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-blue-600">Tuần 3-4</div>
                <div className="text-gray-600">Nâng cao 🔄</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-600">Tuần 5-6</div>
                <div className="text-gray-600">Dự án ⏳</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
