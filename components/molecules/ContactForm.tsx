"use client";
import React, { MutableRefObject, useRef } from "react";
import TitleText from "./TitleText";
import Input from "../atoms/Input";

const initialValue = {
  name: "",
  email: "",
  telNo: "",
  skillSet: "",
  message: "",
};
const ContactForm = () => {
  const form = useRef<any>();
  return (
    <>
      <TitleText
        smallHeading="Contact me"
        largeHeading="Let's talk about your next project"
      />
      <form ref={form} className="mt-[40px]">
        <div className="flex flex-wrap gap-x-[7px]  whitespace-nowrap w-full md:gap-x-[10px] gap-y-[35px]">
          <div className="">
            <input
              className="w-0 hidden peer"
              type="checkbox"
              name="checkboxes"
              id="web-design"
              value="Web design"
            />
            <label
              htmlFor="web-design"
              className="abg-white cursor-pointer text-secondary dark:text-accent px-[26px] py-[11px]  text-[0.75rem] rounded-full  mr-[15px] border-secondary dark:border-accent border-2 border-solid md:text-[1rem] lg:text-[1.125rem] peer-checked:border-primaryGreen peer-checked:bg-primaryGreen peer-checked:text-accent dark:peer-checked:text-accent"
            >
              Web Design
            </label>
          </div>
          <div className="">
            <input
              className="w-0 hidden peer"
              type="checkbox"
              name="checkboxes"
              id="web-development"
              value="Web development"
            />
            <label
              htmlFor="web-development"
              className="abg-white cursor-pointer text-secondary dark:text-accent px-[26px] py-[11px]  text-[0.75rem] rounded-full  mr-[15px] border-secondary dark:border-accent border-2 border-solid md:text-[1rem] lg:text-[1.125rem] peer-checked:border-primaryGreen peer-checked:bg-primaryGreen peer-checked:text-accent dark:peer-checked:text-accent"
            >
              Web Development
            </label>
          </div>
          <div className="">
            <input
              className="w-0 hidden peer"
              type="checkbox"
              name="checkboxes"
              id="mobile-app"
              value="Mobile App Development"
            />
            <label
              htmlFor="mobile-app"
              className="abg-white cursor-pointer text-secondary dark:text-accent px-[26px] py-[11px]  text-[0.75rem] rounded-full mr-[15px] border-secondary dark:border-accent border-2 border-solid  md:text-[1rem] lg:text-[1.125rem] peer-checked:border-primaryGreen peer-checked:bg-primaryGreen peer-checked:text-accent dark:peer-checked:text-accent"
            >
              Mobile App Development
            </label>
          </div>
          <div className="">
            <input
              className="w-0 hidden peer"
              type="checkbox"
              name="checkboxes"
              id="marketing"
              value="Marketing"
            />
            <label
              htmlFor="marketing"
              className="abg-white cursor-pointer text-secondary dark:text-accent px-[26px] py-[11px]  text-[0.75rem] rounded-full mr-[15px] border-secondary dark:border-accent border-2 border-solid  md:text-[1rem] lg:text-[1.125rem] peer-checked:border-primaryGreen peer-checked:bg-primaryGreen peer-checked:text-accent dark:peer-checked:text-accent"
            >
              Marketing
            </label>
          </div>
          <div className="">
            <input
              className="w-0 hidden peer"
              type="checkbox"
              name="checkboxes"
              id="others"
              value="Others"
            />
            <label
              htmlFor="others"
              className="abg-white cursor-pointer text-secondary dark:text-accent px-[26px] py-[11px]  text-[0.75rem] rounded-full mr-[15px] border-secondary dark:border-accent border-2 border-solid  md:text-[1rem] lg:text-[1.125rem] peer-checked:border-primaryGreen peer-checked:bg-primaryGreen peer-checked:text-accent dark:peer-checked:text-accent"
            >
              Others
            </label>
          </div>
        </div>
        <div className=" mt-10">
          <Input
            label="Full Name"
            name="name"
            id="name"
            type="text"
            placeholder="John Doe"
            inputClassName="bg-transparent  px-[10px] "
            className=""
            required
          />
        </div>
        <div className=" mt-10">
          <Input
            label="Email"
            name="email"
            id="email"
            type="email"
            placeholder="johndoe@example.com"
            inputClassName="bg-transparent  px-[10px] "
            className=""
            required
          />
        </div>
        <div className=" mt-10">
          <Input
            label="Phone Number"
            name="tel_no"
            id="tel_no"
            type="tel"
            placeholder="+2340000000"
            inputClassName="bg-transparent  px-[10px] "
            className=""
            required
          />
        </div>
        <div className=" mt-1-[10px] md:mt-[30px] ">
          <label className="text-black dark:text-white text-[1rem] md:text-[1.2rem]  font-monst ">
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            className="w-full  px-[10px]  bg-transparent text-[.9rem] md:text-[1rem] outline-none border-b-[1.5px] rounded-[15px] border-solid text-black dark:text-white  border-secondary dark:border-accent py-[10px] dark:placeholder:text-gray-400 placeholder:text-gray-600 "
            // type="text"
            placeholder="Tell Us About Your Project"
            name="message"
            autoComplete="off"
            required
          />
        </div>
      </form>
    </>
  );
};
export default ContactForm;
