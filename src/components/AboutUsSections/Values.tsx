import { Text, VStack, Wrap } from "@chakra-ui/react";
import ValueCard from "../ValueCard";

interface ValuesData {
  title: string;
  text: string;
}

export default function Values() {
  const valuesData: ValuesData[] = [
    {
      title: "Kvalitet",
      text: "Vi setter høye krav til kvaliteten på det vi leverer for å sikre profesjonalitet.",
    },
    {
      title: "Integritet",
      text: "For oss er det avgjørende å ha høy integritet i det vi gjør. Alle våre medarbeidere er oppriktige folk med kundens behov i fokus.",
    },
    {
      title: "Fleksibilitet",
      text: "Ulike arrangementer har ulike tekniske behov. Vi strekker oss langt for å sammen oppnå kundens drøm og visjon for arrangementet.",
    },
  ];

  return (
    <>
      <VStack spacing={"37px"}>
        <Text className="sectionHeader" as={"h2"}>
          {" "}
          Våre verdier
        </Text>
        <Wrap spacing={"37px"} justify={"center"} p={"0 12px"}>
          {valuesData.map((value) => (
            <ValueCard title={value.title} text={value.text} />
          ))}
        </Wrap>
      </VStack>
    </>
  );
}
