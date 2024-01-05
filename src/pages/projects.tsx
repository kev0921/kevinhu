import React, { useEffect } from "react";
import { Container, Divider } from "@chakra-ui/react";
import Head from "next/head";
import getGithubRepos from "../constant/getGithubRepos";
import styles from "../../styles/Home.module.css";
import GithubSection from "../components/section/GithubSection";
import { GitRepo } from "../types/gitRepo";

interface IProjectsPage {
  repos: GitRepo[];
}

const ProjectsPage: React.FC<IProjectsPage> = ({ repos }) => {
  return (
    <div className={styles.container}>
      <main>
        <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
          <GithubSection repos={repos} />
        </Container>
      </main>
    </div>
  );
};

export default ProjectsPage;

export const getStaticProps = async () => {
  const repos = await getGithubRepos(process.env.GITHUB_USERNAME || "");

  return {
    props: {
      repos: repos || null,
    },
  };
};
