// app/isr/page.tsx
// Trang này dùng Incremental Static Regeneration (ISR) trong App Router

// Thời gian (giây) cho phép Next tái tạo HTML mới ở background
export const revalidate = 10; // cứ 10 giây sẽ được regenerate khi có request mới

export default async function ISRPage() {
  // Ví dụ: dữ liệu từ API ngoài
  // const res = await fetch('https://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh', {
  //   next: { revalidate: 10 }, // tùy chọn, vì đã export revalidate
  // });
  // const data = await res.json();

  // Demo đơn giản: tạo thời gian hiện tại khi trang được build hoặc tái tạo
  const generatedAt = new Date().toISOString();


  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Incremental Static Regeneration (App Router)</h1>
      <p>Trang này được tạo lần cuối lúc: <strong>{generatedAt}</strong></p>
      <p className="mt-3 text-sm text-gray-600">
        `revalidate = 10` → Nếu có request sau 10 giây kể từ lần build/tái tạo trước,
        Next.js sẽ âm thầm tái tạo HTML mới ở background.
      </p>
    </main>
  );
}
