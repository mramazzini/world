'use client';
import Link from 'next/link';
import ContactModal from '../Modals/ContactModal';
import { wikiLinks } from '@/lib/globalVars';

const pageLinks = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Login',
    url: '/login',
  },
  {
    name: 'Register',
    url: '/register',
  },
  {
    name: 'Change Log',
    url: '/changelog',
  },
];

const Footer = () => {
  return (
    <>
      <footer className=" bg-neutral text-neutral-content p-10 mt-auto w-full">
        <div className="footer">
          <nav>
            <div className="footer-title">Links</div>
            {pageLinks.map((link) => (
              <Link key={link.url} href={link.url} className="link link-hover">
                {link.name}
              </Link>
            ))}
          </nav>
          <nav>
            <div className="footer-title">Wiki</div>
            {wikiLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link link-hover"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div>
            <div className="footer-title">Contact</div>
            <ContactModal />
          </div>
        </div>
        <div className="divider"></div>
      </footer>
    </>
  );
};

export default Footer;
