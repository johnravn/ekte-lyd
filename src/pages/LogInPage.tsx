import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";

export default function LogInPage() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <VStack spacing="90px">
        <Navbar selectedTag="/LoggInn" />
        <VStack spacing="30px">
          <Text as={"h1"} className="sectionHeader">
            Logg inn
          </Text>
          <Input w={"320px"} placeholder="E-post"></Input>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Skriv inn passord"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button>LOGG INN</Button>
        </VStack>
        <Footer />
      </VStack>
    </>
  );
}
