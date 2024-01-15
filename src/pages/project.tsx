import { Container } from "@chakra-ui/react";
import useSWR from "swr";
import { SideProjectSection } from "../components/section/SideProjectSection";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);

  return (
    <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
      <SideProjectSection />
    </Container>
  );
}
