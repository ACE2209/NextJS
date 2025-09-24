// app/page.tsx
import HomePage from "@/app/posts/output";
import ISRPage from "@/app/isr/page";
import SSRPage from "@/app/ssr/page";
import ProductPage from "@/app/api-demo/page";


export default async function App() {
  return (
    <>
      {/* <HomePage /> */}
      {/* <SSRPage/> */}
      {/* <ISRPage/> */}
      <ProductPage/>
    </>
  );
}
