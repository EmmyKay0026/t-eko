"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Speech = () => {
  return (
    <section className="bg-primaryGreen flex items-center justify-center">
      <TypeAnimation
        sequence={[
          "React",
          1500,
          "Next js",
          1500,
          "WordPress",
          1500,
          "React Native",
          1500,
          "Flutter",
          1500,
          "TypeScript",
          1500,
          "Flutter flow",
          1500,
        ]}
        wrapper="span"
        speed={5}
        style={{ color: "white", display: "inline-block" }}
        repeat={Infinity}
        className="text-[3.3rem] md:text-[5rem]"
      />
    </section>
  );
};

export default Speech;
