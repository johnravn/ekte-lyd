import { Box, Center, Image } from "@chakra-ui/react";
import logoOnBlack from "../assets/logo/logoOnBlack.svg";
import videoLoop from "../assets/videos/ektelyd_website_hero_loop_720p.mp4";
import poster from "../assets/images/videoPoster.jpeg";

export default function HeroSection() {
  return (
    <>
      <Center w={"100%"} p={"0 12px"}>
        <Image
          src={logoOnBlack}
          w={"360px"}
          // margin={"0 20px"}
          alt="Ekte Lyd Logo"
        />
        <h1 className="hide">Ekte Lyd</h1>
      </Center>
      <Box
        w={{ base: "100vw", "2xl": "1600px" }}
        h={{ base: "200px", sm: "300px", xl: "450px" }}
        overflow={"hidden"}
        display={"block"}
      >
        <video autoPlay loop muted playsInline id="videoLoop" poster={poster}>
          <source src={videoLoop} type="video/mp4" />
        </video>
      </Box>
    </>
  );
}
