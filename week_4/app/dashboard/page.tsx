// app\dashboard\page.tsx
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  if (!session) {
    redirect("/"); // tự động về trang chủ nếu chưa đăng nhập
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Xin chào {session.user?.name}, đây là nội dung riêng tư.</p>
    </div>
  );
}
