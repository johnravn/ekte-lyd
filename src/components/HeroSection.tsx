import { Box, Center, Image } from "@chakra-ui/react";
import logoOnBlack from "../assets/logo/logoOnBlack.svg";
import videoLoop from "../assets/videos/ektelyd_website_hero_loop_720p.mp4";
import poster from "../assets/images/videoPoster.jpeg";

export default function HeroSection() {
  return (
    <>
      <Center w={"100%"}>
        <Image src={logoOnBlack} w={"360px"} alt="Ekte Lyd Logo"></Image>
      </Center>
      <Box
        w={"1520px"}
        h={{ base: "550px", lg: "450px" }}
        overflow={"hidden"}
        display={"block"}
        // bgColor={"#aa2222"}
      >
        <video autoPlay loop muted id="videoLoop" poster={poster}>
          <source src={videoLoop} type="video/mp4" />
        </video>
      </Box>
    </>
  );
}
