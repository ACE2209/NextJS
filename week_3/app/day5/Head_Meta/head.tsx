import Head from 'next/head';

export default function SEOHead() {
  return (
    <Head>
      <title>Trang Sản Phẩm - MyShop</title>
      <meta name="description" content="Mua hàng chất lượng, giao nhanh tại MyShop." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph (chia sẻ mạng xã hội) */}
      <meta property="og:title" content="Trang Sản Phẩm - MyShop" />
      <meta property="og:description" content="Mua hàng chất lượng, giao nhanh tại MyShop." />
      <meta property="og:image" content="https://myshop.com/og-image.jpg" />
      <meta property="og:url" content="https://myshop.com/product" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
