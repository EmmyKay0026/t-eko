import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <section
      style={{ backdropFilter: "blur(12px)" }}
      className="fixed top-0 flex items-center justify-center dark:bg-black bg-white      opacity-90 back-filter h-screen w-screen z-[998] px-[20px] md:px-[50px] lg:px-[70px] py-[15px]"
    >
      <div className="">
        <h1 className=" text-secondary dark:text-accent  font-source text-[2rem] md:textp-[3.2rem] lg:text-[4rem]">
          Learn more{" "}
          <Link
            className={"underline text-black dark:text-white cursor-pointer "}
            href={"#"}
          >
            about me
          </Link>
          , check out{" "}
          <Link
            className={"underline text-black dark:text-white cursor-pointer "}
            href={"#"}
          >
            {" "}
            my work
          </Link>
          , the latest on Instagram, and{" "}
          <Link
            className={"underline text-black dark:text-white cursor-pointer "}
            href={"#"}
          >
            contact me
          </Link>
          .
        </h1>
      </div>
    </section>
  );
};

export default Menu;
