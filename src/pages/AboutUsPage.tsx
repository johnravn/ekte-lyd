import { VStack } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Presentation from "../components/AboutUsSections/Presentation";
import Values from "../components/AboutUsSections/Values";
import ContactInfo from "../components/ContactInfo";

import havardPortrait from "../assets/images/UseThisHavard-bakgrunn fjernet.png";
import johnPortrait from "../assets/images/UseThisJohn-bakgrunn fjernet.png";
import Paragraph from "../components/Paragraph";
import Film from "../components/Film";

export default function AboutUsPage() {
  return (
    <>
      <VStack spacing="90px" className="pageContainer">
        <Navbar selectedTag="/OmOss" />
        <VStack spacing={"30px"}>
          <Paragraph
            title="Hvem er ekte lyd?"
            text="Lidenskapen for lyd har vokst seg stor hos oss og er sterkt påvirket av musikalsk bakgrunn. Siden 2021 har vi jobbet som frilans lydteknikere i Oslo. Vi er gode kompiser i tillegg til kollegaer og  valgte derfor i 2023 å starte vårt eget firma sammen, Ekte Lyd."
          />
          <Paragraph text="Vi jobber for å levere produksjoner av høy kvalitet, samtidig som vi ønsker å være fleksible overfor kundens behov. Ikke minst ønsker vi å ha integritet, altså at vi er oppriktige folk, har ryddig kommunikasjon og at kundens suksess alltid er det viktigste." />
          <Paragraph text="Om du bare trenger å supplere med litt utstyr, eller om du ønsker prosjektering av teknisk produksjon til eventet ditt, er du hjertelig velkommen til å ta kontakt! En hyggelig prat og litt råd er alltid gratis! Gleder oss til å høre fra deg!" />
        </VStack>
        <Presentation
          name="Håvard Wetteland"
          phone="+47 984 78 083"
          mail="havard@ektelyd.no"
          image={havardPortrait}
        />
        <Presentation
          name="John Ravndal"
          phone="+47 957 21 220"
          mail="john@ektelyd.no"
          image={johnPortrait}
        />
        <Values />
        <Film />
        <ContactInfo />
        <Footer />
      </VStack>
    </>
  );
}
