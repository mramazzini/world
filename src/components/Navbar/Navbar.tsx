'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { useState, useEffect } from 'react';

import HomeSearchBar from '../UI/HomeSearchBar';
import { destroySession, verifyToken } from '@/lib/utils/auth';
import { NAVBAR_HEIGHT_TAILWIND, wikiLinks } from '@/lib/globalVars';
// import { wikiLinks } from '@/lib/globalVars';

const Navbar = () => {
  //Block navbar on certain pages
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showNavbarMenu, setShowNavbarMenu] = useState(false);

  const homepage = pathname === '/';

  useEffect(() => {
    checkToken();
  }, [pathname, router]);

  if (!pathname) return null;

  //add pages to this array to hide the navbar
  const noNavbar: string[] = [];
  const showNavbar = !noNavbar.includes(pathname);

  const checkToken = async () => {
    const isAuthenticated = await verifyToken();
    setIsAuthenticated(isAuthenticated);
  };

  if (!showNavbar) return null;
  return (
    <>
      <nav
        onMouseEnter={() => setShowNavbarMenu(true)}
        onMouseLeave={() => setShowNavbarMenu(false)}
        className={`navbar z-[1] bg-base-200  hidden md:flex items-center justify-between ${NAVBAR_HEIGHT_TAILWIND} `}
      >
        <div className="navbar-start">
          <div className="flex  gap-4 ml-4">
            <Link href="/">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="cursor-pointer w-12 h-12 rounded-full hover:scale-105 transform transition-transform align-self-middle  swap-on "
              >
                <path
                  d="M5 9.77746V16.2C5 17.8802 5 18.7203 5.32698 19.362C5.6146 19.9265 6.07354 20.3854 6.63803 20.673C7.27976 21 8.11984 21 9.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7203 19 17.8802 19 16.2V5.00002M21 12L15.5668 5.96399C14.3311 4.59122 13.7133 3.90484 12.9856 3.65144C12.3466 3.42888 11.651 3.42893 11.0119 3.65159C10.2843 3.90509 9.66661 4.59157 8.43114 5.96452L3 12M14 21V15H10V21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
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
        <div className="navbar-center flex items-center justify-center">
          {!homepage && <HomeSearchBar small />}
        </div>
        <div className="navbar-end">
          {isAuthenticated ? (
            <>
              <Link
                href={'/workshop'}
                className="flex items-center justify-center btn btn-primary mx-2 "
              >
                Workshop
              </Link>
              <Link
                href={'/dashboard'}
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
                  //refresh page
                  window.location.reload();
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href={`/login`} className="p-4 btn btn-ghost mx-2">
                Login
              </Link>
              <Link href={`/register`} className="p-4 btn btn-ghost mx-2">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
      {!homepage && (
        <>
          <div
            className={` hidden bg-black fixed top-16 w-screen h-screen z-[1] opacity-50 transition-all duration-300 ease-in-out ${
              showNavbarMenu ? 'md:block' : ''
            }`}
          ></div>
          <div
            onMouseEnter={() => setShowNavbarMenu(true)}
            onMouseLeave={() => setShowNavbarMenu(false)}
            className={`absolute hidden md:flex flex-col items-center top-16 w-[100vw]  gap-4 bg-base-300  z-[2] transition-all duration-300 ease-in-out ${
              showNavbarMenu
                ? 'h-auto opacity-100 '
                : 'overflow-hidden h-0 opacity-0'
            } `}
          >
            <div className="w-full max-w-[1800px] flex flex-col items-center gap-2">
              <ul className="flex flex-wrap items-center justify-center gap-2 p-4">
                {wikiLinks.map((link, index) => (
                  <Link key={index} href={link.href}>
                    <div className="btn">{link.name}</div>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
