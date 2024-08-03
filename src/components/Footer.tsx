import { Center, Image } from "@chakra-ui/react";
import logoWhite from "../assets/logo/logoWhite.svg";

export default function Footer() {
  return (
    <>
      <Center w={"100%"}>
        <Image src={logoWhite} w={"360px"} alt="Ekte Lyd Logo"></Image>
      </Center>
    </>
  );
}
