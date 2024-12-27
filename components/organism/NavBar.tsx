"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineCode } from "react-icons/ai";

const NavBar = () => {
  const [theme, setTheme] = useState("light");

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
    <nav className="bg-accent dark:bg-secondary flex items-center justify-between sticky top-0 shadow-nav-shadow dark:shadow-nav-shadow-dark px-[20px] md:px-[50px] lg:px-[70px] py-[15px] z-[9999]">
      <Link href={"/"} className="font-fred text-[28px] dark:text-accent">
        T-EKO
      </Link>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <AiOutlineCode className="text-[2.3rem] cursor-pointer text-secondary dark:text-accent" />
    </nav>
  );
};

export default NavBar;
