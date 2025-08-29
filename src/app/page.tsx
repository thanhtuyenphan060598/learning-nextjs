// app/page.tsx
import Link from 'next/link';
import Card, {
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/clients/ui/Card';
import Button from '@/components/clients/ui/Button';
import Badge from '@/components/clients/ui/Badge';
import PostCard from '@/components/clients/blog/PostCard';
import { getCompletedPosts } from '@/lib/blog-data';

export default function Home() {
  const recentPosts = getCompletedPosts().slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="info" size="lg" className="mb-6">
              🚀 Next.js Learning Journey
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Chào mừng đến với
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}
                Next.js!
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Hành trình học Next.js từ cơ bản đến nâng cao. Mỗi ngày một bài
              học mới, mỗi bước một tiến bộ vững chắc.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog">
                <Button size="lg" className="w-full sm:w-auto">
                  📚 Xem Blog
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  🎯 Về hành trình
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tại sao chọn Next.js?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Next.js cung cấp những tính năng mạnh mẽ giúp xây dựng ứng dụng
              web hiện đại
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card hover className="text-center">
              <CardContent className="p-6">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Siêu nhanh</h3>
                <p className="text-gray-600">
                  Server-side rendering và static generation cho hiệu suất tối
                  ưu
                </p>
              </CardContent>
            </Card>

            <Card hover className="text-center">
              <CardContent className="p-6">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Dễ sử dụng</h3>
                <p className="text-gray-600">
                  File-based routing và zero-config setup
                </p>
              </CardContent>
            </Card>

            <Card hover className="text-center">
              <CardContent className="p-6">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold mb-3">Mạnh mẽ</h3>
                <p className="text-gray-600">
                  Built-in optimization và production-ready
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              📝 Bài viết gần đây
            </h2>
            <p className="text-gray-600">
              Những bài học mới nhất trong hành trình Next.js
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/blog">
              <Button variant="outline" size="lg">
                Xem tất cả bài viết →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">
                  🎯 Hành trình học tập
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">
                      Tôi cam kết học Next.js trong 6 tuần tới!
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full"
                        style={{ width: '50%' }}
                      ></div>
                    </div>
                    <Badge variant="success" size="lg">
                      50% hoàn thành
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-green-500 mr-3">✅</span>
                        <span className="font-medium">
                          Ngày 1: Tạo project đầu tiên
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-green-500 mr-3">✅</span>
                        <span className="font-medium">
                          Ngày 2: Routing nâng cao
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-blue-500 mr-3">🔄</span>
                        <span className="font-medium">
                          Ngày 3: Components & Layouts
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-gray-400 mr-3">⏳</span>
                        <span className="font-medium text-gray-600">
                          Ngày 4: Data Fetching
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="text-center">
                <Link href="/about" className="w-full">
                  <Button variant="outline" className="w-full">
                    Tìm hiểu thêm về lộ trình →
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
