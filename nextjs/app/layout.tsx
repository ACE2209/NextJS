// Đây là Root Layout: bọc toàn bộ ứng dụng
import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Demo Layout',
  description: 'Thử tương tác layout và page',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="app-body">
        <header className="header">Đây là HEADER từ layout.tsx</header>
        <main className="main">{children}</main>
        <footer className="footer">© 2025 Footer chung</footer>
      </body>
    </html>
  );
}
