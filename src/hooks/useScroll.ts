/**
 * @file: src/hooks/useScroll.ts
 * @description: Hook xử lý trạng thái cuộn để làm Sticky Header.
 */
"use client";
import { useState, useEffect } from "react";

export const useScroll = (threshold = 80) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
};