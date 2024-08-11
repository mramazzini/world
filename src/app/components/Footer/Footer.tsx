"use client";
import { useState } from "react";
import Link from "next/link";
import useContactModal from "../modals/ContactModal";
const pageLinks = [
  {
    name: "Home",
    url: "/",
  },

  {
    name: "Change Log",
    url: "/changelog",
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
  // {
  //   name: "Terms of use",
  //   url: "/terms",
  // },
  // {
  //   name: "Privacy policy",
  //   url: "/privacy",
  // },
];

const Footer = () => {
  const { ContactModal, openModal } = useContactModal();
  return (
    <>
      <ContactModal />
      <footer className="footer bg-neutral text-neutral-content p-10 mt-auto grid-rows-2">
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
        {/* <nav>
          <h6 className="footer-title">Legal</h6>
          {legalLinks.map((link) => (
            <Link key={link.url} href={link.url} className="link link-hover">
              {link.name}
            </Link>
          ))}
        </nav> */}
        <div>
          <h6 className="footer-title">Contact</h6>
          <button onClick={openModal} className="btn btn-primary">
            Contact us -&gt;
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
