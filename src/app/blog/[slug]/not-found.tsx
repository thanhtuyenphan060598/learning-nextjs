// app/blog/[slug]/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-9xl">🔍</div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Không tìm thấy bài viết
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Bài viết bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
        </p>

        <div className="space-x-4">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Quay lại Blog
          </Link>

          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            🏠 Trang chủ
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Gợi ý: Kiểm tra lại URL hoặc tìm kiếm bài viết khác</p>
        </div>
      </div>
    </div>
  );
}
