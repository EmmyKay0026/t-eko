import React, { Suspense } from "react";
import JourneySoFarDesktop from "../molecules/JourneySoFarDesktop";
import JourneySoFarMob from "../molecules/JourneySoFarMob";
import TitleText from "../molecules/TitleText";
import AwardCertDesktop from "../molecules/AwardCertDesktop";
import AwardCertMob from "../molecules/AwardCertMob";

const AwardCertSummary = () => {
  return (
    <section className="overflow-x-clip  py-[40px] px-[20px] md:px-[50px] lg:px-[70px] bg-primaryGreen dark:bg-darkGreen  ">
      <TitleText
        smallHeading="Awards and Certification"
        largeHeading="Evidence of My "
        largeClassName="mb-[30px] text-white "
        smallClassName="text-darkGreen dark:text-primaryGreen"
      />
      <Suspense fallback={"loading"}>{/* <AwardCertDesktop /> */}</Suspense>
      <AwardCertMob />
    </section>
  );
};

export default AwardCertSummary;
