import {
  Container,
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Avatar,
  Link,
  Button,
  useColorModeValue,
  Flex,
  Icon,
} from "@chakra-ui/react";
import ProfileSection from "../components/section/ProfileSection";
import TechStackSection from "../components/section/TechStackSection";
import useSWR from "swr";
import { companies, educations } from "../constant";
import { MotionBox } from "../utils/motion";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";
import NextLink from "next/link";

const GlassCard = ({
  children,
  colSpan,
  rowSpan,
  delay = 0,
  ...rest
}: {
  children: React.ReactNode;
  colSpan?: any;
  rowSpan?: any;
  delay?: number;
  [key: string]: any;
}) => {
  const bg = useColorModeValue(
    "rgba(255, 255, 255, 0.5)",
    "rgba(255, 255, 255, 0.04)"
  );
  const border = useColorModeValue(
    "rgba(255, 255, 255, 0.7)",
    "rgba(255, 255, 255, 0.08)"
  );
  const hoverBg = useColorModeValue(
    "rgba(255, 255, 255, 0.68)",
    "rgba(255, 255, 255, 0.08)"
  );
  const hoverBorder = useColorModeValue(
    "rgba(255, 255, 255, 0.9)",
    "rgba(255, 255, 255, 0.16)"
  );

  return (
    <GridItem colSpan={colSpan} rowSpan={rowSpan}>
      <MotionBox
        initial={{ opacity: 0, y: 25, scale: 0.97 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            delay,
            type: "spring",
            stiffness: 200,
            damping: 22,
          },
        }}
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        h="100%"
      >
        <Box
          className="bento-item"
          p={6}
          h="100%"
          bg={bg}
          border="1px solid"
          borderColor={border}
          sx={{
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
          }}
          _hover={{
            bg: hoverBg,
            borderColor: hoverBorder,
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
          }}
          transition="all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
          {...rest}
        >
          {children}
        </Box>
      </MotionBox>
    </GridItem>
  );
};

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);

  const recentCompanies = companies.slice(0, 3);
  const subtitleColor = useColorModeValue("gray.500", "whiteAlpha.500");
  const cardTextColor = useColorModeValue("gray.600", "whiteAlpha.700");

  return (
    <Container maxW="container.lg" mt={["6", "10"]} mb={["6", "10"]} px={[4, 4, 6]}>
      {/* ── Hero Profile Section ── */}
      <Box mb={8}>
        <ProfileSection song={data} />
      </Box>

      {/* ── Bento Grid ── */}
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
      >
        {/* ── Tech Stack Block (spanning 2 cols) ── */}
        <GlassCard colSpan={{ base: 1, md: 2, lg: 2 }} delay={0.1}>
          <TechStackSection />
        </GlassCard>

        {/* ── Career Snapshot Block (spanning 2 cols) ── */}
        <GlassCard colSpan={{ base: 1, md: 2, lg: 2 }} delay={0.2}>
          <VStack align="start" spacing={4} h="100%">
            <HStack spacing={2}>
              <Icon as={BsFillBriefcaseFill} color="#7c5cff" />
              <Heading
                as="h2"
                fontSize={{ base: "22px", md: "26px" }}
                fontWeight="700"
                letterSpacing="-0.02em"
              >
                Career
              </Heading>
            </HStack>
            <Text fontSize="sm" fontWeight="500" color={subtitleColor}>
              Recent experience
            </Text>

            <VStack align="stretch" spacing={3} flex={1} w="100%">
              {recentCompanies.map((company, index) => (
                <MotionBox
                  key={index}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Link href={company.url} isExternal _hover={{ textDecoration: "none" }}>
                    <HStack
                      spacing={3}
                      p={3}
                      borderRadius="16px"
                      bg={useColorModeValue(
                        "rgba(255,255,255,0.4)",
                        "rgba(255,255,255,0.04)"
                      )}
                      border="1px solid"
                      borderColor={useColorModeValue(
                        "rgba(255,255,255,0.5)",
                        "rgba(255,255,255,0.06)"
                      )}
                      _hover={{
                        borderColor: useColorModeValue(
                          "rgba(120,80,255,0.2)",
                          "rgba(120,80,255,0.3)"
                        ),
                      }}
                      transition="all 0.25s"
                    >
                      <Image
                        src={company.logo}
                        alt={company.alt}
                        boxSize="36px"
                        borderRadius="10px"
                        objectFit="cover"
                      />
                      <VStack align="start" spacing={0} flex={1} minW={0}>
                        <Text
                          fontSize="sm"
                          fontWeight="600"
                          noOfLines={1}
                        >
                          {company.title}
                        </Text>
                        <Text
                          fontSize="xs"
                          color={cardTextColor}
                          noOfLines={1}
                        >
                          {company.role}
                        </Text>
                      </VStack>
                      <Text fontSize="xs" color={subtitleColor} flexShrink={0}>
                        {company.period.split(" ").slice(0, 2).join(" ")}
                      </Text>
                    </HStack>
                  </Link>
                </MotionBox>
              ))}
            </VStack>

            <NextLink href="/experience" passHref>
              <Link _hover={{ textDecoration: "none" }}>
                <Button
                  variant="ghost"
                  size="sm"
                  rightIcon={<FiArrowRight />}
                  color="#7c5cff"
                  rounded="full"
                  _hover={{
                    bg: useColorModeValue(
                      "rgba(120,80,255,0.08)",
                      "rgba(120,80,255,0.15)"
                    ),
                    transform: "translateX(4px)",
                  }}
                  transition="all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
                >
                  View All
                </Button>
              </Link>
            </NextLink>
          </VStack>
        </GlassCard>

        {/* ── Education Block ── */}
        <GlassCard colSpan={{ base: 1, md: 1, lg: 2 }} delay={0.3}>
          <VStack align="start" spacing={4}>
            <HStack spacing={2}>
              <Icon as={FaGraduationCap} color="#5b9cff" />
              <Heading
                as="h2"
                fontSize={{ base: "22px", md: "26px" }}
                fontWeight="700"
                letterSpacing="-0.02em"
              >
                Education
              </Heading>
            </HStack>

            {educations.map((edu, index) => (
              <Link key={index} href={edu.url} isExternal _hover={{ textDecoration: "none" }} w="100%">
                <MotionBox
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <HStack
                    spacing={3}
                    p={3}
                    borderRadius="16px"
                    bg={useColorModeValue(
                      "rgba(255,255,255,0.4)",
                      "rgba(255,255,255,0.04)"
                    )}
                    border="1px solid"
                    borderColor={useColorModeValue(
                      "rgba(255,255,255,0.5)",
                      "rgba(255,255,255,0.06)"
                    )}
                    _hover={{
                      borderColor: useColorModeValue(
                        "rgba(90,156,255,0.2)",
                        "rgba(90,156,255,0.3)"
                      ),
                    }}
                    transition="all 0.25s"
                  >
                    <Image
                      src={edu.logo}
                      alt={edu.alt}
                      boxSize="36px"
                      borderRadius="10px"
                      objectFit="cover"
                    />
                    <VStack align="start" spacing={0} flex={1} minW={0}>
                      <Text fontSize="sm" fontWeight="600" noOfLines={1}>
                        {edu.title}
                      </Text>
                      <Text fontSize="xs" color={cardTextColor} noOfLines={1}>
                        {edu.role}
                      </Text>
                      <Text fontSize="xs" color={subtitleColor}>
                        {edu.period}
                      </Text>
                    </VStack>
                  </HStack>
                </MotionBox>
              </Link>
            ))}
          </VStack>
        </GlassCard>

        {/* ── Contact CTA Block ── */}
        <GlassCard colSpan={{ base: 1, md: 1, lg: 2 }} delay={0.4}>
          <VStack
            align="start"
            spacing={4}
            justify="center"
            h="100%"
          >
            <Heading
              as="h2"
              fontSize={{ base: "22px", md: "26px" }}
              fontWeight="700"
              letterSpacing="-0.02em"
            >
              Let's Connect
            </Heading>
            <Text fontSize="sm" color={cardTextColor} lineHeight="1.6">
              Have a project idea, want to collaborate, or just say hi? I'd love to hear from you.
            </Text>
            <NextLink href="/contact" passHref>
              <Link _hover={{ textDecoration: "none" }}>
                <Button
                  size="md"
                  bgGradient="linear(to-r, #7c5cff, #5b9cff)"
                  color="white"
                  rounded="full"
                  px={6}
                  leftIcon={<BiPhoneCall />}
                  _hover={{
                    bgGradient: "linear(to-r, #6b4ced, #4a8bff)",
                    transform: "scale(1.05) translateY(-1px)",
                    boxShadow: "0 8px 25px rgba(120, 80, 255, 0.35)",
                  }}
                  transition="all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
                >
                  Get in Touch
                </Button>
              </Link>
            </NextLink>
          </VStack>
        </GlassCard>
      </Grid>
    </Container>
  );
}
