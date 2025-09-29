import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Blog Zone</h1>
      <p className="mb-4">This is the Blog zone.</p>
      <div className="flex gap-2">
        <Link href="/blog">
          <Button>Blog Home</Button>
        </Link>
        <Link href="/shop">
          <Button>Go to Shop (via rewrite)</Button>
        </Link>
      </div>
    </main>
  );
}
