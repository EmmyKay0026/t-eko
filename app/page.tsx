import Speech from "@/components/atoms/Speech";
import AboutMe from "@/components/organism/AboutMe";
import Services from "@/components/organism/Services";
import Hero from "@/components/organism/Hero";
import Portfolio from "@/components/organism/Portfolio";
import { Testimonial } from "@/components/organism/Testimonial";
import JourneySoFarSummary from "@/components/organism/JourneySoFarSummary";

export default function Home() {
  return (
    <>
      <Hero />
      <Speech />
      <AboutMe />
      <Portfolio />
      <Services />
      <Testimonial />
      <JourneySoFarSummary />
    </>
  );
}
