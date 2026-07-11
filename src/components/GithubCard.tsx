import React from "react";
import {
  Box,
  useColorModeValue,
  VStack,
  Text,
  HStack,
  Icon,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import { MotionBox } from "../utils/motion";
import { FiGithub } from "react-icons/fi";
import { BiStar, BiGitRepoForked } from "react-icons/bi";
import { GitRepo } from "../types/gitRepo";

interface IGithubCard {
  gitRepo: GitRepo;
}

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#dea584",
  C: "#555555",
  "C++": "#f34b7d",
  Java: "#b07219",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Vue: "#41b883",
  Ruby: "#701516",
  Shell: "#89e051",
};

const GithubCard: React.FC<IGithubCard> = ({ gitRepo }) => {
  const langColor = gitRepo.language
    ? languageColors[gitRepo.language] ?? "#888"
    : "#888";

  const cardBg = useColorModeValue(
    "rgba(255, 255, 255, 0.5)",
    "rgba(255, 255, 255, 0.04)"
  );
  const cardBorder = useColorModeValue(
    "rgba(255, 255, 255, 0.7)",
    "rgba(255, 255, 255, 0.08)"
  );

  return (
    <MotionBox
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
    >
      <Box
        className="bento-item"
        py={4}
        px={5}
        bg={cardBg}
        border="1px solid"
        borderColor={cardBorder}
        sx={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
        _hover={{
          borderColor: langColor,
          boxShadow: `0 8px 32px ${langColor}20, 0 0 0 1px ${langColor}30`,
        }}
        transition="all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)"
        minH="130px"
        cursor="pointer"
        onClick={() => window.open(gitRepo.clone_url)}
      >
        <VStack overflow="hidden" align="start" spacing={2}>
          <Flex justifyContent="space-between" width="100%">
            <Tooltip hasArrow label={gitRepo.clone_url} placement="top">
              <HStack cursor="pointer" spacing={2}>
                <Icon as={FiGithub} boxSize="1em" color={langColor} />
                <Text
                  fontSize="sm"
                  noOfLines={1}
                  fontWeight="700"
                  bgGradient={`linear(to-r, ${langColor}, #7c5cff)`}
                  bgClip="text"
                >
                  {gitRepo.name}
                </Text>
              </HStack>
            </Tooltip>
            <HStack spacing={3}>
              <HStack spacing={1} color="yellow.400">
                <Icon as={BiStar} boxSize="0.9em" />
                <Text fontSize="xs" fontWeight="600">
                  {gitRepo.stargazers_count}
                </Text>
              </HStack>
              {gitRepo.forks_count > 0 && (
                <HStack spacing={1} color={useColorModeValue("gray.500", "whiteAlpha.600")}>
                  <Icon as={BiGitRepoForked} boxSize="0.9em" />
                  <Text fontSize="xs" fontWeight="600">
                    {gitRepo.forks_count}
                  </Text>
                </HStack>
              )}
            </HStack>
          </Flex>

          {gitRepo.language && (
            <HStack spacing={2}>
              <Box
                w="8px"
                h="8px"
                borderRadius="full"
                bg={langColor}
                boxShadow={`0 0 8px ${langColor}60`}
                flexShrink={0}
              />
              <Text
                fontSize="xs"
                fontWeight="600"
                color={useColorModeValue("gray.500", "whiteAlpha.500")}
              >
                {gitRepo.language}
              </Text>
            </HStack>
          )}

          <Text
            fontSize="sm"
            noOfLines={2}
            color={useColorModeValue("gray.600", "whiteAlpha.600")}
            lineHeight="1.6"
          >
            {gitRepo.description}
          </Text>
        </VStack>
      </Box>
    </MotionBox>
  );
};

export default GithubCard;
