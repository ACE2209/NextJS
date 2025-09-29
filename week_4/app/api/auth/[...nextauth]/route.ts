//app\api\auth\[...nextauth]\route.ts
// import { handlers } from "@/auth";

// export const { GET, POST } = handlers;

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  secret: process.env.AUTH_SECRET,
  pages: {
    // tuỳ chọn: nếu muốn custom page đăng nhập
    signIn: "/",
  },
});

export const { GET, POST } = handlers;

