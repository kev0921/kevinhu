import React from "react";
import {
  LinkBox,
  IconButton,
  LinkOverlay,
  Text,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { MotionBox } from "../utils/motion";
import { TechStack } from "../types/social";

interface IStackCard {
  stack: TechStack;
}

const StackCard: React.FC<IStackCard> = ({ stack }) => {
  return (
    <MotionBox
      whileHover={{ y: -4, scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <LinkBox
        as="article"
        w="100%"
        px={4}
        py={2}
        borderRadius="20px"
        cursor="pointer"
        display="flex"
        overflow="hidden"
        role="group"
        bg={useColorModeValue(
          "rgba(255, 255, 255, 0.5)",
          "rgba(255, 255, 255, 0.06)"
        )}
        border="1px solid"
        borderColor={useColorModeValue(
          "rgba(255, 255, 255, 0.7)",
          "rgba(255, 255, 255, 0.1)"
        )}
        sx={{
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
        _hover={{
          borderColor: useColorModeValue(
            "rgba(120, 80, 255, 0.3)",
            "rgba(120, 80, 255, 0.4)"
          ),
          bg: useColorModeValue(
            "rgba(255, 255, 255, 0.7)",
            "rgba(255, 255, 255, 0.1)"
          ),
          boxShadow: "0 8px 32px rgba(120, 80, 255, 0.12)",
        }}
        transition="all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
      >
        <Flex alignItems="center" gap={3} minW={0} w="100%">
          <IconButton
            as="a"
            aria-label={stack?.name}
            _groupHover={{ color: "#7c5cff" }}
            icon={stack?.icon}
            variant="ghost"
            size="sm"
            rounded="full"
            flexShrink={0}
            transition="color 0.2s"
          />
          <LinkOverlay href={stack?.url} rel="noopener" isExternal minW={0} flex={1}>
            <Text
              fontSize="sm"
              fontWeight="600"
              _groupHover={{ color: "#7c5cff" }}
              transition="color 0.2s"
              noOfLines={1}
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {stack?.name}
            </Text>
          </LinkOverlay>
        </Flex>
      </LinkBox>
    </MotionBox>
  );
};

export default StackCard;
