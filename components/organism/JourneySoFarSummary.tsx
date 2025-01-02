"use client";
import React, { Suspense } from "react";
import JourneySoFarDesktop from "../molecules/JourneySoFarDesktop";
import JourneySoFarMob from "../molecules/JourneySoFarMob";
import TitleText from "../molecules/TitleText";

const JourneySoFarSummary = () => {
  return (
    <section className="overflow-x-clip  py-[40px] px-[20px] md:px-[50px] lg:px-[70px]  ">
      <TitleText
        smallHeading="My Experiences"
        largeHeading="My Journey So Far"
        largeClassName="mb-[30px]"
      />
      <Suspense fallback={"loading"}>
        <JourneySoFarDesktop />
      </Suspense>
      <JourneySoFarMob />
    </section>
  );
};

export default JourneySoFarSummary;
