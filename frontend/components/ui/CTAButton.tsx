"use client";

import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function CTAButton({ href, children, className }: Props) {
  const router = useRouter();

  return (
    <button
      type="button"
      className={
        className ||
        "inline-flex items-center gap-2 rounded-xl px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-100 text-violet-900 font-semibold shadow-md shadow-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-colors text-base sm:text-lg mb-4"
      }
      onClick={() => router.push(href)}
    >
      {children}
    </button>
  );
}
