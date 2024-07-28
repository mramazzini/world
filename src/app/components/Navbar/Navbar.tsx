"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { destroySession, verifyToken } from "@/lib/utils/auth";
import { useState, useEffect } from "react";

const Navbar = () => {
  //Block navbar on certain pages
  const pathname = usePathname();
  const router = useRouter();
  //add pages to this array to hide the navbar
  const noNavbar = [""];
  const showNavbar = !noNavbar.includes(pathname);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const checkToken = async () => {
    const isAuthenticated = await verifyToken();
    setIsAuthenticated(isAuthenticated);
  };
  useEffect(() => {
    checkToken();
  }, [pathname, router]);

  if (!showNavbar) return null;
  return (
    <nav className={`navbar z-[1 bg-base-200 border-b border-primary`}>
      <Link href="/" className="p-4">
        Home
      </Link>
      <Link href="/class" className="p-4">
        Classes
      </Link>
      {isAuthenticated ? (
        <div
          className="ml-auto p-4 cursor-pointer"
          onClick={async () => {
            await destroySession();
            await checkToken();
            router.push(pathname);
          }}
        >
          Logout
        </div>
      ) : (
        <div className="ml-auto">
          <Link href="/login" className="p-4">
            Login
          </Link>
          <Link href="/register" className="p-4">
            Register
          </Link>
        </div>
      )}

      {/* <Link href="/subclass" className="p-4">
        Subclasses
      </Link> */}
      {/* <Link href="/item-generator" className="p-4">
        Item Generator
      </Link> */}
    </nav>
  );
};

export default Navbar;
