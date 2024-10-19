"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-[#ECECEC]">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`${mobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            className={`${mobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-center">
        <div className="flex flex-shrink-0 items-center">
          <Image
            src="/images/image 16.png"
            alt="Votre entreprise"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
          />
          <h1 className="px-3 py-2 text-2xl font-bold leading-3 text-[#007E85]">
            Health<span className="text-green-400">care</span>
          </h1>
        </div>
        <div className="hidden sm:mx-auto sm:block">
          <div className="flex flex-wrap space-x-5">
            <Link
              href="/team"
              className="rounded-md px-3 py-2 text-xl font-roboto font-sans font-semibold text-[#007E85] underline hover:bg-gray-300 hover:text-teal"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="rounded-md px-3 py-2 text-xl font-roboto font-sans font-semibold text-black hover:bg-gray-300 hover:text-black"
            >
              Service
            </Link>
            <Link
              href="/contact"
              className="rounded-md px-3 py-2 text-xl font-roboto font-sans font-semibold text-black hover:bg-gray-300 hover:text-black"
            >
              Contact Us
            </Link>
            <Link
              href="/help"
              className="rounded-md px-3 py-2 text-xl font-roboto font-sans font-semibold text-black hover:bg-gray-300 hover:text-black"
            >
              Help
            </Link>
            <Link
              href="/blogs"
              className="rounded-md px-3 py-2 text-xl font-roboto font-sans font-semibold text-black hover:bg-gray-300 hover:text-black"
            >
              Blogs
            </Link>
            <div className="flex justify-end items-center space-x-6 text-xl flex-wrap">
              <button className="bg-none text-[#007E85] text-center">
                Sign Up
              </button>
              <button className="bg-[#007E85] text-white text-center rounded-lg w-32 h-12">
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className={`${mobileMenuOpen ? "block" : "hidden"} sm:hidden`}
    id="mobile-menu"
  >
    <div className="space-y-1 px-2 pb-3 pt-2">
      <Link
        href="/"
        className="block rounded-md bg-gray-300 px-3 py-2 text-base font-roboto font-sans font-bold text-[#007E85] underline hover:bg-gray-300 hover:text-teal"
      >
        Home
      </Link>
      <Link
        href="/team"
        className="block rounded-md px-3 py-2 text-base font-roboto font-sans font-bold text-black hover:bg-gray-300 hover:text-black"
      >
        Service
      </Link>
      <Link
        href="/contact"
        className="block rounded-md px-3 py-2 text-base font-roboto font-sans font-bold text-black hover:bg-gray-300 hover:text-black"
      >
        Contact Us
      </Link>
      <Link
        href="/help"
        className="block rounded-md px-3 py-2 text-base font-roboto font-sans font-bold text-black hover:bg-gray-300 hover:text-black"
      >
        Help
      </Link>
      <Link
        href="/blogs"
        className="block rounded-md px-3 py-2 text-base font-roboto font-sans font-bold text-black hover:bg-gray-300 hover:text-black"
      >
        Blogs
      </Link>
      <div className="block justify-end items-center space-x-6 text-xl">
        <button className="bg-none text-[#007E85] text-center">
          Sign Up
        </button>
        <button className="bg-[#007E85] text-white text-center rounded-lg w-32 h-12">
          Log In
        </button>
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
