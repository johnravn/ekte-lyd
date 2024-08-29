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
  const responsiveFontSize = { base: "40px", sm: "45px" };

  return (
    <>
      <VStack w={"100%"} overflow={"hidden"}>
        {flip === 0 ? (
          <>
            <VStack spacing={"10px"} align={"start"} p={"10px"}>
              <Text
                fontSize={responsiveFontSize}
                fontWeight={"bold"}
                lineHeight={"70px"}
                as={"h3"}
              >
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
              <Text
                fontSize={responsiveFontSize}
                fontWeight={"bold"}
                lineHeight={"70px"}
                as={"h3"}
              >
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
