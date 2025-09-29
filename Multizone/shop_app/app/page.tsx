import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Shop Zone</h1>
      <p className="mb-4">This is the Shop zone.</p>
      <div className="flex gap-2">
        <Link href="/shop">
          <Button>Shop Home</Button>
        </Link>
        <Link href="/blog">
          <Button>Go to Blog (via rewrite)</Button>
        </Link>
      </div>
    </main>
  );
}
