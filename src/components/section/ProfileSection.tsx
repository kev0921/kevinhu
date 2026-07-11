import React from "react";
import {
  Box,
  Heading,
  Avatar,
  Link,
  Flex,
  ButtonGroup,
  Button,
  Text,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { resume } from "../../constant";
import SocialButton from "../SocialButton";
import { BiPhoneCall } from "react-icons/bi";
import SpotifySection from "./SpotifySection";
import { SpotifySong } from "../../types/spotify";
import { MotionFlex, MotionBox } from "../../utils/motion";

interface IProfileSection {
  song: SpotifySong;
}

const ProfileSection: React.FC<IProfileSection> = ({ song }) => {
  return (
    <Box>
      <MotionFlex
        alignItems="center"
        justifyContent="space-between"
        opacity="0"
        initial={{
          opacity: 0,
          translateY: 30,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 0.6,
          },
        }}
      >
        <VStack align="start" spacing={3} flex={1}>
          <Heading
            as="h1"
            fontSize={{ base: "32px", md: "44px", lg: "54px" }}
            fontWeight="800"
            letterSpacing="-0.03em"
            lineHeight="1.1"
          >
            Hey, I'm{" "}
            <Box
              as="span"
              bgGradient="linear(to-r, #7c5cff, #5b9cff)"
              bgClip="text"
            >
              Kevin
            </Box>
            {" "}
            <span className="waving-hand">👋</span>
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="400"
            lineHeight="1.7"
            color={useColorModeValue("gray.600", "whiteAlpha.700")}
            maxW="520px"
          >
            Software engineer intern exploring new technologies and frameworks.
            In my free time, I enjoy basketball, running, and music.
          </Text>
        </VStack>

        <MotionBox
          whileHover={{ scale: 1.08, rotate: 3 }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
          ml={6}
          display={{ base: "none", md: "block" }}
        >
          <Avatar
            name="Kevin Hu"
            src="/profile_picture.png"
            size="2xl"
            border="3px solid"
            borderColor={useColorModeValue(
              "rgba(120, 80, 255, 0.25)",
              "rgba(120, 80, 255, 0.35)"
            )}
            boxShadow="0 0 40px rgba(120, 80, 255, 0.2)"
          />
        </MotionBox>
      </MotionFlex>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, type: "spring", stiffness: 200, damping: 20 },
        }}
      >
        <HStack mt={5} spacing={3} flexWrap="wrap">
          <SocialButton social={resume} />
          <Link href={"/contact"} style={{ textDecoration: "none" }}>
            <Button
              size="sm"
              bgGradient="linear(to-r, #7c5cff, #5b9cff)"
              color="white"
              rounded="full"
              px={5}
              leftIcon={<BiPhoneCall />}
              _hover={{
                bgGradient: "linear(to-r, #6b4ced, #4a8bff)",
                transform: "scale(1.05) translateY(-1px)",
                boxShadow: "0 8px 25px rgba(120, 80, 255, 0.35)",
              }}
              transition="all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
            >
              Contact Me
            </Button>
          </Link>
        </HStack>
      </MotionBox>

      <Box mt={6}>
        <SpotifySection song={song} />
      </Box>
    </Box>
  );
};

export default ProfileSection;
