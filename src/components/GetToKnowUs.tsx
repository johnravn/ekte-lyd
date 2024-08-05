import { Button, Center, Image, Text, VStack } from "@chakra-ui/react";
import logoOnBlack from "../assets/logo/logoOnBlack.svg";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function GetToKnowUs() {
  return (
    <>
      <VStack spacing={"50px"} maxW={"600px"}>
        <Center w={"100%"}>
          <Image src={logoOnBlack} w={"360px"} alt="Ekte Lyd Logo"></Image>
        </Center>
        <Text
          fontFamily={'"Anonymous Pro", monospace'}
          fontSize={"28px"}
          lineHeight={"28px"}
          fontWeight={"bold"}
        >
          Hvem er ekte lyd? Hvorfor ble det til? Finn ut mer om oss!
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
          >
            Les mer
          </Button>
        </Link>
      </VStack>
    </>
  );
}
