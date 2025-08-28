export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Ngày 1: Bắt đầu với Next.js',
      excerpt:
        'Hôm nay tôi đã tạo được project Next.js đầu tiên và học về cấu trúc cơ bản.',
      date: '2024-08-28',
      status: 'completed',
    },
    {
      id: 2,
      title: 'Ngày 2: Tìm hiểu về Routing',
      excerpt: 'Sẽ học về file-based routing và dynamic routes trong Next.js.',
      date: '2024-08-29',
      status: 'upcoming',
    },
    {
      id: 3,
      title: 'Ngày 3: Components và Layouts',
      excerpt: 'Xây dựng components tái sử dụng và layout system.',
      date: '2024-08-30',
      status: 'upcoming',
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-4xl font-bold text-center mb-12">
          📝 Blog học tập Next.js
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      post.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {post.status === 'completed'
                      ? '✅ Hoàn thành'
                      : '⏳ Sắp tới'}
                  </span>
                  <time className="text-gray-500 text-sm">{post.date}</time>
                </div>
                <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>

                {post.status === 'completed' && (
                  <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                    Đọc thêm →
                  </button>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
