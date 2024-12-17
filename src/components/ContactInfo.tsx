import {
  HStack,
  Image,
  Link,
  Text,
  VStack,
  useClipboard,
  IconButton,
  useToast,
} from "@chakra-ui/react";

import { CopyIcon, CheckIcon } from "@chakra-ui/icons";

import phoneIcon from "../assets/images/phoneIcon.svg";
import emailIcon from "../assets/images/emailIcon.svg";
import houseIcon from "../assets/images/houseIcon.svg";
import numberIcon from "../assets/images/numberIcon.svg";

export default function ContactInfo() {
  const orgNr = "932340321";
  const { onCopy, hasCopied } = useClipboard(orgNr);
  const toast = useToast();

  function handleCopy() {
    onCopy();
    toast({
      title: "Org.nr kopiert til utklippstavle",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  }

  return (
    <>
      <VStack spacing={"37px"} p={"0 12px"}>
        <Text className="sectionHeader" as={"h2"}>
          Kontakt
        </Text>
        <HStack spacing={"20px"}>
          <Image src={phoneIcon} h={"30px"} />
          <Link
            fontFamily={"'Roboto', sans-serif"}
            fontWeight={400}
            fontStyle={"normal"}
            fontSize={"25px"}
            href={"tel:004795721220"}
            target="_blank"
          >
            +47 957 21 220
          </Link>
        </HStack>
        <HStack spacing={"20px"}>
          <Image src={emailIcon} h={"22px"} />
          <Link
            fontFamily={"'Roboto', sans-serif"}
            fontWeight={400}
            fontStyle={"normal"}
            fontSize={"25px"}
            href={"mailto:post@ektelyd.no"}
            target="_blank"
          >
            post@ektelyd.no
          </Link>
        </HStack>
        <HStack spacing={"20px"}>
          <Image src={houseIcon} h={"25px"} />
          <Link
            fontFamily={"'Roboto', sans-serif"}
            fontWeight={400}
            fontStyle={"normal"}
            fontSize={"25px"}
            href={"https://g.co/kgs/oG6jwia"}
            target="_blank"
          >
            Kleivveien 15C
          </Link>
        </HStack>
        <HStack spacing={"20px"}>
          <Image src={numberIcon} h={"25px"} />
          <HStack spacing={"5px"}>
            <Link
              fontFamily={"'Roboto', sans-serif"}
              fontWeight={400}
              fontStyle={"normal"}
              fontSize={"25px"}
              href="https://www.proff.no/selskap/ekte-lyd-as/oslo/underholdning-og-arrang%C3%B8rtjenester/IFF3AE907QQ"
              target="_blank"
            >
              932 340 321
            </Link>
            <IconButton
              onClick={handleCopy}
              icon={
                hasCopied ? (
                  <CheckIcon color={"#f9f9f9"} />
                ) : (
                  <CopyIcon color={"#f9f9f9"} />
                )
              }
              aria-label="Copy"
              variant={"ghost"}
              _hover={{ bg: "rgba(130, 130, 130,.15)" }}
              _active={{ bg: "rgba(130,130,130,.15)" }}
            />
          </HStack>
        </HStack>
      </VStack>
    </>
  );
}
