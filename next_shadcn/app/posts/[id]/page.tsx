import posts from '@/data/posts';

export const revalidate = 10; // tùy ý

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === params.id);
  if (!post) return <p>Không tìm thấy bài viết</p>;

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.body}</p>
    </main>
  );
}
