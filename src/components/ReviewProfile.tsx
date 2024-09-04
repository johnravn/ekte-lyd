import { Box, Image, Text, VStack } from "@chakra-ui/react";

interface Props {
  name: string;
  title: string;
  company: string;
  image: string;
}

export default function ReviewProfile({ name, title, company, image }: Props) {
  const altTxt = "Portrerttbilde av " + name;
  return (
    <>
      <VStack spacing={"12px"}>
        <Box
          w={"166px"}
          h={"166px"}
          position={"relative"}
          overflow={"hidden"}
          borderRadius={"50%"}
        >
          <Image
            src={image}
            margin={"0 auto"}
            height={"110%"}
            width={"110%"}
            objectFit={"cover"}
            alt={altTxt}
          />
        </Box>
        <Text
          fontFamily={'"Anonymous Pro", monospace'}
          fontSize={"25px"}
          w={"200px"}
          lineHeight={"25px"}
        >
          {name}
        </Text>
        <Text
          fontFamily={'"Anonymous Pro", monospace'}
          fontSize={"19px"}
          fontWeight={"bold"}
          lineHeight={"19px"}
        >
          {title}
        </Text>
        <Text
          fontFamily={'"Anonymous Pro", monospace'}
          fontSize={"21px"}
          lineHeight={"21px"}
        >
          {company}
        </Text>
      </VStack>
    </>
  );
}
