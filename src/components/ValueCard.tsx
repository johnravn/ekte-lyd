import { Text, VStack } from "@chakra-ui/react";

interface Props {
  title: string;
  text: string;
}

export default function ValueCard({ title, text }: Props) {
  return (
    <>
      <VStack
        spacing={"25px"}
        p={"15px"}
        w={"400px"}
        bgColor={"#171717"}
        borderRadius={"20px"}
        className="valueCard"
      >
        <Text className="sectionH3">{title}</Text>
        <Text className="paragraph">{text}</Text>
      </VStack>
    </>
  );
}
