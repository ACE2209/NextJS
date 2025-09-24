// app/page.tsx
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"

// Dynamic import một component nặng giả lập (không dùng chart)
const HeavyCard = dynamic(() => import("@/components/HeavyCard"), {
  ssr: false,
  loading: () => <p>Loading component…</p>,
})

export default function Home() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Performance Demo</h1>
      <Button onClick={() => alert("Hello!")}>Click me</Button>
      {/* HeavyCard sẽ chỉ được load sau khi client render */}
      <HeavyCard />
    </main>
  )
}
