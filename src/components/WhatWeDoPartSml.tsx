import { Box, Image, Spacer, Text, VStack } from "@chakra-ui/react";

interface Props {
  title: string;
  underTitle: string;
  imageSml: string;
  flip: number;
}

export default function WhatWeDoPartSml({
  title,
  underTitle,
  imageSml,
  flip,
}: Props) {
  return (
    <>
      <VStack w={"100%"} overflow={"hidden"}>
        {flip === 0 ? (
          <>
            <VStack spacing={"10px"} align={"start"} p={"10px"}>
              <Text fontSize={"50px"} fontWeight={"bold"} lineHeight={"70px"}>
                {title}
              </Text>
              <Text fontSize={"22px"} lineHeight={"29px"} align={"start"}>
                {underTitle}
              </Text>
            </VStack>
          </>
        ) : (
          <>
            <VStack spacing={"10px"} align={"end"} p={"10px"}>
              <Text fontSize={"50px"} fontWeight={"bold"} lineHeight={"70px"}>
                {title}
              </Text>
              <Text fontSize={"22px"} lineHeight={"29px"} align={"end"}>
                {underTitle}
              </Text>
            </VStack>
          </>
        )}
        <Spacer />
        <Box h={"397px"} overflow={"hidden"}>
          <Image src={imageSml} h={"397px"} objectFit={"cover"} />
        </Box>
      </VStack>
    </>
  );
}
