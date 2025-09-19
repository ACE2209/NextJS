// app/ssr/page.tsx
// Trang này sẽ luôn render trên server mỗi request

export const dynamic = 'force-dynamic'; 
// hoặc bạn có thể dùng fetch(..., { cache: 'no-store' })
// để buộc SSR

export default async function SSRPage() {
  // Tạo biến thời gian hiện tại (trên server) để chứng minh mỗi request chạy mới.
  const serverTime = new Date().toISOString();

  // Random để chứng minh mỗi request khác nhau
  const random = Math.floor(Math.random() * 10000);

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Server-Side Rendered Page (App Router)</h1>
      <p>Server time: <strong>{serverTime}</strong></p>
      <p>Random number (generated per request): <strong>{random}</strong></p>
      <p className="mt-4 text-sm text-gray-600">
        Mỗi lần refresh, Next.js sẽ chạy lại hàm này trên **server**.
      </p>
    </main>
  );
}
