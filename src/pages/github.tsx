import React from "react";
import {
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import getGithubRepos from "../constant/getGithubRepos";
import GithubCard from "../components/GithubCard";
import { GitRepo } from "../types/gitRepo";
import { MotionBox } from "../utils/motion";

interface IGithubPage {
  repos: GitRepo[];
}

const GithubPage: React.FC<IGithubPage> = ({ repos }) => {
  if (!repos) return <></>;

  return (
    <Container maxW="container.lg" mt={["6", "10"]} mb={["6", "10"]} px={[4, 4, 6]}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 200, damping: 20 },
        }}
      >
        <VStack align="start" spacing={2} mb={8}>
          <Heading
            as="h1"
            fontSize={{ base: "28px", md: "36px" }}
            fontWeight="800"
            letterSpacing="-0.03em"
          >
            Github
          </Heading>
          <Text
            fontSize="sm"
            fontWeight="500"
            color={useColorModeValue("gray.500", "whiteAlpha.500")}
          >
            My top featured repositories
          </Text>
        </VStack>
      </MotionBox>

      <SimpleGrid columns={[1, 1, 2]} spacing={4}>
        {repos.map((repo, index) => (
          <MotionBox
            key={repo.name}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                delay: 0.15 + index * 0.06,
                type: "spring",
                stiffness: 200,
                damping: 22,
              },
            }}
          >
            <GithubCard gitRepo={repo} />
          </MotionBox>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export async function getStaticProps() {
  const repos = await getGithubRepos(process.env.GITHUB_USERNAME || "");

  return {
    props: {
      repos: repos || null,
    },
  };
}

export default GithubPage;
