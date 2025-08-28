// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Next.js Learning Journey',
  description: 'Học Next.js từ cơ bản đến nâng cao',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-800">
                  🚀 My Next.js App
                </h1>
              </div>
              <div className="flex space-x-6">
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Trang chủ
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Giới thiệu
                </Link>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-950 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>
              &copy; 2024 My Next.js Learning Journey. Made with ❤️ and Next.js
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
