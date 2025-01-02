import React from "react";
import TitleText from "../molecules/TitleText";
import Blurb from "../molecules/Blurb";
import { myServices } from "@/constants/myServices";
import { GiFist } from "react-icons/gi";
import { FaCode } from "react-icons/fa6";
import { SlScreenSmartphone } from "react-icons/sl";
import { CgWebsite } from "react-icons/cg";
import { BsPhoneFill } from "react-icons/bs";
import { IoPhonePortrait } from "react-icons/io5";

const Services = () => {
  return (
    <section className=" py-[40px] lg:pb-[80px] px-[20px] md:px-[50px] lg:px-[70px]">
      <TitleText
        smallHeading="My Services"
        largeHeading="The solution you need"
      />
      {/* <Blurb
            key={index}
            image={item.image}
            heading={item.heading}
            body={item.body} /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {/* {myServices.map((item, index) => ( */}
        <div className="flex flex-col items-center gradient-border one-gradient mb-[6%] w-full  md:mb-[9%] lg:mb-0  text-center  relative z-[2] shadow-[1px_8px_40px_-10px_rgba(0,0,0,0.1)]">
          <span className="absolute top-[-13.6%] z-[2] bg-white flex justify-center items-center w-[90px] h-[90px] rounded-full border-[.5px] border-solid border-[#6c63ff]">
            <FaCode className="text-[#6c63ff] text-[3rem]" />
          </span>
          <div className="flex flex-col gap-5 items-center relative z-[2] py-16 px-[15px]">
            <h2 className="font-bold text-[1.2rem] md:text-[1.5rem] font-monst">
              Web Development
            </h2>
            <p className="text-[.9rem] md:text-[1.1rem] ">
              All things relating to building web tools for your goals and daily
              activites
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gradient-border three-gradient mb-[6%] w-full  md:mb-[9%] lg:mb-0  text-center  relative z-[2] shadow-[1px_8px_40px_-10px_rgba(0,0,0,0.1)]">
          <span className="absolute top-[-13.6%] z-[2] bg-white flex justify-center items-center w-[90px] h-[90px] rounded-full border-[.5px] border-solid border-[#f75133]">
            <IoPhonePortrait className="text-[#f75133] text-[3rem]" />
          </span>
          <div className="flex flex-col gap-5 items-center relative z-[2] py-16 px-[15px]">
            <h2 className="font-bold text-[1.2rem] md:text-[1.5rem]">
              App Development
            </h2>
            <p className="text-[.9rem] md:text-[1.1rem] ">
              Sponsor a student to learn a skill by providing learning
              facilities and other needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gradient-border two-gradient mb-[6%] w-full  md:mb-[9%] lg:mb-0  text-center  relative z-[2] shadow-[1px_8px_40px_-10px_rgba(0,0,0,0.1)]">
          <span className="absolute top-[-13.6%] z-[2] bg-white flex justify-center items-center w-[90px] h-[90px] rounded-full border-[.5px] border-solid border-primaryGreen">
            <CgWebsite className="text-primaryGreen text-[3rem]" />
          </span>
          <div className="flex flex-col gap-5 items-center relative z-[2] py-16 px-[15px]">
            <h2 className="font-bold text-[1.2rem] md:text-[1.5rem]">
              Sponsor a Student
            </h2>
            <p className="text-[.9rem] md:text-[1.1rem] ">
              Sponsor a student to learn a skill by providing learning
              facilities and other needs.
            </p>
          </div>
        </div>
        {/* ))} */}
      </div>
    </section>
  );
};

export default Services;
