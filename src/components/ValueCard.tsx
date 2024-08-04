import { Text, VStack } from "@chakra-ui/react";

interface Props {
  title: string;
  text: string;
}

export default function ValueCard({ title, text }: Props) {
  return (
    <>
      <VStack
        spacing={"37px"}
        p={"15px"}
        w={"400px"}
        bgColor={"#171717"}
        borderRadius={"20px"}
      >
        <Text className="sectionHeader">{title}</Text>
        <Text className="paragraph">{text}</Text>
      </VStack>
    </>
  );
}
