import { Text, VStack } from "@chakra-ui/react";

interface Props {
  title?: string;
  text: string;
}

export default function Paragraph({ title, text }: Props) {
  return (
    <>
      <VStack spacing={"37px"}>
        {title != null ? (
          <Text className="sectionHeader" w={"100%"} as={"h1"}>
            {title}
          </Text>
        ) : null}
        <Text className="paragraph" w={{ base: "92vw", xl: "1000px" }}>
          {text}
        </Text>
      </VStack>
    </>
  );
}
