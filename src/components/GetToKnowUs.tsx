import { Button, Center, Image, Text, VStack } from "@chakra-ui/react";
import logoOnBlack from "../assets/logo/logoOnBlack.svg";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function GetToKnowUs() {
  const handleScrollToTop = () => {
    // const rootDiv = document.getElementById("body");
    const rootDiv = document.body;
    if (rootDiv) {
      rootDiv.scrollTo({
        top: 0,
      });
    }
  };

  return (
    <>
      <VStack spacing={"50px"} maxW={"600px"}>
        <Center w={"100%"} p={"0 12px"}>
          <Image src={logoOnBlack} w={"360px"} alt="Ekte Lyd Logo" />
        </Center>
        <Text
          fontFamily={'"Anonymous Pro", monospace'}
          fontSize={"28px"}
          lineHeight={"28px"}
          fontWeight={"bold"}
          p={"0 8px"}
        >
          Hvem er vi? Hvordan ble vi til? Les mer om oss her!
        </Text>
        <Link to="/OmOss">
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="brandPrimary"
            variant="solid"
            size={"lg"}
            borderRadius={"50px"}
            fontSize={"22px"}
            fontWeight={"normal"}
            bgColor={"#234E70"}
            color={"#f9f9f9"}
            onClick={handleScrollToTop}
          >
            Les mer
          </Button>
        </Link>
      </VStack>
    </>
  );
}
