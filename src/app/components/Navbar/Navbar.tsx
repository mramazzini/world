"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, use } from "react";

const Navbar = () => {
  //Block navbar on certain pages
  const pathname = usePathname();
  const noNavbar = ["/class/create"];
  const showNavbar = !noNavbar.includes(pathname);
  if (!showNavbar) return null;
  return (
    <nav className={`navbar z-[1 bg-base-200 border-b border-primary`}>
      <Link href="/" className="p-4">
        Home
      </Link>
      <Link href="/class" className="p-4">
        Classes
      </Link>
      <Link href="/subclass" className="p-4">
        Subclasses
      </Link>
    </nav>
  );
};

export default Navbar;
