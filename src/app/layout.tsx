// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/clients/layout/Header';
import './globals.css';

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
        <Header />
        {children}

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>
              &copy; 2024 My Next.js Learning Journey. Made with ❤️ and Next.js
            </p>
            <div className="mt-4 space-x-4 text-sm">
              <span>🚀 Powered by Next.js 14</span>
              <span>•</span>
              <span>💎 Styled with Tailwind CSS</span>
              <span>•</span>
              <span>⚡ TypeScript Ready</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
