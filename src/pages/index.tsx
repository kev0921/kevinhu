import { Container, Divider } from "@chakra-ui/react";
import ProfileSection from "../components/section/ProfileSection";
import TechStackSection from "../components/section/TechStackSection";
import useSWR from "swr";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);

  return (
    <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
      <ProfileSection song={data} />
      <Divider my={10} />
      <TechStackSection />
      <Divider my={10} />
    </Container>
  );
}
