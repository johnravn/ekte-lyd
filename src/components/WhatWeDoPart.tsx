import { Image, Spacer, Text, VStack, Wrap } from "@chakra-ui/react";

interface Props {
  title: string;
  underTitle: string;
  image: string;
  flip: number;
  altTxt: string;
}

export default function WhatWeDoPart({
  title,
  underTitle,
  image,
  flip,
  altTxt,
}: Props) {
  return (
    <>
      <Wrap
        flexFlow={"row-wrap"}
        justify={"center"}
        align={"center"}
        p={"45px"}
        w={"93%"}
      >
        {flip === 0 ? (
          <>
            <VStack spacing={"10px"} align={"start"}>
              <Text
                fontSize={"50px"}
                fontWeight={"bold"}
                lineHeight={"70px"}
                as={"h3"}
              >
                {title}
              </Text>
              <Text fontSize={"22px"} lineHeight={"29px"}>
                {underTitle}
              </Text>
            </VStack>
            <Spacer />
            <Image src={image} h={"367px"} alt={altTxt} />
          </>
        ) : (
          <>
            <Image src={image} h={"367px"} alt={altTxt} />
            <Spacer />
            <VStack spacing={"10px"} align={"end"}>
              <Text
                fontSize={"50px"}
                fontWeight={"bold"}
                lineHeight={"70px"}
                as={"h3"}
              >
                {title}
              </Text>
              <Text fontSize={"22px"} lineHeight={"29px"}>
                {underTitle}
              </Text>
            </VStack>
          </>
        )}
      </Wrap>
    </>
  );
}
