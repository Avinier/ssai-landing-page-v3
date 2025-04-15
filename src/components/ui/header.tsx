"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<{
    products: boolean;
    solutions: boolean;
    resources: boolean;
  }>({
    products: false,
    solutions: false,
    resources: false,
  });

  const handleDropdownToggle = (dropdown: keyof typeof isDropdownOpen) => {
    setIsDropdownOpen((prev) => {
      const newState = {
        products: false,
        solutions: false,
        resources: false,
      };
      newState[dropdown] = !prev[dropdown];
      return newState;
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <svg
              height="26"
              viewBox="0 0 76 65"
              fill="currentColor"
              className="text-black"
            >
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z"></path>
            </svg>
          </Link>

          <nav className="hidden md:flex">
            <ul className="flex items-center space-x-8">
              <li className="relative">
                <Button
                  variant="ghost"
                  className="text-sm font-medium"
                  onClick={() => handleDropdownToggle("products")}
                >
                  Products
                </Button>
              </li>
              <li className="relative">
                <Button
                  variant="ghost"
                  className="text-sm font-medium"
                  onClick={() => handleDropdownToggle("solutions")}
                >
                  Solutions
                </Button>
              </li>
              <li className="relative">
                <Button
                  variant="ghost"
                  className="text-sm font-medium"
                  onClick={() => handleDropdownToggle("resources")}
                >
                  Resources
                </Button>
              </li>
              <li>
                <Link
                  href="/enterprise"
                  className="text-sm font-medium hover:text-gray-700"
                >
                  Enterprise
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="text-sm font-medium hover:text-gray-700"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm font-medium hover:text-gray-700"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden text-sm font-medium hover:text-gray-700 md:block"
          >
            Log In
          </Link>
          <Link
            href="/contact"
            className="hidden text-sm font-medium hover:text-gray-700 md:block"
          >
            Contact
          </Link>
          <Button size="sm">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
