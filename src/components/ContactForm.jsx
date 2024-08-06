import {
  AttachmentIcon,
  ChatIcon,
  EmailIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();
    toast({
      title: "Sender forespørsel",
      description: "Dette tar bare noen sekunder",
      status: "loading",
      duration: 8000,
      isClosable: true,
    });

    emailjs
      .sendForm(
        "service_embs1nr",
        "template_miqk6cq",
        form.current,
        "Xr1SjHXSisuHYDtwg"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.closeAll();
          toast({
            title: "Forespørsel sendt",
            description: "Vi svarer deg så fort vi kan",
            status: "success",
            duration: 8000,
            isClosable: true,
          });
        },
        (error) => {
          console.log(error.text);
          toast.closeAll();
          toast({
            title: "Kunne ikke sende inn forespørsel",
            description: "Ta kontakt om feilen gjenar seg",
            status: "error",
            duration: 8000,
            isClosable: true,
          });
        }
      );
    e.target.reset();
  };

  return (
    <>
      <VStack spacing={"20px"}>
        <Text className="sectionHeader">Send oss en forespørsel</Text>
        <Text className="sectionH2">Helt uforplikende!</Text>
        <form ref={form} onSubmit={sendEmail}>
          <VStack spacing={5} w={{ base: "93vw", sm: "330px" }}>
            <FormControl isRequired>
              <InputGroup>
                <InputRightElement>
                  <ChatIcon />
                </InputRightElement>
                <Input placeholder="Fullt navn" name="name"></Input>
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputRightElement>
                  <EmailIcon />
                </InputRightElement>
                <Input placeholder="E-post" type="email" name="email"></Input>
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputRightElement>
                  <PhoneIcon />
                </InputRightElement>
                <Input
                  placeholder="Mobilnummer"
                  type="tel"
                  name="phone"
                ></Input>
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputRightElement>
                  <AttachmentIcon />
                </InputRightElement>
                <Textarea
                  placeholder="Hva gjelder det?"
                  h={"130px"}
                  name="comment"
                ></Textarea>
              </InputGroup>
            </FormControl>
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
              w={"100px"}
              sx={{
                _hover: {
                  bg: "#303030",
                },
              }}
            >
              SEND
            </Button>
          </VStack>
        </form>
      </VStack>
    </>
  );
}
