import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import ReviewProfile from "./ReviewProfile";
import haraldPortrett from "../assets/images/haraldPortrett.jpeg";
import quoteIcon from "../assets/images/quoteIcon.svg";
import { useWindowSize } from "@uidotdev/usehooks";

interface reviewData {
  name: string;
  title: string;
  company: string;
  image: string;
  text: string;
}

export default function Reviews() {
  const size = useWindowSize();

  const reviewData: reviewData[] = [
    {
      name: "Harald Herland",
      title: "Daglig leder",
      company: "Applaus! film&tv",
      image: haraldPortrett,
      text: "Applaus! film&tv leverer streaming- og eventtjenester og har valgt Ekte Lyd as som en fast og fortrukket leverandør av lydteknikk. Medarbeiderne i Ekte Lyd er alltid klar til å yte det lille ekstra når det koker på et arrangement, de er strukturerte, pålitelige og er dyktige fagfolk. Kort fortalt er det en stor trygghet å vite at de skal være med på jobb!",
    },
  ];

  if (size.width != null) {
    if (size.width > 600) {
      return (
        <VStack spacing={"66px"} w={"1050px"}>
          <HStack spacing={"42px"}>
            <ReviewProfile
              name={reviewData[0].name}
              title={reviewData[0].title}
              company={reviewData[0].company}
              image={reviewData[0].image}
            />
            <HStack spacing={"42px"} align={"start"}>
              <Text
                fontFamily={"'IBM Plex Mono', monospace"}
                fontSize={"23px"}
                fontWeight={"500"}
                align={"left"}
              >
                {reviewData[0].text}
              </Text>
              <Image src={quoteIcon} />
            </HStack>
          </HStack>
        </VStack>
      );
    } else {
      return (
        <VStack spacing={"41px"} w="95vw">
          <Box w={"100%"} display={"inline-flex"} justifyContent={"flex-end"}>
            <Image src={quoteIcon} marginEnd={"20px"} />
          </Box>
          <Text
            fontFamily={"'IBM Plex Mono', monospace"}
            fontSize={"23px"}
            fontWeight={"500"}
            align={"left"}
          >
            {reviewData[0].text}
          </Text>
          <ReviewProfile
            name={reviewData[0].name}
            title={reviewData[0].title}
            company={reviewData[0].company}
            image={reviewData[0].image}
          />{" "}
        </VStack>
      );
    }
  }
}
