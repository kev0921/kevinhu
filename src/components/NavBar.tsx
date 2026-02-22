/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  Flex,
  IconButton,
  HStack,
  Box,
  Stack,
  Link as CharkaLink,
  useColorModeValue,
  Avatar,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useDisclosure } from "@chakra-ui/hooks";
import { HamburgerIcon, CloseIcon} from "@chakra-ui/icons";
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
          <CharkaLink
            href={link.route}
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("gray.100", "whiteAlpha.100"),
              color: "blue.400",
            }}
            bg={
              link.route === asPath
                ? useColorModeValue("blue.50", "whiteAlpha.100")
                : "none"
            }
            color={
              link.route === asPath
                ? "blue.400"
                : useColorModeValue("gray.700", "gray.300")
            }
            fontWeight={link.route === asPath ? "semibold" : "medium"}
            transition="all 0.2s"
            onClick={isOpen ? onClose : onOpen}
          >
            {link.name}
          </CharkaLink>
        </NextLink>
      ))}
    </>
  );

  return (
    <>
      <Box
        position="sticky"
        top={0}
        zIndex={10}
        bg={useColorModeValue("rgba(255,255,255,0.85)", "rgba(17,24,39,0.85)")}
        sx={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
        px={4}
        borderBottom="1px solid"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={["95%", "95%", "95%"]}
          maxW={"container.lg"}
          mx="auto"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={["inherit", "inherit", "none"]}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Avatar
              as={CharkaLink}
              size="sm"
              href="/"
              src="/profile_picture.png"
              _hover={{ borderColor: "blue.500" }}
            />
            <HStack as="nav" spacing="4" display={{ base: "none", md: "flex" }}>
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
            w={["100%", "100%", "80%"]}
            maxW={"container.lg"}
            display={["inherit", "inherit", "none"]}
          >
            <Stack as={"nav"} spacing={4}>
              {navItem}
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
};

export default NavBar;
