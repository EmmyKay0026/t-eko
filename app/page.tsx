import Speech from "@/components/atoms/Speech";
import AboutMe from "@/components/organism/AboutMe";
import Services from "@/components/organism/Services";
import Hero from "@/components/organism/Hero";
import Portfolio from "@/components/organism/Portfolio";
import { Testimonial } from "@/components/organism/Testimonial";
import JourneySoFarSummary from "@/components/organism/JourneySoFarSummary";
import AwardCertSummary from "@/components/organism/AwardCertSummary";
import Gallery from "@/components/organism/Gallery";
import Footer from "@/components/organism/Footer";
import TrustedBy from "@/components/organism/TrustedBy";
import Contact from "@/components/organism/Contact";

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
      <Gallery />
      <AwardCertSummary />
      <Contact />
      <Footer />
    </>
  );
}
