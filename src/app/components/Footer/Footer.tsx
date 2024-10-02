"use client";
import { useState } from "react";
import Link from "next/link";
import useContactModal from "../modals/ContactModal";
import CreativeCommons from "../legal/CreativeCommon";
const pageLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Login",
    url: "/login",
  },
  {
    name: "Register",
    url: "/register",
  },
  {
    name: "Change Log",
    url: "/changelog",
  },
];

const wikiLinks = [
  {
    name: "Classes",
    url: "/class",
  },
  {
    name: "Spells",
    url: "/spells",
  },
  {
    name: "Subclasses",
    url: "/subclass",
  },
  {
    name: "Backgrounds",
    url: "/background",
  },
  {
    name: "Species",
    url: "/species",
  },
  {
    name: "Subspecies",
    url: "/subspecies",
  },
  {
    name: "Items",
    url: "/item",
  },
  {
    name: "Spell Lists",
    url: "/spell-list",
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
              <Link key={link.url} href={link.url} className="link link-hover">
                {link.name}
              </Link>
            ))}
          </nav>
          {/* <nav>
            <div className="footer-title">Create</div>
            {createLinks.map((link) => (
              <Link key={link.url} href={link.url} className="link link-hover">
                {link.name}
              </Link>
            ))}
          </nav> */}
          {/* <nav>
          <div className="footer-title">Legal</div>
          {legalLinks.map((link) => (
            <Link key={link.url} href={link.url} className="link link-hover">
              {link.name}
            </Link>
          ))}
        </nav> */}

          <div>
            <div className="footer-title">Contact</div>
            <button onClick={openModal} className="btn btn-primary">
              Contact us -&gt;
            </button>
          </div>
        </div>
        <div className="divider"></div>
      </footer>
    </>
  );
};

export default Footer;
