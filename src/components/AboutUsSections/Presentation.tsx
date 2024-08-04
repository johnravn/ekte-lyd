import {
  Center,
  HStack,
  Image,
  Link,
  Spacer,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";

import phoneIcon from "../../assets/images/phoneIcon.svg";
import emailIcon from "../../assets/images/emailIcon.svg";

interface Props {
  name: string;
  phone: string;
  mail: string;
  image: string;
}

export default function Presentation({ name, phone, mail, image }: Props) {
  const altText: string = "Portrettbilde av " + name;
  const telLink: string = "tel:" + phone;
  const mailLink: string = "mailto:" + mail;

  return (
    <>
      <Wrap
        w={{ base: "90vw", xl: "900px" }}
        flexFlow={"row-wrap"}
        align={"center"}
        justify={"center"}
      >
        <Center w={{ base: "100vw", lg: "auto" }}>
          <VStack spacing={"68px"}>
            <Text className="sectionHeader">{name}</Text>
            <VStack spacing={"30px"}>
              <HStack spacing={"20px"}>
                <Image src={phoneIcon} h={"55px"} />
                <Link
                  fontFamily={"'IBM Plex Mono', sans-serif"}
                  fontWeight={500}
                  fontStyle={"normal"}
                  fontSize={"30px"}
                  href={telLink}
                >
                  {phone}
                </Link>
              </HStack>
              <HStack spacing={"20px"}>
                <Image src={emailIcon} h={"40px"} />
                <Link
                  fontFamily={"'IBM Plex Mono', sans-serif"}
                  fontWeight={500}
                  fontStyle={"normal"}
                  fontSize={"30px"}
                  href={mailLink}
                >
                  {mail}
                </Link>
              </HStack>
            </VStack>
          </VStack>
        </Center>
        <Spacer />
        <Center w={{ base: "100vw", lg: "auto" }}>
          <Image src={image} alt={altText}></Image>
        </Center>
      </Wrap>
    </>
  );
}
