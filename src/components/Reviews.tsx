import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import ReviewProfile from "./ReviewProfile";
import haraldPortrett from "../assets/images/haraldPortrett.jpeg";
import quoteIcon from "../assets/images/quoteIcon.svg";

export default function Reviews() {
  return (
    <>
      <VStack spacing={"66px"} w={"1050px"}>
        <HStack spacing={"42px"}>
          <ReviewProfile
            name="Harald Herland"
            title="Daglig leder"
            company="Applaus! film&tv"
            image={haraldPortrett}
          />
          <HStack spacing={"42px"} align={"start"}>
            <Text
              fontFamily={"'IBM Plex Mono', monospace"}
              fontSize={"23px"}
              fontWeight={"500"}
              align={"left"}
            >
              Applaus! film&tv leverer streaming- og eventtjenester og har valgt
              Ekte Lyd as som en fast og fortrukket leverandør av lydteknikk.
              Medarbeiderne i Ekte Lyd er alltid klar til å yte det lille ekstra
              når det koker på et arrangement, de er strukturerte, pålitelige og
              er dyktige fagfolk. Kort fortalt er det en stor trygghet å vite at
              de skal være med på jobb!
            </Text>
            <Image src={quoteIcon} />
          </HStack>
        </HStack>
      </VStack>
    </>
  );
}
