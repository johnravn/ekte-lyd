import { Text, VStack } from "@chakra-ui/react";

export default function Film() {
  return (
    <>
      <VStack spacing={"40px"}>
        <Text className="sectionHeader" as={"h2"}>
          Promofilm
        </Text>
        <iframe
          id="promofilm"
          src="https://www.youtube.com/embed/p6uXrz0SUw4?si=AlSvXN1OFyXDV6Z6"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </VStack>
    </>
  );
}
