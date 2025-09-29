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
