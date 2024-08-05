import { Image, Spacer, Text, VStack, Wrap } from "@chakra-ui/react";

interface Props {
  title: string;
  underTitle: string;
  image: string;
  flip: number;
}

export default function WhatWeDoPart({
  title,
  underTitle,
  image,
  flip,
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
              <Text fontSize={"50px"} fontWeight={"bold"} lineHeight={"70px"}>
                {title}
              </Text>
              <Text fontSize={"22px"} lineHeight={"29px"}>
                {underTitle}
              </Text>
            </VStack>
            <Spacer />
            <Image src={image} h={"367px"} />
          </>
        ) : (
          <>
            <Image src={image} h={"367px"} />
            <Spacer />
            <VStack spacing={"10px"} align={"end"}>
              <Text fontSize={"50px"} fontWeight={"bold"} lineHeight={"70px"}>
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
