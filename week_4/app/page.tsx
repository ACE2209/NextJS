// "use client";

// import { login } from "@/lib/actions/auth";
// import { signIn } from "next-auth/react";

// export default function Home() {
//   return (
//     <div>
//       <p>You are not signed in</p>
//       <button onClick={() => login()}>sign in with github</button>
//     </div>
//   );
// }

"use client";

import { useSession } from "next-auth/react";
import { login, logout } from "@/lib/actions/auth";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Đang kiểm tra đăng nhập...</p>;

  if (!session) {
    return (
      <div className="p-6">
        <p>Bạn chưa đăng nhập.</p>
        <button onClick={login} className="border px-4 py-2 mt-2">
          Đăng nhập với GitHub
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <p>Xin chào {session.user?.name}</p>
      <p>Email: {session.user?.email}</p>
      <Link href="/dashboard" className="underline text-blue-600">
        Vào Dashboard
      </Link>
      <button onClick={logout} className="border px-4 py-2 mt-2 block">
        Đăng xuất
      </button>
    </div>
  );
}
