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
      <Link
        href="/"
        className={`p-4 btn btn-${pathname === "/" ? "primary" : "ghost"}`}
      >
        Home
      </Link>
      <Link
        href="/class"
        className={`p-4 btn btn-${pathname === "/class" ? "primary" : "ghost"}`}
      >
        Classes
      </Link>
      <Link
        href="/subclass"
        className={`p-4 btn btn-${
          pathname === "/subclass" ? "primary" : "ghost"
        }`}
      >
        Subclasses
      </Link>
      <Link
        href="/spell"
        className={`p-4 btn btn-${
          pathname === "/spells" ? "primary" : "ghost"
        }`}
      >
        Spells
      </Link>
      <Link
        href="/monster"
        className={`p-4 btn btn-${
          pathname === "/monster" ? "primary" : "ghost"
        }`}
      >
        Monsters
      </Link>
      <div className="dropdown ">
        <div tabIndex={0} role="button" className="btn m-1 btn-ghost">
          Theme
          <svg
            width="12px"
            height="12px"
            className="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content bg-base-300 z-[1] w-52 p-2  rounded-box"
        >
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Default"
              value="default"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Light"
              value="light"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Dark"
              value="dark"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Cupcake"
              value="cupcake"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Bumblebee"
              value="bumblebee"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Emerald"
              value="emerald"
            />
          </li>

          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Corporate"
              value="corporate"
            />
          </li>

          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Dracula"
              value="dracula"
            />
          </li>
        </ul>
      </div>
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
          <Link href="/login" className="p-4 btn btn-ghost">
            Login
          </Link>
          <Link href="/register" className="p-4 btn btn-ghost">
            Register
          </Link>
        </div>
      )}

      {/* <Link href="/item-generator" className="p-4">
        Item Generator
      </Link> */}
    </nav>
  );
};

export default Navbar;
