import React from "react";
import { TestionialCards } from "../molecules/TestimonialCard";
import Button from "../atoms/Button";
import TitleText from "../molecules/TitleText";
import TrustedBy from "./TrustedBy";

export const Testimonial = () => {
  return (
    <section className="test-sec blacken bg-img flex flex-col bg-primaryGreen dark:bg-darkGreen py-[40px] px-[20px] md:px-[50px] lg:px-[70px]">
      {/* <h2>Testimonials</h2> */}
      <TitleText
        largeClassName="text-white "
        smallClassName="text-darkGreen dark:text-primaryGreen"
        smallHeading="Testimonials"
        largeHeading="What my tribe say"
      />
      <div className="testimonials grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-[10px] mt-5 lg:gap-[30px] lg:mt-10 ">
        <TestionialCards
          imgg={"/images/shulammite.jpg"}
          h4Name="Shulammite Ughojo"
          spanCont="UI/UX and Web designer"
          pCont="I’ve had the privilege of knowing Mr Emmanuel for four months, and during that time, I’ve always been amazed his technical expertise. He is passionate about learning and sharing his knowledge with others."
        />
        <TestionialCards
          imgg={"/images/adetola.jpg"}
          h4Name="Adetola Ayodele"
          spanCont="Accountability Coach"
          pCont="Emmanuel is an amazing guy. He delivers promptly and designs the best websites. If you ever need the service of a professional web designer, he's your go-to person."
        />

        <TestionialCards
          imgg={"/images/ojovictor.jpg"}
          h4Name="Victor Ojo"
          spanCont="Visionary of Charisfolks"
          pCont="Mr Emmanuel's expertise is world-class. He is also very diligent and honest. He did a great job designing our website charisfolks.org and delivered on time."
        />
      </div>
      <div className="flex justify-center w-full">
        <button className="testi-cta teaser-btn btn w-[50%] md:w-[30%] px-[30px] py-[20px] rounded-[10px] font-bold my-4 bg-accent text-secondary dark:bg-primaryGreen dark:text-accent ">
          Download CV
        </button>
      </div>
      {/* <TrustedBy /> */}
    </section>
  );
};
