"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import Button from "../atoms/Button";
import Image from "next/image";
import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const items = [
  {
    id: 1,
    img: [
      "/images/experi.png",
      "/images/experience.png",
      "/images/portfolio1.png",
    ],
    title: "Full Stack Blog Application",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 2,
    img: ["/images/experi.png", "/images/experience.png"],
    title: "School Management System",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 3,
    img: ["/images/experi.png", "/images/experience.png"],
    title: "Real-time Chat Application",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 4,
    img: ["/images/experi.png", "/images/experience.png"],
    title: "Social Media Project",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 5,
    img: ["/images/experi.png", "/images/experience.png"],
    title: "Animated Portfolio Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
];

const imgVariants = {
  initial: { x: -500, y: 500, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const textVariants = {
  initial: { x: 500, y: 500, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut", staggerChildren: 0.05 },
  },
};

const ListItem = ({ item }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const [experienceImg, setExperienceImg] = useState<number>(0);

  const prevImage = () => {
    setExperienceImg((prev) => (prev === 0 ? 0 : prev - 1));
    console.log(experienceImg);
  };
  const nextImage = () => {
    setExperienceImg((prev) =>
      prev === item.img.length - 1 ? prev - 1 : prev + 1
    );
    console.log(experienceImg);
  };

  return (
    <div
      className="flex flex-col wh-screen w-screen items-center justify-center gap-[100px] overflow-hidden lg:flex-row-reverse"
      ref={ref}
    >
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="w-full rounded-[20px] overflow-hidden lg:w-[40%]"
      >
        <article className="relative w-[100%]">
          <div className="w-full rounded-[20px] ">
            <Image
              src={item.img[experienceImg]}
              alt=""
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
            {item.img.length > 0 && (
              <div className="flex justify-between items-center w-full absolute top-0 h-full">
                <IoIosArrowDropleftCircle
                  onClick={prevImage}
                  className="text-[2rem] cursor-pointer"
                />
                <IoIosArrowDroprightCircle
                  onClick={nextImage}
                  className="text-[2rem] cursor-pointer"
                />
              </div>
            )}
          </div>
        </article>
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="w-full lg:w-[40%] flex flex-col gap-[24px]"
      >
        <motion.h1
          variants={textVariants}
          className="text-[2rem] leading-[2.4rem] font-bold  text-white md:text-[2.4rem] md:leading-[2.8rem] lg:text-[3rem] lg:leading-[3.4rem]"
        >
          <motion.span
            variants={textVariants}
            className="text-darkGreen dark:text-primaryGreen  block text-[1rem] leading-[2rem] lg:text-[1.3rem] lg:leading-[2.6rem] "
          >
            June 2023 - June 2024
          </motion.span>
          {item.title}
        </motion.h1>
        <motion.p variants={textVariants} className="font-light text-accent">
          {item.desc}
        </motion.p>
        {/* <motion.a variants={textVariants} href={item.link}>
          <Button
          //   className="bg-pink-500 text-white px-6 py-3 rounded-[10px] font-medium hover:bg-pink-600 transition"
          >
            Learn more
          </Button>
        </motion.a> */}
      </motion.div>
    </div>
  );
};

const AwardCertDesktop = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [1, 0],
    // [0, 1],
    // [0, -window.innerWidth * items.length]
    [-window.innerWidth * items.length, 0]
  );

  return (
    <div className="relative h-[600vh] hidden lg:block " ref={ref}>
      <motion.div
        className="sticky top-0 flex h-full lg:h-screen w-max flex-row lg:flex-row"
        style={{ x: xTranslate }}
      >
        <div className={`w-[calc(100vw-var(--${containerDistance}))]`} />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      {/* <div className="sticky bottom-[20%] left-0 w-20 h-20">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg> 
      </div>*/}
    </div>
  );
};

export default AwardCertDesktop;
