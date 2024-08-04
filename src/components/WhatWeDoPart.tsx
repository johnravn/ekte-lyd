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
      >
        <VStack>
          <Text>{title}</Text>
          <Text>{underTitle}</Text>
        </VStack>
        <Spacer />
        <Image src={image} />
      </Wrap>
    </>
  );
}
