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
  const noNavbar = ["/"];
  const showNavbar = !noNavbar.includes(pathname);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const checkToken = async () => {
    const isAuthenticated = await verifyToken();
    setIsAuthenticated(isAuthenticated);
  };
  useEffect(() => {
    checkToken();
  }, [pathname, router]);

  const links = [
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
      name: "Backgrounds",
      href: "/background",
    },
    {
      name: "Races",
      href: "/race",
    },
    {
      name: "Subraces",
      href: "/subrace",
    },
    {
      name: "Tools",
      href: "/tool",
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
          <div className="dropdown hidden lg:flex">
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
                href={DISCORD_INVITE}
                target="_blank"
                className="flex items-center justify-center btn btn-ghost mx-2 border border-primary"
              >
                <Image
                  src="/images/discord.svg"
                  alt="Discord"
                  className="h-10 flex items-center justify-center"
                />
              </Link>

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
            </>
          ) : (
            <>
              <Link
                href={DISCORD_INVITE}
                target="_blank"
                className="flex items-center justify-center btn btn-ghost mx-2 border border-primary"
              >
                <Image
                  src="/images/discord.svg"
                  alt="Discord"
                  className="h-10 flex items-center justify-center"
                />
              </Link>
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
