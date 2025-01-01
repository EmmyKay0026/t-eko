import React from "react";
import TitleText from "../molecules/TitleText";
import Button from "../atoms/Button";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="flex flex-col py-[40px] pl-[20px] md:pl-[50px] lg:px-[70px] lg:flex-row lg:justify-between">
      <div className="w-full lg:w-[55%] pr-[20px] ">
        <TitleText
          smallHeading="About Me"
          largeHeading="Let me Introduce Myself"
        />
        <p className="text-[18px] mb-5 mt-2 text-secondary dark:text-accent">
          On my way throughout the journey back to Iyana-Ipaja, I slept, woke up
          and read Akin Alabis newly released book titled How To Sell To
          Nigerians. I slept again, and the cycle went on like that. By the time
          I got home, I was tired. I got something to eat, then I spoke to one
          or two friends over the phone.
        </p>
        <p className="text-[18px] mb-5  text-secondary dark:text-accent">
          By the time I got home, I was tired. I got something to eat, then I
          spoke to one or two friends over the phone, and I decided to sleep off
          because I would be travelling back to my city very early the next day.
        </p>
        <p className="text-[18px] mb-5  text-secondary dark:text-accent">
          By the time I got home, I was tired. I got something to eat, then I
          spoke to one or two friends over the phone, and I decided to sleep off
          because I would be travelling back to my city very early the next day.
        </p>
        <Button>View Experience</Button>
      </div>
      <div className="flex justify-end">
        <picture>
          <source media="(min-width:900px )" srcSet="/images/aboutme.png" />
          <source
            media="(min-width:200px )"
            className="w-[40%] block"
            srcSet="/images/aboutme_mob.png"
          />
          <Image
            src={"/images/aboutme.png"}
            // className="w-[100%] block"
            alt=""
            width={400}
            height={500}
          />
        </picture>
      </div>
    </section>
  );
};

export default AboutMe;
