// app/blog/layout.tsx
import Sidebar from '@/components/clients/layout/Sidebar';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <main className="lg:col-span-3">{children}</main>

          {/* Sidebar */}
          <Sidebar className="lg:col-span-1" />
        </div>
      </div>
    </div>
  );
}
