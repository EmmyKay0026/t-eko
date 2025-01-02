"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../atoms/Button";
import { CgClose } from "react-icons/cg";
import { cn } from "@/lib/utils";
import { BiRightArrow } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

const PortfolioCard = ({ cardState = false }: { cardState?: boolean }) => {
  const [moreDetails, setMoreDetails] = useState<boolean>(cardState);
  return (
    <article className="rounded-[10px] relative w-full lg:w-[500px] h-[328px]">
      <Image
        src={"/images/portfolio1.png"}
        alt="portfolio image"
        width={600}
        height={328}
        className="rounded-[10px] w-full h-full object-cover"
      />
      <div
        onClick={() => setMoreDetails(true)}
        className={cn(
          "absolute bottom-0 pt-[20px] cursor-pointer w-full h-[100px] rounded-b-[10px] pl-[20px] bg-portfolio_bg text-white transition-all duration-1000 ",
          moreDetails ? "h-0 py-0" : ""
        )}
      >
        <h3
          className={cn("font-bold text-[1.6rem]", moreDetails ? "hidden" : "")}
        >
          Upsel
        </h3>
        <p
          className={cn(
            "text-[.9rem]  italic flex items-center gap-1",
            moreDetails ? "hidden" : ""
          )}
        >
          Web development <FaArrowRight />{" "}
        </p>
      </div>
      <div
        className={cn(
          " absolute top-0  w-[0%] h-full flex flex-col justify-center pl-5 pr-2  bg-secondary dark:bg-accent shadow-extra opacity-80  shadow-3xl rounded-[10px] transition-all duration-1000 ",
          moreDetails ? "w-full md:w-[50%]  left-0" : "w-0 px-0  "
        )}
      >
        <div
          className={cn(
            "w-full relative bottom-[35px] right-0  flex justify-end",
            moreDetails ? "" : "hidden"
          )}
        >
          <CgClose
            onClick={() => setMoreDetails(false)}
            className="cursor-pointer text-accent dark:text-secondary"
          />
        </div>
        <h2
          className={cn(
            "text-[1.5rem] font-bold text-white dark:text-black",
            moreDetails ? "" : "hidden"
          )}
        >
          Charisfolks
        </h2>
        <p
          className={cn(
            "text-accent dark:text-secondary text-[.8rem]",
            moreDetails ? "" : "hidden"
          )}
        >
          A brand in need of a website in order to reach out to their audience.
          Let me take you through a jounery of how I gave them the solution they
          needed.
        </p>
        <div className={cn("w-[70%]", moreDetails ? "" : "hidden")}>
          <Button className="px-[20px] py-[10px] text-[.9rem] ">
            Read More
          </Button>
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;
