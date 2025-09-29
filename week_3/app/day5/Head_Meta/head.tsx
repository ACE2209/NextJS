import Head from 'next/head';

export default function SEOHead() {
  return (
    <Head>
      <title>Tiêu đề trang</title>
      <meta name="description" content="tóm tắt ngắn về trang web" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph (chia sẻ mạng xã hội) */}
      <meta property="og:title" content="Trang tiêu đề" />
      <meta property="og:description" content="tóm tắt." />
      <meta property="og:image" content="https://myshop.com/og-image.jpg" />
      <meta property="og:url" content="https://myshop.com/product" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
