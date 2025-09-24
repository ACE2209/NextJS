// app/posts/output.tsx
// component trang danh sách bài (được export để tái dùng).
import posts from "../../data/posts"; // import local (hoặc fetch API)
import PostCard from "@/components/ui/PostCard";

// Thiết lập ISR: trang này có thể được tái sinh (revalidate) sau 10 giây.
// (Dành cho App Router; nếu bạn muốn SSG tĩnh hoàn toàn thì bỏ)
export const revalidate = 10;

export default async function HomePage() {
  // có thể fetch từ API ngoài:
  // const res = await fetch('https://example.com/api/posts', { next: { revalidate: 10 }});
  // const posts = await res.json();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Danh sách bài viết (App Router)
      </h1>
      {/* Danh sách thẻ bài; space-y-4 để các thẻ có khoảng cách dọc */}
      <div className="space-y-4">
        {/* Duyệt mảng posts và render một PostCard cho mỗi phần tử */}
        {posts.map((p) => (
          // Tạo PostCard; key = p.id để React track; truyền title và excerpt.
          // Lưu ý: hiện tại không truyền `id` nên PostCard không có đường link đến chi tiết.
          <PostCard
            key={p.id}
            title={p.title}
            excerpt={p.body.slice(0, 80) + "..."}
          />
        ))}
      </div>
    </main>
  );
}
