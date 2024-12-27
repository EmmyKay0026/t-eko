import React from "react";
import TitleText from "../molecules/TitleText";
import Blurb from "../molecules/Blurb";
import { myServices } from "@/constants/myServices";

const Services = () => {
  return (
    <section className=" py-[40px] px-[20px] md:px-[50px] lg:px-[70px]">
      <TitleText
        smallHeading="My Services"
        largeHeading="The solution you need"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
        {myServices.map((item, index) => (
          <Blurb
            key={index}
            image={item.image}
            heading={item.heading}
            body={item.body}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
