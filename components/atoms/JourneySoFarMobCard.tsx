import Image from "next/image";
import React from "react";

const JourneySoFarMobCard = ({ item }: any) => {
  return (
    <div
      className="flex flex-col wh-screen w-screen items-start justify-left gap-[20px]  overflow-hidden lg:flex-row"
      //   ref={ref}
    >
      <div className="w-[80%] rounded-[20px] ">
        <Image
          src={item.img}
          alt=""
          width={400}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[80%] flex flex-col gap-[24px]">
        <h1 className="text-[2rem] leading-[2.4rem] font-bold  text-black dark:text-white md:text-[2.4rem] md:leading-[2.8rem] lg:text-[3rem] lg:leading-[3.4rem]">
          <span className="text-primaryGreen  block text-[1rem] leading-[2rem] lg:text-[1.3rem] lg:leading-[2.6rem] ">
            June 2023 - June 2024
          </span>
          {item.title}
        </h1>
        <p className="font-light text-secondary dark:text-accent">
          {item.desc}
        </p>
        {/* <a
          href={item.link}>
          <Button
          //   className="bg-pink-500 text-white px-6 py-3 rounded-[10px] font-medium hover:bg-pink-600 transition"
          >
            Learn more
          </Button>
        </a> */}
      </div>
    </div>
  );
};

export default JourneySoFarMobCard;
