export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🚀 Chào mừng đến với Next.js!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Đây là trang web Next.js đầu tiên của tôi. Tôi đang học cách xây
            dựng ứng dụng web hiện đại với React framework mạnh mẽ này.
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Siêu nhanh</h3>
            <p className="text-gray-600">
              Server-side rendering và static generation cho hiệu suất tối ưu
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Dễ sử dụng</h3>
            <p className="text-gray-600">
              File-based routing và zero-config setup
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold mb-2">Mạnh mẽ</h3>
            <p className="text-gray-600">
              Built-in optimization và production-ready
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Hành trình học tập</h2>
            <p className="text-gray-600 mb-6">
              Tôi cam kết học Next.js trong 6 tuần tới!
            </p>
            <div className="space-y-2 text-left">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                <span>Ngày 1: Tạo project đầu tiên</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">⏳</span>
                <span>Ngày 2: Tìm hiểu routing</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">⏳</span>
                <span>Ngày 3: Components và layouts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
