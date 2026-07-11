import React from "react";
import {
  Container,
  Heading,
  Box,
  VStack,
  HStack,
  Text,
  Image,
  Tag,
  Link,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { companies, educations } from "../constant";
import { MotionBox } from "../utils/motion";

interface TimelineItemProps {
  title: string;
  role: string;
  period: string;
  logo: string;
  alt: string;
  url: string;
  skills: string[];
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  role,
  period,
  logo,
  alt,
  url,
  skills,
  index,
}) => {
  const cardBg = useColorModeValue(
    "rgba(255, 255, 255, 0.5)",
    "rgba(255, 255, 255, 0.04)"
  );
  const cardBorder = useColorModeValue(
    "rgba(255, 255, 255, 0.7)",
    "rgba(255, 255, 255, 0.08)"
  );
  const cardHoverBorder = useColorModeValue(
    "rgba(120, 80, 255, 0.25)",
    "rgba(120, 80, 255, 0.35)"
  );
  const subtextColor = useColorModeValue("gray.500", "whiteAlpha.500");
  const tagBg = useColorModeValue(
    "rgba(120, 80, 255, 0.08)",
    "rgba(120, 80, 255, 0.15)"
  );
  const tagColor = useColorModeValue("#5a3fd6", "#a78bfa");

  return (
    <MotionBox
      initial={{ opacity: 0, x: -20 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.15 + index * 0.08,
          type: "spring",
          stiffness: 200,
          damping: 22,
        },
      }}
      whileHover={{ x: 6 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Card */}
      <Link
        href={url}
        isExternal
        _hover={{ textDecoration: "none" }}
        display="block"
        width="full"
      >
        <Box
          p={5}
          borderRadius="20px"
          bg={cardBg}
          border="1px solid"
          borderColor={cardBorder}
          sx={{
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
          }}
          _hover={{
            borderColor: cardHoverBorder,
            boxShadow: "0 8px 32px rgba(120, 80, 255, 0.1)",
          }}
          transition="all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)"
        >
          <Flex
            justifyContent="space-between"
            alignItems={{ base: "start", md: "center" }}
            direction={{ base: "column", md: "row" }}
            gap={3}
          >
            <HStack spacing={3}>
              <Image
                src={logo}
                alt={alt}
                boxSize="44px"
                borderRadius="12px"
                objectFit="cover"
                border="1px solid"
                borderColor={useColorModeValue(
                  "rgba(0,0,0,0.06)",
                  "rgba(255,255,255,0.08)"
                )}
              />
              <VStack align="start" spacing={0}>
                <Text fontSize="md" fontWeight="700" lineHeight="1.3">
                  {title}
                </Text>
                <Text fontSize="sm" color={subtextColor} fontWeight="500">
                  {role}
                </Text>
              </VStack>
            </HStack>

            <Text
              fontSize="xs"
              fontWeight="600"
              color={subtextColor}
              letterSpacing="0.02em"
              flexShrink={0}
            >
              {period}
            </Text>
          </Flex>

          <Flex mt={3} flexWrap="wrap" gap={1.5}>
            {skills.map((skill) => (
              <Tag
                key={skill}
                size="sm"
                px={3}
                py={1}
                borderRadius="full"
                bg={tagBg}
                color={tagColor}
                fontWeight="600"
                fontSize="xs"
                border="1px solid"
                borderColor={useColorModeValue(
                  "rgba(120, 80, 255, 0.1)",
                  "rgba(120, 80, 255, 0.2)"
                )}
              >
                {skill}
              </Tag>
            ))}
          </Flex>
        </Box>
      </Link>
    </MotionBox>
  );
};

function ExperiencePage() {
  return (
    <Container maxW="container.lg" mt={["6", "10"]} mb={["6", "10"]} px={[4, 4, 6]}>
      {/* ── Career Section ── */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 200, damping: 20 },
        }}
      >
        <VStack align="start" spacing={0} mb={8}>
          <Heading
            as="h1"
            fontSize={{ base: "28px", md: "36px" }}
            fontWeight="800"
            letterSpacing="-0.03em"
          >
            Career
          </Heading>
          <Text
            fontSize="sm"
            fontWeight="500"
            color={useColorModeValue("gray.500", "whiteAlpha.500")}
          >
            My professional journey
          </Text>
        </VStack>
      </MotionBox>

      {/* Timeline */}
      <Box mb={12}>
        <VStack spacing={4} align="stretch">
          {companies.map((company, index) => (
            <TimelineItem
              key={index}
              title={company.title}
              role={company.role}
              period={company.period}
              logo={company.logo}
              alt={company.alt}
              url={company.url}
              skills={company.skills}
              index={index}
            />
          ))}
        </VStack>
      </Box>

      {/* ── Education Section ── */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 200,
            damping: 20,
          },
        }}
      >
        <VStack align="start" spacing={0} mb={8}>
          <Heading
            as="h1"
            fontSize={{ base: "28px", md: "36px" }}
            fontWeight="800"
            letterSpacing="-0.03em"
          >
            Education
          </Heading>
          <Text
            fontSize="sm"
            fontWeight="500"
            color={useColorModeValue("gray.500", "whiteAlpha.500")}
          >
            Academic background
          </Text>
        </VStack>
      </MotionBox>

      <Box>
        <VStack spacing={4} align="stretch">
          {educations.map((edu, index) => (
            <TimelineItem
              key={index}
              title={edu.title}
              role={edu.role}
              period={edu.period}
              logo={edu.logo}
              alt={edu.alt}
              url={edu.url}
              skills={edu.skills}
              index={index}
            />
          ))}
        </VStack>
      </Box>
    </Container>
  );
}

export default ExperiencePage;
