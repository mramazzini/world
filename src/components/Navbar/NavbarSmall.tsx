'use client';
import { wikiLinks } from '@/lib/globalVars';
import { destroySession, verifyToken } from '@/lib/utils/auth';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import HomeSearchBar from '../UI/HomeSearchBar';

export const NavbarSmall = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isHomepage = pathname === '/';
  useEffect(() => {
    checkToken();
  }, [pathname, router]);

  if (!pathname) return null;

  //add pages to this array to hide the navbar

  const checkToken = async () => {
    const isAuthenticated = await verifyToken();
    setIsAuthenticated(isAuthenticated);
  };
  return (
    <>
      <nav className={`navbar z-[1] bg-base-200 flex md:hidden`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              Wiki
            </div>

            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {wikiLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <div className="flex  mr-4">
            <Link href="/">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="cursor-pointer w-10 h-10 rounded-full hover:scale-105 transform transition-transform align-self-middle  swap-on "
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
          </div>
        </div>

        <div className="navbar-end">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              Account
            </div>

            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 relative right-0  p-2 shadow">
              {isAuthenticated ? (
                <>
                  <li>
                    <Link href={`/workshop`}>Workshop</Link>
                  </li>
                  <li>
                    <Link href={`/dashboard`}>Dashboard</Link>
                  </li>
                  <li></li>
                  <li>
                    <Link
                      className="bg-error"
                      onClick={async (e) => {
                        e.preventDefault();
                        await destroySession();
                        await checkToken();
                        //refresh page
                        window.location.reload();
                      }}
                      href={`/`}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href={`/login`}>Login</Link>
                  </li>
                  <li>
                    <Link href={`/register`}>Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {!isHomepage && (
        <div className="md:hidden w-full pb-4 border-b border-primary bg-base-200">
          <HomeSearchBar small />
        </div>
      )}
    </>
  );
};

export default NavbarSmall;
