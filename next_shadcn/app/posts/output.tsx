import posts from '../../data/posts'; // import local (hoặc fetch API)
import PostCard from '@/components/ui/PostCard';

export const revalidate = 10; // ← cho ISR (bỏ nếu chỉ SSG)

export default async function HomePage() {
  // có thể fetch từ API ngoài:
  // const res = await fetch('https://example.com/api/posts', { next: { revalidate: 10 }});
  // const posts = await res.json();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Danh sách bài viết (App Router)</h1>
      <div className="space-y-4">
        {posts.map((p) => (
          <PostCard key={p.id} title={p.title} excerpt={p.body.slice(0, 80) + '...'} />
        ))}
      </div>
    </main>
  );
}
