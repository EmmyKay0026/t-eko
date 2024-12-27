import React from "react";
import PortfolioCard from "../molecules/PortfolioCard";
import TitleText from "../molecules/TitleText";

const Portfolio = () => {
  return (
    <section className="py-[40px] px-[20px] md:px-[50px] lg:px-[70px]">
      <div className="">
        <TitleText smallHeading="Portfolio" largeHeading="Featured Projects" />
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 space-y-3  md:gap-[10px] mt-5 lg:space-y-0 lg:gap-[30px] lg:mt-10 ">
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </section>
  );
};

export default Portfolio;
