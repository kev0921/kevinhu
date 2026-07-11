import React from "react";
import { Link, Button, useColorModeValue } from "@chakra-ui/react";
import { Social } from "../types/social";

interface ISocialButton {
  social: Social;
}

const SocialButton: React.FC<ISocialButton> = ({ social }) => {
  return (
    <Link href={social.href} isExternal style={{ textDecoration: "none" }}>
      <Button
        size="sm"
        rounded="full"
        px={5}
        leftIcon={social.icon}
        bg={useColorModeValue(
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.08)"
        )}
        border="1px solid"
        borderColor={useColorModeValue(
          "rgba(255, 255, 255, 0.7)",
          "rgba(255, 255, 255, 0.12)"
        )}
        color={useColorModeValue("gray.700", "whiteAlpha.900")}
        sx={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
        _hover={{
          bg: useColorModeValue(
            "rgba(255, 255, 255, 0.8)",
            "rgba(255, 255, 255, 0.14)"
          ),
          transform: "scale(1.05) translateY(-1px)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
        transition="all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
      >
        {social.name}
      </Button>
    </Link>
  );
};

export default SocialButton;
