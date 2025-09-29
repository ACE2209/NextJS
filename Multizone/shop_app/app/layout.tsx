import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Zone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto p-6">{children}</div>
      </body>
    </html>
  );
}
