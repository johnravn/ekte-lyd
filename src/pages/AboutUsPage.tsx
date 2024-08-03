import { VStack } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutUsPage() {
  return (
    <>
      <VStack spacing="90px">
        <Navbar selectedTag="/OmOss" />
        <h1> About us</h1>
        <h1> Page</h1>
        <Footer />
      </VStack>
    </>
  );
}
