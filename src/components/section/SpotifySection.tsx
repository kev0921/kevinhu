import React from "react";
import {
  LinkBox,
  LinkOverlay,
  Flex,
  Image,
  Text,
  Heading,
  VStack,
  HStack,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { MotionBox } from "../../utils/motion";
import { SiSpotify } from "react-icons/si";
import { SpotifySong } from "../../types/spotify";

interface ISpotifySection {
  song: SpotifySong;
}

const MusicWave = () => (
  <div className="music-wave">
    {[0.2, 0.4, 0.1, 0.35, 0.25].map((delay, i) => (
      <div
        key={i}
        className="bar"
        style={
          {
            "--delay": `${delay}s`,
            "--duration": `${0.5 + Math.random() * 0.3}s`,
          } as React.CSSProperties
        }
      />
    ))}
  </div>
);

const SpotifySection: React.FC<ISpotifySection> = ({ song }) => {
  return (
    <MotionBox
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
    >
      <LinkBox
        className="glass-panel bento-item"
        p={5}
        display={{ md: "flex" }}
        cursor="pointer"
        _hover={{
          borderColor: "rgba(30, 215, 96, 0.4)",
          boxShadow: "0 8px 32px rgba(30, 215, 96, 0.15)",
        }}
      >
        <LinkOverlay
          href={song?.isPlaying ? song?.songUrl : undefined}
          rel="noopener"
          isExternal
        >
          <VStack align="start" spacing={3} w="100%">
            <HStack spacing={2}>
              <SiSpotify size={18} color={"#1ED760"} />
              <Text
                fontSize="xs"
                fontWeight="600"
                letterSpacing="0.06em"
                textTransform="uppercase"
                color={useColorModeValue("gray.500", "whiteAlpha.600")}
              >
                {song?.isPlaying ? "Now Playing" : "Spotify"}
              </Text>
              {song?.isPlaying && <MusicWave />}
            </HStack>

            <Flex
              alignItems="center"
              direction={["column", "column", "row"]}
              gap={4}
              w="100%"
            >
              {song?.isPlaying ? (
                <Image
                  src={song?.albumImageUrl}
                  alt={song?.album}
                  objectFit="cover"
                  boxSize="64px"
                  borderRadius="16px"
                  flexShrink={0}
                  fallback={<SiSpotify size={48} color={"#1ED760"} />}
                />
              ) : (
                <Box
                  w="64px"
                  h="64px"
                  borderRadius="16px"
                  bg={useColorModeValue(
                    "rgba(30, 215, 96, 0.08)",
                    "rgba(30, 215, 96, 0.1)"
                  )}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}
                >
                  <SiSpotify size={32} color={"#1ED760"} />
                </Box>
              )}

              <VStack align="start" spacing={0} flex={1} minW={0}>
                <Heading
                  as="h3"
                  fontSize="md"
                  fontWeight="700"
                  noOfLines={1}
                  bgGradient="linear(to-r, #1ED760, #1DB954)"
                  bgClip="text"
                >
                  {song?.isPlaying ? song?.title : "Not Listening"}
                </Heading>
                <Text
                  fontSize="sm"
                  noOfLines={1}
                  color={useColorModeValue("gray.500", "whiteAlpha.600")}
                >
                  {song?.isPlaying ? song?.artist : "Spotify"}
                </Text>
              </VStack>
            </Flex>
          </VStack>
        </LinkOverlay>
      </LinkBox>
    </MotionBox>
  );
};

export default SpotifySection;
