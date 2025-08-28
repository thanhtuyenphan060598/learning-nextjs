export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl text-gray-950 font-bold text-center mb-8 ">
            Về hành trình học Next.js của tôi
          </h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="max-w-none">
              <h2 className="text-2xl font-semibold mb-4">
                Tại sao tôi chọn Next.js?
              </h2>
              <p className="text-gray-600 mb-6">
                Next.js là một framework React mạnh mẽ giúp tôi xây dựng ứng
                dụng web hiện đại với hiệu suất cao. Với các tính năng như
                Server-Side Rendering, Static Site Generation và File-based
                Routing, Next.js giúp tôi tập trung vào việc phát triển sản phẩm
                thay vì cấu hình phức tạp.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Mục tiêu của tôi</h2>
              <ul className="list-disc pl-5 text-gray-600 mb-6">
                <li>Thành thạo các khái niệm cơ bản của Next.js</li>
                <li>Hiểu rõ về routing và data fetching</li>
                <li>Xây dựng được ứng dụng thực tế</li>
                <li>Tối ưu hóa hiệu suất và SEO</li>
                <li>Deploy ứng dụng lên production</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Lộ trình 6 tuần</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-blue-800">
                      Tuần 1-2: Cơ bản
                    </h3>
                    <ul className="text-sm text-blue-600 mt-2">
                      <li>• Setup và cấu trúc project</li>
                      <li>• Pages và Components</li>
                      <li>• Routing cơ bản</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800">
                      Tuần 3-4: Nâng cao
                    </h3>
                    <ul className="text-sm text-blue-600 mt-2">
                      <li>• Data Fetching</li>
                      <li>• API Routes</li>
                      <li>• Optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800">
                      Tuần 5-6: Thực tế
                    </h3>
                    <ul className="text-sm text-blue-600 mt-2">
                      <li>• Dự án hoàn chỉnh</li>
                      <li>• Testing</li>
                      <li>• Deployment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
