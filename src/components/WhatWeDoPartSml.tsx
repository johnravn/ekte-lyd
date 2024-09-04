import { Box, Image, Spacer, Text, VStack } from "@chakra-ui/react";

interface Props {
  title: string;
  underTitle: string;
  imageSml: string;
  flip: number;
  altTxt: string;
}

export default function WhatWeDoPartSml({
  title,
  underTitle,
  imageSml,
  flip,
  altTxt,
}: Props) {
  const responsiveFontSize = { base: "40px", sm: "45px" };

  return (
    <>
      <VStack w={"auto"} overflow={"hidden"}>
        {flip === 0 ? (
          <>
            <VStack spacing={"10px"} align={"start"} p={"20px"} w={"100%"}>
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
            <VStack spacing={"10px"} align={"end"} p={"20px"} w={"100%"}>
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
          <Image src={imageSml} h={"397px"} objectFit={"cover"} alt={altTxt} />
        </Box>
      </VStack>
    </>
  );
}
