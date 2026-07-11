import React, { useRef, useState } from "react";
import {
  Container,
  Box,
  FormControl,
  FormLabel,
  Flex,
  Button,
  Input,
  Heading,
  Textarea,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import ErrorMessage from "../components/ErrorMessage";
import emailjs from "emailjs-com";
import { MotionBox } from "../utils/motion";
import { BiSend } from "react-icons/bi";

interface IContactPage {
  emailjsServiceId: string;
  emailjsUserId: string;
  templateId: string;
}

const ContactPage: React.FC<IContactPage> = ({
  emailjsServiceId,
  emailjsUserId,
  templateId,
}) => {
  const toast = useToast();
  const form = useRef<HTMLFormElement | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const clearInput = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsLoading(false);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(emailjsServiceId, templateId, form.current!, emailjsUserId)
      .then(
        (result) => {
          clearInput();
          toast({
            title: "Email sent.",
            description:
              "You had successfully sent the email. I will reply your email ASAP. Thank you!",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        },
        (error) => {
          clearInput();
          toast({
            title: "Email not sent.",
            description: error.text,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      );
  };

  const inputBg = useColorModeValue(
    "rgba(255, 255, 255, 0.5)",
    "rgba(255, 255, 255, 0.04)"
  );
  const inputBorder = useColorModeValue(
    "rgba(255, 255, 255, 0.6)",
    "rgba(255, 255, 255, 0.08)"
  );
  const inputFocusBorder = useColorModeValue("#7c5cff", "#a78bfa");
  const subtitleColor = useColorModeValue("gray.500", "whiteAlpha.500");

  return (
    <Container maxW="container.md" mt={["6", "10"]} mb={["6", "10"]} px={[4, 4, 6]}>
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 200, damping: 20 },
        }}
      >
        <Flex width="full" align="center" justifyContent="center">
          <Box
            className="bento-item"
            p={8}
            w="100%"
            bg={useColorModeValue(
              "rgba(255, 255, 255, 0.5)",
              "rgba(255, 255, 255, 0.04)"
            )}
            border="1px solid"
            borderColor={useColorModeValue(
              "rgba(255, 255, 255, 0.7)",
              "rgba(255, 255, 255, 0.08)"
            )}
            sx={{
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
            }}
          >
            <VStack align="start" spacing={2} mb={6}>
              <Heading
                as="h1"
                fontSize={{ base: "28px", md: "36px" }}
                fontWeight="800"
                letterSpacing="-0.03em"
              >
                Get in Touch{" "}
                <Box as="span" fontSize="inherit">
                  💬
                </Box>
              </Heading>
              <Text fontSize="sm" fontWeight="500" color={subtitleColor}>
                Have a question or want to work together? Drop me a message!
              </Text>
            </VStack>

            <Box textAlign="left">
              <form ref={form} onSubmit={sendEmail}>
                {error && <ErrorMessage message={error} />}
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="600"
                      color={subtitleColor}
                    >
                      Name
                    </FormLabel>
                    <Input
                      id="contact-name"
                      name="user_name"
                      type="text"
                      value={name}
                      placeholder="Your Name"
                      size="lg"
                      onChange={(event) =>
                        setName(event.currentTarget.value)
                      }
                      bg={inputBg}
                      border="1px solid"
                      borderColor={inputBorder}
                      borderRadius="16px"
                      _focus={{
                        borderColor: inputFocusBorder,
                        boxShadow: `0 0 0 2px ${inputFocusBorder}40`,
                      }}
                      _hover={{
                        borderColor: useColorModeValue(
                          "rgba(120,80,255,0.2)",
                          "rgba(120,80,255,0.3)"
                        ),
                      }}
                      transition="all 0.25s"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="600"
                      color={subtitleColor}
                    >
                      Email
                    </FormLabel>
                    <Input
                      id="contact-email"
                      name="user_email"
                      type="email"
                      value={email}
                      placeholder="your@email.com"
                      size="lg"
                      onChange={(event) =>
                        setEmail(event.currentTarget.value)
                      }
                      bg={inputBg}
                      border="1px solid"
                      borderColor={inputBorder}
                      borderRadius="16px"
                      _focus={{
                        borderColor: inputFocusBorder,
                        boxShadow: `0 0 0 2px ${inputFocusBorder}40`,
                      }}
                      _hover={{
                        borderColor: useColorModeValue(
                          "rgba(120,80,255,0.2)",
                          "rgba(120,80,255,0.3)"
                        ),
                      }}
                      transition="all 0.25s"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="600"
                      color={subtitleColor}
                    >
                      Message
                    </FormLabel>
                    <Textarea
                      id="contact-message"
                      name="message"
                      value={message}
                      placeholder="Type your message..."
                      size="lg"
                      rows={5}
                      onChange={(event) =>
                        setMessage(event.currentTarget.value)
                      }
                      bg={inputBg}
                      border="1px solid"
                      borderColor={inputBorder}
                      borderRadius="16px"
                      _focus={{
                        borderColor: inputFocusBorder,
                        boxShadow: `0 0 0 2px ${inputFocusBorder}40`,
                      }}
                      _hover={{
                        borderColor: useColorModeValue(
                          "rgba(120,80,255,0.2)",
                          "rgba(120,80,255,0.3)"
                        ),
                      }}
                      transition="all 0.25s"
                    />
                  </FormControl>

                  <MotionBox
                    w="100%"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Button
                      type="submit"
                      value="Send"
                      width="full"
                      mt={2}
                      size="lg"
                      isLoading={isLoading}
                      loadingText="Sending..."
                      bgGradient="linear(to-r, #7c5cff, #5b9cff)"
                      color="white"
                      rounded="16px"
                      leftIcon={<BiSend />}
                      _hover={{
                        bgGradient: "linear(to-r, #6b4ced, #4a8bff)",
                        boxShadow: "0 8px 30px rgba(120, 80, 255, 0.35)",
                      }}
                      transition="all 0.3s"
                    >
                      Send Message
                    </Button>
                  </MotionBox>
                </VStack>
              </form>
            </Box>
          </Box>
        </Flex>
      </MotionBox>
    </Container>
  );
};

export default ContactPage;

export async function getStaticProps() {
  return {
    props: {
      emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
      emailjsUserId: process.env.EMAILJS_USER_ID,
      templateId: process.env.EMAILJS_TEMPLATE_ID,
    },
  };
}
