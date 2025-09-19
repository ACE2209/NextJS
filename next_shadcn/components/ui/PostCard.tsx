export default function PostCard({
  title,
  excerpt,
}: {
  title: string;
  excerpt: string;
}) {
  return (
    <article className="p-4 border rounded-lg bg-white hover:shadow">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{excerpt}</p>
    </article>
  );
}
