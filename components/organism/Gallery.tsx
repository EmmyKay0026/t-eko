import Image from "next/image";
import React from "react";
import TitleText from "../molecules/TitleText";

const Gallery = () => {
  const imgGallery = [
    "/images/gallery/p1.jpg",
    "/images/gallery/p2.png",
    "/images/gallery/p3.jpg",
    "/images/gallery/p4.png",
    "/images/gallery/p5.png",
    "/images/gallery/p6.jpg",
    "/images/gallery/p7.jpg",
    "/images/gallery/p8.jpg",
    "/images/gallery/p9.png",
    "/images/gallery/p10.png",
  ];
  return (
    <section className=" py-[40px] px-[20px] md:px-[50px] lg:px-[70px]">
      <TitleText
        smallHeading="Gallery"
        largeHeading="Living each day at a time"
        largeClassName="mb-[30px]"
      />
      <div className="grid grid-cols-3 ">
        {imgGallery.map((item, index) => (
          <div key={index} className="h-[200px] overflow-clip">
            <Image
              src={item}
              alt=""
              className="saturate-0 hover:saturate-100"
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
