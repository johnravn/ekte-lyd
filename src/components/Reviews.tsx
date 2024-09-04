import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import ReviewProfile from "./ReviewProfile";
import haraldPortrett from "../assets/images/haraldPortrett.jpeg";
import oleFredrikPortrett from "../assets/images/oleFredrikPortrett.jpeg";
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
      text: "Applaus! film&tv leverer streaming- og eventtjenester og har valgt ekte lyd som en fast og foretrukket leverandør av lydteknikk. Medarbeiderne i ekte lyd er alltid klar til å yte det lille ekstra når det koker på et arrangement, de er strukturerte, pålitelige og er dyktige fagfolk. Kort fortalt er det en stor trygghet å vite at de skal være med på jobb!",
    },
    {
      name: "Ole Fredrik Norbye",
      title: "Programansvarlig Master i utøvende musikk",
      company: "NLA Høgskolen",
      image: oleFredrikPortrett,
      text: "Ekte lyd har levert lyd til både eksamener og  annen undervisning hos oss. De er alltid godt forberedt, alltid i godt humør og lyden låter nydelig! I tillegg er de svært fleksible og løsningsorienterte på endringer som måtte oppstå på kort varsel. Med ekte lyd som teknisk ansvarlige har vi alltid lave skuldre og jeg kan gi dem mine beste anbefalinger.",
    },
  ];

  if (size.width != null) {
    if (size.width > 1100) {
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
                fontFamily={"'Roboto', monospace"}
                fontSize={"26px"}
                align={"left"}
              >
                {reviewData[0].text}
              </Text>
              <Image src={quoteIcon} />
            </HStack>
          </HStack>
          <HStack spacing={"42px"}>
            <HStack spacing={"42px"} align={"start"}>
              <Image src={quoteIcon} />
              <Text
                fontFamily={"'Roboto', sans-serif"}
                fontSize={"26px"}
                align={"left"}
              >
                {reviewData[1].text}
              </Text>
            </HStack>
            <ReviewProfile
              name={reviewData[1].name}
              title={reviewData[1].title}
              company={reviewData[1].company}
              image={reviewData[1].image}
            />
          </HStack>
        </VStack>
      );
    } else {
      return (
        <VStack spacing={"90px"}>
          <VStack spacing={"41px"} w="87vw">
            <Box
              w={"100%"}
              display={"inline-flex"}
              justifyContent={"flex-start"}
            >
              <Image src={quoteIcon} />
            </Box>
            <Text
              fontFamily={"'Roboto', sans-serif"}
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
          <VStack spacing={"41px"} w="87vw">
            <Box w={"100%"} display={"inline-flex"} justifyContent={"flex-end"}>
              <Image src={quoteIcon} />
            </Box>
            <Text
              fontFamily={"'Roboto', sans-serif"}
              fontSize={"23px"}
              fontWeight={"500"}
              align={"left"}
            >
              {reviewData[1].text}
            </Text>
            <ReviewProfile
              name={reviewData[1].name}
              title={reviewData[1].title}
              company={reviewData[1].company}
              image={reviewData[1].image}
            />{" "}
          </VStack>
        </VStack>
      );
    }
  }
}
