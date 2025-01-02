"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineCode } from "react-icons/ai";
import Menu from "../molecules/Menu";
import { cn } from "@/lib/utils";
import { PiMoonStarsFill } from "react-icons/pi";
import { IoMdSunny } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [theme, setTheme] = useState("light");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <nav
        className={cn(
          "bg-accent dark:bg-secondary flex items-center justify-between sticky opacity-90 top-0 shadow-nav-shadow dark:shadow-nav-shadow-dark backdrop-blur-md px-[20px] md:px-[50px] lg:px-[70px] py-[15px] z-[999]",
          showMenu ? "bg-white dark:bg-black shadow-none" : ""
        )}
      >
        <Link href={"/"} className="font-fred text-[28px] dark:text-accent">
          T-EKO
        </Link>
        <div className="flex items-center gap-8">
          <button className="cursor-pointer" onClick={toggleTheme}>
            {theme === "light" ? (
              <PiMoonStarsFill className="text-[1.6rem] text-secondary dark:text-accent" />
            ) : (
              <IoMdSunny className="text-[1.6rem] text-secondary dark:text-accent" />
            )}
          </button>
          {showMenu ? (
            <IoClose
              onClick={() => setShowMenu((prev) => !prev)}
              className="text-[2.3rem] cursor-pointer text-secondary dark:text-accent"
            />
          ) : (
            <AiOutlineCode
              onClick={() => setShowMenu((prev) => !prev)}
              className="text-[2.3rem] cursor-pointer text-secondary dark:text-accent"
            />
          )}
        </div>
      </nav>
      {showMenu && <Menu />}
    </>
  );
};

export default NavBar;
