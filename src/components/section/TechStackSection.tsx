import React from "react";
import {
  Heading,
  SlideFade,
  Grid,
  Text,
  useColorModeValue,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import StackCard from "../StackCard";
import {
  techStacks,
} from "../../constant";

const TechStackSection = () => {
  return (
    <SlideFade in offsetY={80}>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Tech Stack Favourites
      </Heading>
      <Text
        textColor={useColorModeValue("gray.600", "gray.400")}
        fontSize={"lg"}
      >
        A list of my favourite tools and technologies that I've learned so far.
      </Text>
      <Tabs variant="solid-rounded" mt={5}>
        <TabPanels>
          <TabPanel>
            <Grid
              templateColumns={[
                "1fr",
                "repeat(2,1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={[2, 5, 5, 5]}
            >
              {techStacks.map((stack) => (
                <StackCard stack={stack} key={stack?.name} />
              ))}
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </SlideFade>
  );
};

export default TechStackSection;
