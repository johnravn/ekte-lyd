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

  const [showError, setShowError] = React.useState(false);
  const handleLogin = () => setShowError(true);

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
              <Button
                h="1.75rem"
                w="4rem"
                size="sm"
                bgColor={"#0a0a0a"}
                color={"#f9f9f9"}
                borderWidth={"1px"}
                fontFamily={"'Roboto', sans-serif"}
                fontWeight={500}
                fontStyle={"normal"}
                onClick={handleClick}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            fontFamily={"'Roboto', sans-serif"}
            fontWeight={500}
            fontStyle={"normal"}
            fontSize={"19px"}
            bgColor={"#0a0a0a"}
            color={"#f9f9f9"}
            borderWidth={"2px"}
            borderColor={"#f9f9f9"}
            onClick={handleLogin}
            h={"49px"}
            w={"133px"}
            sx={{
              _hover: {
                bg: "#303030",
              },
            }}
          >
            LOGG INN
          </Button>
          <Text color={"red.300"} display={showError ? "inline" : "none"}>
            Feil brukernavn eller passord
          </Text>
        </VStack>
        <Footer />
      </VStack>
    </>
  );
}
