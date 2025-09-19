// app/page.tsx
import HomePage from "@/app/posts/output";
import ISRPage from "@/app/isr/page";
import SSRPage from "@/app/ssr/page";

export default async function App() {
  return (
    <>
      {/* <HomePage /> */}
      <SSRPage/>
      <ISRPage/>
    </>
  );
}
