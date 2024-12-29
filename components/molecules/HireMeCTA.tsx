"use client";
import React from "react";
import { motion } from "motion/react";
import { FaLaptopCode } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";
import { BsPhoneFill } from "react-icons/bs";
import { RiPhoneFill } from "react-icons/ri";

const HireMeCTA = () => {
  return (
    <article className="relative">
      {/* CONTACT BUTTON */}
      <motion.a
        href="/#contact"
        className="contactLink"
        // Removed fade-in effect by setting opacity to 1
        animate={{
          x: [200, 0],
          opacity: 1, // Set opacity to 1 for no fade-in
        }}
        transition={{
          duration: 2,
        }}
      >
        <motion.div
          className=""
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ originX: 0.5, originY: 0.5 }} // Ensure rotation is around the center
        >
          <svg viewBox="0 0 200 200" width="150" height="150">
            <circle
              cx="100"
              cy="100"
              r="70"
              fill="#008273"
              stroke="#c8c8c8"
              className=" opacity-30 shadow-nav-shadow border-[1px] border-solid border-accent "
            />
            <path
              id="innerCirclePath"
              fill="none"
              d="M 100,100 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
            />
            <text className="tracking-[3px] " fill="white">
              <textPath href="#innerCirclePath">Hire Now •</textPath>
            </text>

            <text className="tracking-[3px] " fill="white">
              <textPath href="#innerCirclePath" startOffset="44%">
                Contact Me •
              </textPath>
            </text>
          </svg>
        </motion.div>
      </motion.a>

      <div className="bg"></div>
      <div className="absolute top-[34%] left-[34%] bg-accent rounded-full px-[10px] py-[10px] ">
        <RiPhoneFill className="text-[1.6rem]" />
      </div>
    </article>
  );
};

export default HireMeCTA;
