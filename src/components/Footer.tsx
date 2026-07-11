import React from "react";
import {
  Stack,
  IconButton,
  Link,
  Box,
  Text,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import Script from "next/script";
import { siteConfig } from "../constant";

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true,
};

const Footer = () => {
  return (
    <Stack
      as="footer"
      isInline
      spacing={[1, 2]}
      p={4}
      pt={16}
      pb={8}
      justifyContent="space-between"
      alignItems="center"
      w={["100%", "90%", "90%"]}
      maxW="container.lg"
      mx="auto"
    >
      <Flex
        flexDirection={["column", "column", "row"]}
        flexFlow={["column-reverse", "column-reverse"]}
        justifyContent={["center", "space-between"]}
        alignItems="center"
        w="100%"
      >
        <Text
          textAlign="center"
          fontSize="xs"
          fontWeight="500"
          letterSpacing="0.04em"
          color={useColorModeValue("gray.400", "whiteAlpha.400")}
        >
          © {new Date().getFullYear()} Kevin Hu
        </Text>

        <Box textAlign="center" fontSize="sm">
          <Box
            as="div"
            data-webring="ca"
            data-member={siteConfig.webringMember}
          />
        </Box>

        <Box textAlign="center">
          {siteConfig.author.accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              aria-label={sc.name}
              href={sc.url}
              colorScheme={sc.type}
              icon={sc.icon}
              {...iconProps}
              _hover={{
                transform: "scale(1.15) translateY(-2px)",
              }}
              transition="all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
            />
          ))}
        </Box>
      </Flex>
      <Script src="https://webring.ca/embed.js" strategy="afterInteractive" />
    </Stack>
  );
};

export default Footer;
