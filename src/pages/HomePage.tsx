import { VStack } from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import GetToKnowUs from "../components/GetToKnowUs";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
// import Partners from "../components/Partners";
import Reviews from "../components/Reviews";
import WhatWeDo from "../components/WhatWeDo";

export default function HomePage() {
  // const today = new Date();
  // // Date(year, month, day, hour, minute, second)
  // const targetDate = new Date(2024, 8, 4, 0, 59, 0); // Set this to release date
  // const targetDateCorrect = new Date(targetDate);
  // targetDateCorrect.setHours(targetDateCorrect.getHours() + 2);
  // const targetDateCorrectString = targetDateCorrect.toUTCString().slice(0, -4);

  return (
    <>
      <div className="smlBackground"></div>
      <>
        <VStack spacing="90px" className="pageContainer">
          <Navbar selectedTag="/" />
          <HeroSection />
          <WhatWeDo />
          {/* <Partners /> */}
          <Reviews />
          <GetToKnowUs />
          <ContactForm />
          <ContactInfo />
          <Footer />
        </VStack>
      </>
    </>
  );
}
