"use client";

import React, { useEffect, useState } from "react";
import logoDark from "/public/image/Logo.png";
import logoWhite from "/public/image/LogoW.png";

import Button from "../ui/button/Button";
import Image from "next/image";
import Link from "next/link";
import DarkModeButton from "../darkModeButton/DarkModeButton";
import { useTheme } from "next-themes";

export default function HeaderTest() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <header className="flex items-center justify-between p-4 bg-neutral-silver">
      <div className="flex-shrink-0 lg:ml-[105px]">
        <Image
          src={currentTheme === "dark" ? logoWhite : logoDark}
          alt="Logo"
          width="154.49"
          height="24"
        />
      </div>

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-neutral-grey focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-neutral-black text-white flex flex-col items-center justify-center space-y-8 z-20 lg:hidden">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <nav>
            <ul className="flex flex-col items-center space-y-6">
              <li className="text-body-1 font-regular">
                <p>Home</p>
              </li>
              <li className="text-body-1 font-regular">
                <p>Service</p>
              </li>
              <li className="text-body-1 font-regular">
                <p>Feature</p>
              </li>
              <li className="text-body-1 font-regular">
                <p>Product</p>
              </li>
              <li className="text-body-1 font-regular">
                <p>Testimonial</p>
              </li>
              <li className="text-body-1 font-regular">
                <p>FAQ</p>
              </li>
            </ul>
          </nav>
          <DarkModeButton />
          <div className="text-primary">Login</div>
          <Button label={"Sign up"} />
        </div>
      )}

      <nav className="hidden lg:flex lg:items-center lg:space-x-8">
        <ul className="flex" style={{ gap: "50px" }}>
          <li className="text-body-1 font-regular text-gray-900 dark:text-neutral-white">
            <p>Home</p>
          </li>
          <li className="text-body-1 font-regular text-gray-900 dark:text-neutral-white">
            <Link href="/pages/service">
              <p>Service</p>
            </Link>
          </li>
          <li className="text-body-1 font-regular text-gray-900 dark:text-neutral-white">
            <p>Feature</p>
          </li>
          <li className="text-body-1 font-regular text-gray-900 dark:text-neutral-white">
            <p>Product</p>
          </li>
          <li className="text-body-1 font-regular text-gray-900 dark:text-neutral-white">
            <p>Testimonial</p>
          </li>
          <li className="text-body-1 font-regular text-gray-900 dark:text-neutral-white ">
            <p>FAQ</p>
          </li>
        </ul>
      </nav>

      <div className="hidden lg:flex lg:items-center lg:space-x-4">
        <div className="text-primary">Login</div>
        <DarkModeButton />
        <Button label={"Sign up"} />
      </div>
    </header>
  );
}
