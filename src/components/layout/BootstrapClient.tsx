/**
 * @file: src/components/layout/BootstrapClient.tsx
 * @description: Component nạp JavaScript của Bootstrap vào trình duyệt.
 * @author: Gemini
 */

"use client"; // Bắt buộc phải có dòng này vì JS chỉ chạy ở trình duyệt

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    /**
     * Chúng ta dùng require thay vì import ở đầu file để đảm bảo 
     * code này chỉ được thực thi sau khi trang web đã tải xong 
     * phía người dùng (Client-side).
     */
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // Component này không hiển thị gì lên giao diện nên trả về null
  return null;
}