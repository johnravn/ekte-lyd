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
  return (
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
  );
}
