import Link from "next/link";

const pageLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const createLinks = [
  {
    name: "Class",
    url: "/homebrew/class/create",
  },
  {
    name: "Subclass",
    url: "/homebrew/subclass/create",
  },
  {
    name: "Spell",
    url: "/homebrew/spell/create",
  },
];

const legalLinks = [
  {
    name: "Terms of use",
    url: "/terms",
  },
  {
    name: "Privacy policy",
    url: "/privacy",
  },
];

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 mt-auto">
      <nav>
        <h6 className="footer-title">Links</h6>
        {pageLinks.map((link) => (
          <Link key={link.url} href={link.url} className="link link-hover">
            {link.name}
          </Link>
        ))}
      </nav>
      <nav>
        <h6 className="footer-title">Create</h6>
        {createLinks.map((link) => (
          <Link key={link.url} href={link.url} className="link link-hover">
            {link.name}
          </Link>
        ))}
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        {legalLinks.map((link) => (
          <Link key={link.url} href={link.url} className="link link-hover">
            {link.name}
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
