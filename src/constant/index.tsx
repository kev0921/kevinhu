import {
  SiGmail,
  SiTypescript,
  SiTailwindcss,
  SiChakraui,
  SiMongodb,
  SiPusher,
  SiTensorflow,
  SiExpress,
  SiFlask,
  SiPostgresql,
} from "react-icons/si";
import {
  FaReact,
  FaJs,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFlask,
} from "react-icons/fa";
import { CgAlbum } from "react-icons/cg";
import { TbBrandNextjs } from "react-icons/tb";

const menuLinks = [
  { name: "About Me", route: "/" },
  { name: "Experience", route: "/experience" },
  { name: "Projects", route: "/project" },
  { name: "Github", route: "/github" },
  { name: "Contact", route: "/contact" },
];

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Kevin Hu. All Rights Reserved.`,
  author: {
    name: "Kevin Hu",
    accounts: [
      {
        url: "https://github.com/kev0921",
        icon: <FaGithub />,
        name: "Github",
        type: "gray",
      },
      {
        url: "https://www.linkedin.com/in/kevinhu04/",
        icon: <FaLinkedin />,
        name: "Linkedin",
        type: "linkedin",
      },
      {
        url: "https://www.instagram.com/kevinhu04/",
        icon: <FaInstagram />,
        name: "Instagram",
        type: "pink",
      },
      {
        url: "mailto:kevinh.hu@mail.utoronto.ca",
        icon: <SiGmail />,
        name: "Gmail",
        type: "red",
      },
    ],
  },
};

const resume = {
  href: "/resume.pdf",
  icon: <CgAlbum />,
  name: "Resume",
};

const techStacks = [
  {
    name: "React",
    icon: <FaReact fontSize="20px" />,
    url: "https://react.dev/",
  },
  {
    name: "TensorFlow",
    icon: <SiTensorflow fontSize="20px" />,
    url: "https://www.tensorflow.org/",
  },
  {
    name: "Flask",
    icon: <SiFlask fontSize="20px" />,
    url: "https://flask.palletsprojects.com/en/3.0.x/",
  },
  {
    name: "NextJS",
    icon: <TbBrandNextjs fontSize="20px" />,
    url: "https://nextjs.org/",
  },
  {
    name: "Typescript",
    icon: <SiTypescript fontSize="20px" />,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss fontSize="20px" />,
    url: "https://tailwindcss.com/",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb fontSize="20px" />,
    url: "https://www.mongodb.com/",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql fontSize="20px" />,
    url: "https://www.postgresql.org/",
  },
];

const companies = [
  {
    title: "PointClickCare",
    alt: "PointClickCare image",
    url: "https://pointclickcare.com/",
    role: "Software Engineer Intern",
    skills: [
      "Java",
      "Spring Boot",
      "Microsoft SQL Server",
      "SQL",
      "React",
      "TypeScript",
      "GraphQL",
      "Power BI",
      "Jenkins",
      "JUnit",
    ],
    period: "May 2025 - Dec 2025",
    logo: "/pointClickCareLogo.png",
  },
  {
    title: "Mengalo",
    alt: "Mengalo image",
    url: "https://www.mengalo.com/",
    role: "Full Stack Developer",
    skills: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "PostgreSQL",
      "Node.js",
      "Express",
      "Jest",
      "Git",
    ],
    period: "September 2024 - Present",
    logo: "/mengaloLogo.png",
  },
  {
    title: "Digital Cloud Service Pte. Ltd.",
    alt: "Digital Cloud Service image",
    url: "http://www.cloud-service.com.cn/",
    role: "Software Developer Intern",
    skills: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Vue",
      "Ant Design",
      "Swagger UI",
      "Git",
    ],
    period: "June 2024 - August 2024",
    logo: "/digitalCloudServiceLogo.png",
  },
  {
    title: "Orchard Family Dentistry",
    alt: "Orchard Family Dentistry image",
    url: "https://orchardfamilydentistry.ca/",
    role: "Software Developer",
    skills: ["React", "Tailwind CSS", "JavaScript", "Git"],
    period: "July 2023 - March 2024",
    logo: "/OrchardFamilyDentistryLogo.png",
  },
  {
    title: "Rotman Commerce Human Resources Association",
    alt: "RCHRA image",
    url: "https://www.rchumanresourcesassociation.ca/",
    role: "Web Developer",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "Git"],
    period: "November 2022 - April 2023",
    logo: "/uoftLogo.png",
  },
  {
    title: "RHHS Robotics",
    alt: "RHHS Robotics image",
    url: "https://rhhsstuco.ca/clubs",
    role: "General Executive",
    skills: ["Arduino", "C++"],
    period: "October 2021 - April 2022",
    logo: "/rhhsRobotics.png",
  },
  {
    title: "Trillium Woods",
    alt: "TWPS image",
    url: "http://www.yrdsb.ca/schools/trilliumwoods.ps/Pages/default.aspx",
    role: "Volunteer",
    skills: ["Communication", "Leadership", "Team Work", "Organization"],
    period: "September 2018 - February 2019",
    logo: "/yrdsbLogo.png",
  },
];

const educations = [
  {
    title: "University of Toronto (UTSG)",
    alt: "utsg image",
    url: "https://www.utoronto.ca/",
    role: "Bachelor's Degree in Computer Science",
    skills: [
      "Data Structures & Algorithms",
      "Software Design",
      "OOP",
      "Software Tools and Systems Programming",
      "ASIP",
    ],
    period: "Sept 2022 - May 2027",
    logo: "/uoftLogo.png",
  },
];

const sideProjects = [
  {
    name: "Subhub",
    imageUrl: "/Subhub.png",
    alt: "Subhub",
    summary:
      "Subhub is a full-stack subletting platform that helps students find and post sublets. Users can browse listings, chat in real time, and manage their rental posts with ease.",
    link: "https://subhub.ca/",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "AWS",
      "Heroku",
      "Socket.IO",
    ],
  },
  {
    name: "Caspr",
    imageUrl: "/Caspr1.jpg",
    alt: "Caspr",
    summary:
      "Caspr (Causal Analysis and Structure Path Relationships) is a web application that empowers users to explore complex causal diagrams in an intuitive 3D environment.",
    link: "https://caspr.vercel.app/",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Firebase",
      "Three.js",
      "Tailwind CSS",
      "Jest",
    ],
  },
  {
    name: "GoodEats",
    imageUrl: "/GoodEats.png",
    alt: "GoodEats",
    summary:
      "GoodEats is an application that can determine the freshness of a fruit. It uses your device's camera to take a picture of the fruit and uses a machine learning model to determine the freshness of the fruit.",
    link: "https://github.com/kev0921/GoodEats",
    tech: ["Python", "Flask", "TensorFlow", "React"],
  },
  {
    name: "MyAudiobook",
    imageUrl: "/MyAudiobook.png",
    alt: "MyAudiobook",
    summary:
      "MyAudiobook enables users to easily convert text into audio. Users can type in or paste any text—whether it's from online articles, academic papers, or personal notes—and save it as a custom Audiobook object with a title of their choice.",
    link: "https://github.com/kev0921/MyAudiobook",
    tech: ["React", "Tailwind CSS", "MongoDB", "Express", "Node.js", "OpenAI"],
  },
  {
    name: "CSCShell",
    imageUrl: "/CSCShell.png",
    alt: "CSCShell",
    summary:
      "CSCShell is a shell similar to POSIX sh and BASH. It supports common functions such as comments, variable assignment and usage, script execution, cd commanbd, using system calls to start executables, file redirection, piping, and more.",
    link: "https://github.com/kev0921/CSCShell",
    tech: ["C"],
  },
  {
    name: "TextMe",
    imageUrl: "/text-me.png",
    alt: "TextMe",
    summary:
      "TextMe is a full stack chat app. Users can create their own account using their google account, add friends, and chat in real time with their friends.",
    link: "https://github.com/kev0921/text-me",
    tech: [
      "TypeScript",
      "Upstash Redis",
      "React",
      "Next.js",
      "Node.js",
      "NextAuth.js",
      "Tailwind CSS",
      "Pusher",
    ],
  },
  {
    name: "MyRecipeMate",
    imageUrl: "/MyRecipeMate.png",
    alt: "MyRecipeMate",
    summary:
      "MyRecipeMate is a recipe organizer application. Users can create their own accounts to save and organize recipes from a large database of popular recipes",
    link: "https://github.com/pratzyushd/csc207-course-project",
    tech: ["Java", "Swing"],
  },
  {
    name: "MelodyMatch",
    imageUrl: "/MelodyMatch.png",
    alt: "MelodyMatch",
    summary:
      "MelodyMatch is a Spotify song recommendation app. Connect your spotify account to our app and, with a click of a button, generate a list of songs that are taylored to your preferences.",
    link: "https://github.com/Manal-jpg/csc111-group-project",
    tech: ["Python", "Spotipy", "Tkinter", "Bottle"],
  },
  {
    name: "Dental Clinic Website",
    imageUrl: "/DentistWebsite.png",
    alt: "Dental Clinic Website",
    summary:
      "This is the website I created with a team of web developers for the Orchard Family Dentistry clinic. This website allows patients to book dental appointments, learn more about dental treatments, and more.",
    link: "https://github.com/kev0921/orchard-family-dentistry-website",
    tech: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    name: "HomeworkPal",
    imageUrl: "/HomeworkPal.png",
    alt: "HomeworkPal",
    summary:
      "HomeworkPal is a homework task tracker. It allows users to create their own accounts and save and create their own tasks and track the completion of those tasks.",
    link: "https://github.com/kev0921/Homework-Pal",
    tech: ["TypeScript", "MongoDB", "Express", "React", "Node.js", "ChakraUI"],
  },
  {
    name: "Portfolio Website",
    imageUrl: "/PortfolioWebsite.png",
    alt: "Portfolio Website",
    summary:
      "My portfolio website where I illustrate all my projects, work experiences, and some cool information about myself",
    link: "https://github.com/kev0921/portfolio",
    tech: [
      "TypeScript",
      "Next.js",
      "React",
      "ChakraUI",
      "Spotify API",
      "Github API",
    ],
  },
  {
    name: "Club Website",
    imageUrl: "/ClubWebsite.png",
    alt: "Club Website",
    summary:
      "This is the website I created with a team of web developers for the RCHRA club at UofT. This website provides information on upcoming club events, infromation about the club, and more.",
    link: "https://github.com/jaeyonglee3/RCHRA-Website",
    tech: ["Javascript", "Bootstrap", "CSS", "HTML", "React"],
  },
  {
    name: "Maze Solver Robot",
    imageUrl: "/MazeSolverRobot.png",
    alt: "Maze Solver Robot",
    summary:
      "Using Arduino robot parts and the Arduino IDE, I created a robot that is able to solve simple mazes using data gathered by its ultrasonic sensor.",
    // ADD A THE CODE FOR THE MAZE SOLVER ROBOT TO A GITHUB REPO AND ADD THE GITHUB LINK HERE
    tech: ["C++", "Arduino"],
  },
];

export {
  menuLinks,
  techStacks,
  siteConfig,
  resume,
  companies,
  educations,
  sideProjects,
};
