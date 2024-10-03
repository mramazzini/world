"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { destroySession, verifyToken } from "@/lib/utils/auth";
import { useState, useEffect } from "react";
import { DISCORD_INVITE, NAVBAR_HEIGHT_REM } from "@/lib/globalVars";
import HomeSearchBar from "../UI/HomeSearchBar";
import Image from "next/image";

const Navbar = () => {
  //Block navbar on certain pages
  const pathname = usePathname();
  const router = useRouter();
  //add pages to this array to hide the navbar
  const noNavbar: string[] = [];
  const showNavbar = !noNavbar.includes(pathname);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const checkToken = async () => {
    const isAuthenticated = await verifyToken();
    setIsAuthenticated(isAuthenticated);
  };
  useEffect(() => {
    checkToken();
  }, [pathname, router]);

  const links: { name: string; href: string }[] = [
    {
      name: "Classes",
      href: "/class",
    },
    {
      name: "Subclasses",
      href: "/subclass",
    },
    {
      name: "Spells",
      href: "/spells",
    },
    {
      name: "Spell Lists",
      href: "/spell-list",
    },
    {
      name: "Backgrounds",
      href: "/background",
    },
    {
      name: "Species",
      href: "/species",
    },
    {
      name: "Subspecies",
      href: "/subspecies",
    },
    {
      name: "Items",
      href: "/item",
    },
  ];

  if (!showNavbar) return null;
  return (
    <>
      <nav
        className={`navbar z-[1] bg-base-200 border-b border-primary hidden md:flex items-center justify-between`}
        style={{ height: `${NAVBAR_HEIGHT_REM}rem` }}
      >
        {/* {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`p-4 btn btn-${
              pathname === link.href ? "primary" : "ghost"
            } mx-1`}
          >
            {link.name}
          </Link>
        ))} */}
        {/* <Link
          href="/monster"
          className={`p-4 btn btn-${
            pathname === "/monster" ? "primary" : "ghost"
          } mx-1`}
        >
          Monsters
        </Link> */}{" "}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex  mr-4">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="cupcake"
              />

              {/* sun icon */}
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          <HomeSearchBar small />
        </div>
        <div className="navbar-center">
          <Link href="/">
            <Image
              src="/images/hero.jpg"
              alt="Max's DnD Wiki"
              width={150}
              height={50}
              className="cursor-pointer w-12 h-12 rounded-full hover:scale-105 transform transition-transform align-self-middle"
            />
          </Link>
        </div>
        <div className="navbar-end">
          {isAuthenticated ? (
            <>
              <Link
                href={"/dashboard"}
                className="flex items-center justify-center btn btn-ghost mx-2 border border-primary"
              >
                Dashboard
              </Link>

              <button
                className="p-4 btn btn-ghost mx-2"
                onClick={async (e) => {
                  e.preventDefault();
                  await destroySession();
                  await checkToken();
                  router.push(pathname);
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="p-4 btn btn-ghost mx-2">
                Login
              </Link>
              <Link href="/register" className="p-4 btn btn-ghost mx-2">
                Register
              </Link>
            </>
          )}
        </div>
        {/* <Link href="/item-generator" className="p-4">
        Item Generator
      </Link> */}
      </nav>
      {/* mobile nav */}
      <nav
        className={`navbar z-[1] bg-base-200 border-b border-primary flex md:hidden`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex  mr-4">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="cupcake"
              />

              {/* sun icon */}
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>

        <div className="navbar-end">
          {isAuthenticated ? (
            <div
              className="p-4  btn btn-ghost"
              onClick={async () => {
                await destroySession();
                await checkToken();
                router.push(pathname);
              }}
            >
              Logout
            </div>
          ) : (
            <>
              <Link href="/login" className="p-4 btn btn-ghost mr-2">
                Login
              </Link>
              <Link href="/register" className="p-4 btn btn-ghost">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
