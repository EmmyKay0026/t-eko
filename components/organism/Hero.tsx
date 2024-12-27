import React from "react";
import Button from "@/components/atoms/Button";
import HireMeCTA from "@/components/molecules/HireMeCTA";

import Image from "next/image";

const Hero = () => {
  return (
    <main className="relative">
      <Image
        src={"/images/hero_decor.png"}
        alt="hero decor"
        width={550}
        height={250}
        className="absolute  top-[40%] right-0 z-[-1]  invert dark:invert-0 md:top-[25%] lg:bottom-5 lg:top-[initial] lg:left-0"
      />
      <section className="flex flex-col justify-between px-[20px] md:px-[50px] lg:px-[70px] lg:flex-row ">
        <div className="w-full z-[2] pt-6 lg:w-[50%]">
          <h1 className="text-[2rem] leading-[2.4rem] font-bold  text-secondary dark:text-accent md:text-[2.7rem] md:leading-[3.4rem] lg:text-[3rem] lg:leading-[3.4rem]">
            <span className="text-primaryGreen  block text-[1rem] leading-[2rem] lg:text-[1.3rem] lg:leading-[2.6rem] ">
              Hello, I'm Emmanuel Kadiri
            </span>
            Similar to the popular creation story, I give life to any project I
            work on.
          </h1>
          <Button>Download CV</Button>
        </div>
        <div className="w-[80%] md:w-[50%] lg:w-[34%]">
          <Image
            src={"/images/hero_img.png"}
            alt="image of Emmanuel"
            width={600}
            height={600}
            className="object-cover  sw-[20%]   static top-0 md:dw-[50%] lg:relative lg:bottom-0 lg:w-[100%] lg:right-[200px] lg:mt-[100px] "
          />
        </div>
        <div className="">
          <div className="hidden flex-col justify-end items-end gap-3 bg-white py-4 px-[10px] rounded-b-[3px] dark:bg-darkGreen lg:flex ">
            <a href="" className="">
              <Image
                src={"/images/github.png"}
                alt="github icon"
                width={40}
                height={40}
                className="saturate-0 hover:saturate-100"
              />
            </a>
            <a href="" className="">
              <Image
                src={"/images/x.png"}
                alt="twitter icon"
                width={40}
                height={40}
                className="saturate-0 hover:saturate-100"
              />
            </a>
            <a href="" className="">
              <Image
                src={"/images/linkedin.png"}
                alt="linkedin icon"
                width={40}
                height={40}
                className="saturate-0 hover:saturate-100"
              />
            </a>
            <a href="" className="">
              <Image
                src={"/images/instagram.png"}
                alt="instagram icon"
                width={40}
                height={40}
                className="saturate-0 hover:saturate-100"
              />
            </a>
          </div>
        </div>
      </section>{" "}
      <div className="hidden fixed right-[20px] bottom-0 md:block lg:right-[40px] z-[999]">
        <HireMeCTA />
      </div>
    </main>
  );
};

export default Hero;
