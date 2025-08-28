// app/blog/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';
import { getAllPosts } from './_lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog - Hành trình học Next.js',
  description: 'Theo dõi hành trình học Next.js từ cơ bản đến nâng cao',
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📝 Blog học tập Next.js
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Theo dõi hành trình học Next.js của tôi từ những ngày đầu tiên. Mỗi
            bài viết ghi lại những kiến thức và kinh nghiệm thực tế.
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {posts.filter((p) => p.status === 'completed').length}
              </div>
              <div className="text-gray-600">Bài viết hoàn thành</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {posts.filter((p) => p.status === 'upcoming').length}
              </div>
              <div className="text-gray-600">Bài viết sắp tới</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {posts.reduce((total, post) => total + post.readTime, 0)}
              </div>
              <div className="text-gray-600">Phút đọc tổng</div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        post.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {post.status === 'completed'
                        ? '✅ Hoàn thành'
                        : '⏳ Sắp tới'}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>📅 {post.date}</span>
                      <span>⏱️ {post.readTime} phút</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {post.status === 'completed' ? (
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    ) : (
                      post.title
                    )}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <span>👤 {post.author}</span>
                    </div>

                    {post.status === 'completed' && (
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        Đọc bài viết →
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Theo dõi hành trình học tập
              </h2>
              <p className="text-gray-600 mb-6">
                Mỗi ngày tôi sẽ cập nhật những kiến thức mới học được về
                Next.js. Hãy quay lại thường xuyên để không bỏ lỡ!
              </p>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                🏠 Về trang chủ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
