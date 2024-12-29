import React from "react";
import AwardCertMobCard from "../atoms/AwardCertMobCard";

const AwardCertMob = () => {
  const items = [
    {
      id: 1,
      img: ["/images/experi.png", "/images/experience.png"],
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
  return (
    <div className="relative dh-[600vh] lg:hidden">
      <div
        className="ssticky top-0 flex h-full w-max flex-col gap-[70px] "
        // style={{ x: xTranslate }}
      >
        {/* <div className={`w-[calc(100vw-var(--${containerDistance}))]`} /> */}
        {items.map((item) => (
          <AwardCertMobCard item={item} key={item.id} />
        ))}
      </div>
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

export default AwardCertMob;
