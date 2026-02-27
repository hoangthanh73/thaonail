/**
 * @file: src/app/layout.tsx
 * @description: Bố cục gốc (Root Layout). Giữ Navbar và Footer cố định trên tất cả các trang.
 * @author: Gemini
 */

import type { Metadata } from "next";
import './Main.scss'
import Header from '../components/Header';
import Footer from "../components/Footer";
import BootstrapClient from "../components/layout/BootstrapClient";

export const metadata: Metadata = {
  title: "Nail Spa Bar | Luxury Nails & Spa Services",
  description: "Dịch vụ làm đẹp đẳng cấp tại Thảo Nail & Spa. Chuyên Manicure, Pedicure và chăm sóc da.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">
        {/* Nạp JavaScript của Bootstrap để các component (Dropdown, Toggle) hoạt động */}
        <BootstrapClient />

        {/* Hiển thị Header dùng chung */}
        <Header />

        {/* Nội dung thay đổi của từng trang (Home, Services, Gallery...) */}
        <main>
          {children}
        </main>

        {/* Hiển thị Footer dùng chung */}
        <Footer />
      </body>
    </html>
  );
}