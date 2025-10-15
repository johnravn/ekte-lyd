import { Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ToTerms() {
  const handleScrollToTop = () => {
    // const rootDiv = document.getElementById("body");
    const rootDiv = document.body;
    if (rootDiv) {
      rootDiv.scrollTo({
        top: 0,
      });
    }
  };

  return (
    <>
      <VStack spacing={"50px"} maxW={"600px"}>
        <Link to="/Betingelser">
          <Button
            type="submit"
            fontFamily={"'Roboto', sans-serif"}
            fontWeight={500}
            fontStyle={"normal"}
            fontSize={"19px"}
            bgColor={"#0a0a0a"}
            color={"#f9f9f9"}
            borderWidth={"1px"}
            borderColor={"#f9f9f9"}
            h={"49px"}
            onClick={handleScrollToTop}
            sx={{
              _hover: {
                bg: "#303030",
              },
            }}
          >
            Se våre utleiebetingelser
          </Button>
        </Link>
      </VStack>
    </>
  );
}
