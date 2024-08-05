import { HStack, Image, Link, Text, VStack } from "@chakra-ui/react";

import phoneIcon from "../assets/images/phoneIcon.svg";
import emailIcon from "../assets/images/emailIcon.svg";
import houseIcon from "../assets/images/houseIcon.svg";
import numberIcon from "../assets/images/numberIcon.svg";

export default function ContactInfo() {
  return (
    <>
      <VStack spacing={"37px"}>
        <Text className="sectionHeader">Kontakt</Text>
        <HStack spacing={"20px"}>
          <Image src={phoneIcon} h={"47px"} />
          <Link
            fontFamily={"'IBM Plex Mono', sans-serif"}
            fontWeight={500}
            fontStyle={"normal"}
            fontSize={"24px"}
            href={"tel:004795721220"}
            target="_blank"
          >
            +47 957 21 220
          </Link>
        </HStack>
        <HStack spacing={"20px"}>
          <Image src={emailIcon} h={"35px"} />
          <Link
            fontFamily={"'IBM Plex Mono', sans-serif"}
            fontWeight={500}
            fontStyle={"normal"}
            fontSize={"24px"}
            href={"mailto:post@ektelyd.no"}
            target="_blank"
          >
            post@ektelyd.no
          </Link>
        </HStack>
        <HStack spacing={"20px"}>
          <Image src={houseIcon} h={"37px"} />
          <Link
            fontFamily={"'IBM Plex Mono', sans-serif"}
            fontWeight={500}
            fontStyle={"normal"}
            fontSize={"24px"}
            href={"https://g.co/kgs/oG6jwia"}
            target="_blank"
          >
            Kleivveien 15C
          </Link>
        </HStack>
        <HStack spacing={"20px"}>
          <Image src={numberIcon} h={"35px"} />
          <Link
            fontFamily={"'IBM Plex Mono', sans-serif"}
            fontWeight={500}
            fontStyle={"normal"}
            fontSize={"24px"}
            href="https://www.proff.no/selskap/ekte-lyd-as/oslo/underholdning-og-arrang%C3%B8rtjenester/IFF3AE907QQ"
            target="_blank"
          >
            932 340 321
          </Link>
        </HStack>
      </VStack>
    </>
  );
}
