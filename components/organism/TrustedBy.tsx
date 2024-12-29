import React from "react";
import TitleText from "../molecules/TitleText";
import Image from "next/image";

const TrustedBy = () => {
  const logoImg = [
    "/images/logo/charisfolklogo.png",
    "/images/logo/dyenlogo.png",
    "/images/logo/leerys.png",
    "/images/logo/amplity.png",
    "/images/logo/charisfolksacademy.png",
    "/images/logo/gravid.png",
    "/images/logo/aiti.png",
    "/images/logo/snapbrillia.png",
  ];
  return (
    <section className="px-[20px] md:px-[50px] lg:px-[70px] py-[15px]">
      <TitleText
        smallHeading="Trusted By"
        largeHeading="Some brands I have worked with"
      />
      <div className="flex flex-wrap items-center gap-6 ">
        {logoImg.map((item, index) => (
          <div key={index} className="ha-[200px] overflow-clip w-[10%] ">
            <Image
              src={item}
              alt=""
              className="saturate-100 hover:saturate-100 w-full "
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
