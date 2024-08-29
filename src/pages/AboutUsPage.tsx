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
        <Paragraph
          title="Hvem er ekte lyd?"
          text="Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex."
        />
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
        <Paragraph
          title="Hva er ekte lyd?"
          text="Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus."
        />
        <Values />
        <Film />
        <ContactInfo />
        <Footer />
      </VStack>
    </>
  );
}
