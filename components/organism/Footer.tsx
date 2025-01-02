import React from "react";
import { Social } from "../molecules/Social";

const Footer = () => {
  return (
    <section className="foot-sec bg-img blacken bg-accent w-full dark:bg-secondary flex items-center justify-between sticky top-0 shadow-nav-shadow dark:shadow-nav-shadow-dark px-[20px] md:px-[50px] lg:px-[70px] py-[15px] z-[9999]">
      <div className="left-foot ">
        <span className="font-fred text-[14px] md:text-[28px] dark:text-accent">
          Kadiri Emmanuel
        </span>
      </div>
      <div className="right-foot w-[40%] lg:w-[30%]">
        <Social className="socials-foot" />
      </div>
    </section>
  );
};

export default Footer;
