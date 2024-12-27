import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

type BlurbProp = {
  image: string | StaticImport;
  heading: string;
  body: string;
};

const Blurb = ({ image, heading, body }: BlurbProp) => {
  return (
    <article className="flex flex-col items-center text-justify  md:text-center">
      <Image src={image} alt="" width={60} height={60} />
      <h3 className="text-black capitalize font-bold text-[1.5rem] my-2 lg:text-[1.8rem] dark:text-white">
        {heading}
      </h3>
      <p className="text-[.9rem] text-secondary dark:text-accent">{body}</p>
    </article>
  );
};

export default Blurb;
