"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`p-1.5 px-2 font-semibold ${pathname === href ? "bg-[#244D3F] text-white rounded-lg" : ""}`}
    >
      {children}
    </Link>
  );
};

export default MyLink;
