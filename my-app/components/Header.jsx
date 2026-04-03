"use client";

import Link from "next/link";
import Image from "next/image";
import { Bell, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `flex items-center gap-1 ${
      pathname === path ? "text-blue-600" : "text-gray-600"
    }`;

  return (
    <nav className="flex items-center justify-between px-10 py-4 fixed w-full z-50 bg-white/70 backdrop-blur-md">
      
      {/* Left side */}
      <div className="flex items-center gap-6">

        {/* Logo */}
        <Image
          src="/images/shef.png"
          alt="logo"
          width={40}
          height={40}
          className="filter brightness-0 saturate-100 invert-[23%] sepia-[95%] saturate-[2000%] hue-rotate-[210deg]"
        />

        {/* Links */}
        <div className="flex items-center gap-6 font-medium">

          <Link href="/" className={linkClass("/")}>
            Explore
            <ChevronDown className="w-4 h-4" />
          </Link>

          <Link href="/courses" className={linkClass("/courses")}>
            Courses
            <ChevronDown className="w-4 h-4" />
          </Link>

          <Link href="/contact" className={linkClass("/contact")}>
            Contact
            <ChevronDown className="w-4 h-4" />
          </Link>

          <Link href="/about" className={linkClass("/about")}>
            About us
            <ChevronDown className="w-4 h-4" />
          </Link>

        </div>
      </div>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-6">
        
        <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />

        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-white font-bold">
          R
        </div>

      </div>
    </nav>
  );
}