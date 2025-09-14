"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu, LogIn } from "@deemlol/next-icons"; 
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/90 shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Website Logo"
                  width={50}
                  height={20}
                  priority
                />
                <span className="ml-2 text-xl font-bold text-gray-900">School</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/about-us"
                className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium relative group"
              >
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/culture"
                className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium relative group"
              >
                Our Culture
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/contact-us"
                className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium relative group"
              >
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* CTA + Mobile Button */}
            <div className="flex items-center space-x-4">
              <Link
                href="/contact-us"
                className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
              >
                Get In Touch
                <LogIn className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
              </Link>

              <button
                onClick={toggleMobileMenu}
                className="md:hidden text-gray-800 hover:text-blue-600 focus:outline-none transition-colors duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200`}
        >
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/"
              className="block text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="block text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/culture"
              className="block text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Culture
            </Link>
            <Link
              href="/contact-us"
              className="block text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/contact-us"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 w-fit group mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get In Touch
              <LogIn className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </nav>
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
