/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  Flex,
  IconButton,
  HStack,
  Box,
  Stack,
  Link as ChakraLink,
  useColorModeValue,
  Avatar,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useDisclosure } from "@chakra-ui/hooks";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { menuLinks } from "../constant";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let router = useRouter();
  let { asPath } = router;

  const navItem = (
    <>
      {menuLinks.map((link) => (
        <NextLink href={link.route} key={link.name} passHref>
          <ChakraLink
            href={link.route}
            px={3}
            py={1.5}
            rounded={"full"}
            fontSize="sm"
            letterSpacing="0.01em"
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue(
                "rgba(255,255,255,0.6)",
                "rgba(255,255,255,0.1)"
              ),
              color: useColorModeValue("#4a3aff", "#a78bfa"),
              transform: "scale(1.05)",
            }}
            bg={
              link.route === asPath
                ? useColorModeValue(
                    "rgba(255,255,255,0.7)",
                    "rgba(255,255,255,0.12)"
                  )
                : "transparent"
            }
            color={
              link.route === asPath
                ? useColorModeValue("#4a3aff", "#a78bfa")
                : useColorModeValue("gray.600", "whiteAlpha.800")
            }
            fontWeight={link.route === asPath ? "600" : "500"}
            transition="all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
            onClick={isOpen ? onClose : undefined}
          >
            {link.name}
          </ChakraLink>
        </NextLink>
      ))}
    </>
  );

  return (
    <>
      <Box
        position="sticky"
        top={3}
        zIndex={10}
        mx="auto"
        maxW="container.lg"
        px={4}
        pt={2}
      >
        <Box
          bg={useColorModeValue(
            "rgba(255, 255, 255, 0.55)",
            "rgba(255, 255, 255, 0.06)"
          )}
          sx={{
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
          }}
          px={5}
          py={1}
          borderRadius="full"
          border="1px solid"
          borderColor={useColorModeValue(
            "rgba(255,255,255,0.7)",
            "rgba(255,255,255,0.12)"
          )}
          boxShadow={useColorModeValue(
            "0 4px 30px rgba(0, 0, 0, 0.06)",
            "0 4px 30px rgba(0, 0, 0, 0.3)"
          )}
        >
          <Flex
            h={14}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <IconButton
              size={"sm"}
              icon={isOpen ? <CloseIcon boxSize={3} /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={["inherit", "inherit", "none"]}
              onClick={isOpen ? onClose : onOpen}
              variant="ghost"
              rounded="full"
              _hover={{
                bg: useColorModeValue(
                  "rgba(255,255,255,0.5)",
                  "rgba(255,255,255,0.1)"
                ),
              }}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Avatar
                as={ChakraLink}
                size="sm"
                href="/"
                src="/profile_picture.png"
                border="2px solid"
                borderColor={useColorModeValue(
                  "rgba(120, 80, 255, 0.3)",
                  "rgba(120, 80, 255, 0.4)"
                )}
                _hover={{
                  borderColor: useColorModeValue(
                    "rgba(120, 80, 255, 0.6)",
                    "rgba(120, 80, 255, 0.7)"
                  ),
                  transform: "scale(1.08)",
                }}
                transition="all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
              />
              <HStack
                as="nav"
                spacing="1"
                display={{ base: "none", md: "flex" }}
              >
                {navItem}
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <ColorModeSwitcher justifySelf="flex-end" />
            </Flex>
          </Flex>

          {isOpen && (
            <Box
              pb={4}
              pt={2}
              display={["inherit", "inherit", "none"]}
            >
              <Stack as={"nav"} spacing={2}>
                {navItem}
              </Stack>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
