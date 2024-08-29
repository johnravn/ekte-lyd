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
      text: "Vi setter høye krav til kvaliteteten på det vi leverer. Dette gjør vi for å sikre kvaliteten på det vi leverer.",
    },
    {
      title: "Integritet",
      text: "For oss er det avgjørende at integritet gjennomsyrer alt vi gjør. Alle folkene vi jobber med er skikkelige folk man kan stole på.",
    },
    {
      title: "Fleksibilitet",
      text: "Alle arrangementer har forskjellige behov. Vi legger til rette for det ditt arrangement trenger.",
    },
  ];

  return (
    <>
      <VStack spacing={"37px"}>
        <Text className="sectionHeader" as={"h2"}>
          {" "}
          Våre Verdier
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
