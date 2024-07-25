import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, InstagramIcon } from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`
        h-[1px] inline-block w-0 bg-dark
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
      `}>&nbsp;</span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-2 grid grid-cols-3 items-center">
      {/* Navigation Links */}
      <nav className="flex space-x-4 font-medium">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/experience" title="Experiences" />
        <CustomLink href="/projects" title="Projects" />
      </nav>

      {/* Centered Logo */}
      <div className="flex justify-center">
        <Logo />
      </div>

      {/* Social Media Links */}
      <nav className="flex justify-end space-x-6 items-center">
        <a
          href="https://github.com/Adriankf59"
          target="_blank"
          className="hover:-translate-y-1 transition-transform"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.instagram.com/adrianfirmnsyh/"
          target="_blank"
          className="hover:-translate-y-1 transition-transform"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/adriankfirmansah/"
          target="_blank"
          className="hover:-translate-y-1 transition-transform"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </nav>
    </header>
  );
};

export default NavBar;