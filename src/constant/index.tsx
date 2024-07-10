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
    name: "Express",
    icon: <SiExpress fontSize="20px" />,
    url: "https://expressjs.com/",
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
    name: "Pusher",
    icon: <SiPusher fontSize="20px" />,
    url: "https://pusher.com/",
  },
];

const companies = [
  {
    title: "Orchard Family Dentistry",
    alt: "Orchard Family Dentistry image",
    url: "https://orchardfamilydentistry.ca/",
    role: "Software Developer",
    skills: ["React", "Tailwind CSS", "JavaScript"],
    period: "July 2023 - Present",
    logo: "/OrchardFamilyDentistryLogo.png",
  },
  {
    title: "Rotman Commerce Human Resources Association",
    alt: "RCHRA image",
    url: "https://www.rchumanresourcesassociation.ca/",
    role: "Web Developer",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
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
    skills: ["CGPA - 3.74", "Data Structures & Algorithms", "Software Design", "Object Oriented Programming", "Systems Programming", ],
    period: "Sept 2022 - May 2026",
    logo: "/uoftLogo.png",
  },
];

const sideProjects = [
  {
    name: "GoodEats",
    imageUrl: "/GoodEats.png",
    alt: "GoodEats",
    summary: "GoodEats is an application that can determine the freshness of a fruit. It uses your device's camera to take a picture of the fruit and uses a machine learning model to determine the freshness of the fruit.",
    link: "https://github.com/kev0921/GoodEats",
    tech: [
      'Python',
      'Flask',
      'TensorFlow',
      'React',
    ]
  },
  {
    name: "CSCShell",
    imageUrl: "/CSCShell.png",
    alt: "CSCShell",
    summary: "CSCShell is a shell similar to POSIX sh and BASH. It supports common functions such as comments, variable assignment and usage, script execution, cd commanbd, using system calls to start executables, file redirection, piping, and more.",
    link: "https://github.com/kev0921/CSCShell",
    tech: [
      'C',
    ]
  },
  {
    name: "TextMe",
    imageUrl: "/text-me.png", 
    alt: "TextMe",
    summary: "TextMe is a full stack chat app. Users can create their own account using their google account, add friends, and chat in real time with their friends.",
    link: "https://github.com/kev0921/text-me",
    tech: [
      'TypeScript',
      "Upstash Redis",
      "React",
      "Next.js",
      "Node.js",
      "NextAuth.js",
      "Tailwind CSS",
      "Pusher",
    ]
  },
  {
    name: "MyRecipeMate",
    imageUrl: "/MyRecipeMate.png",
    alt: "MyRecipeMate",
    summary:
      "MyRecipeMate is a recipe organizer application. Users can create their own accounts to save and organize recipes from a large database of popular recipes",
    link: "https://github.com/pratzyushd/csc207-course-project",
    tech: [
      'Java',
      "Swing",
    ]
  },
  {
    name: "Dental Clinic Website",
    imageUrl: "/DentistWebsite.png",
    alt: "Dental Clinic Website",
    summary: "This is the website I created with a team of web developers for the Orchard Family Dentistry clinic. This website allows patients to book dental appointments, learn more about dental treatments, and more.",
    link: "https://github.com/kev0921/orchard-family-dentistry-website",
    tech: [
      "React",
      "Tailwind CSS",
      "JavaScript",
    ]
  },
  {
    name: "HomeworkPal",
    imageUrl: "/HomeworkPal.png",
    alt: "HomeworkPal",
    summary: "HomeworkPal is a homework task tracker. It allows users to create their own accounts and save and create their own tasks and track the completion of those tasks.",
    link: "https://github.com/kev0921/Homework-Pal",
    tech: [
      'TypeScript',
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "ChakraUI",
    ]
  },
  {
    name: "Portfolio Website",
    imageUrl: "/PortfolioWebsite.png",
    alt: "Portfolio Website",
    summary: "My portfolio website where I illustrate all my projects, work experiences, and some cool information about myself",
    link: "https://github.com/kev0921/portfolio",
    tech: [
      'TypeScript',
      "Next.js",
      "React",
      "ChakraUI",
      "Spotify API",
      "Github API",
    ]
  },
  {
    name: "MelodyMatch",
    imageUrl: "/MelodyMatch.png",
    alt: "MelodyMatch",
    summary: "MelodyMatch is a Spotify song recommendation app. Connect your spotify account to our app and, with a click of a button, generate a list of songs that are taylored to your preferences.",
    link: "https://github.com/Manal-jpg/csc111-group-project",
    tech: [
      "Python",
      "Spotipy",
      "Tkinter",
      "Bottle",
    ]
  },
  {
    name: "Club Website",
    imageUrl: "/ClubWebsite.png",
    alt: "Club Website",
    summary: "This is the website I created with a team of web developers for the RCHRA club at UofT. This website provides information on upcoming club events, infromation about the club, and more.",
    link: "https://github.com/jaeyonglee3/RCHRA-Website",
    tech: [
      "Javascript",
      "Bootstrap",
      "CSS",
      "HTML",
      "React",
    ]
  },
  {
    name: "Maze Solver Robot",
    imageUrl: "/MazeSolverRobot.png",
    alt: "Maze Solver Robot",
    summary: "Using Arduino robot parts and the Arduino IDE, I created a robot that is able to solve simple mazes using data gathered by its ultrasonic sensor.",
    // ADD A THE CODE FOR THE MAZE SOLVER ROBOT TO A GITHUB REPO AND ADD THE GITHUB LINK HERE
    tech: [
      "C++",
      "Arduino",
    ]
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
