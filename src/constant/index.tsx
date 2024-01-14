import {
  SiKotlin,
  SiFirebase,
  SiFastlane,
  SiGmail,
  SiTypescript,
  SiTailwindcss,
  SiAntdesign,
  SiRedux,
} from "react-icons/si";
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaAndroid,
  FaJava,
  FaLinkedin,
  FaStackOverflow,
  FaMedium,
  FaGithub,
  FaSass,
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
        url: "https://github.com/WenLonG12345",
        icon: <FaGithub />,
        name: "Github",
        type: "gray",
      },
      {
        url: "https://www.linkedin.com/in/teo-wen-long-19960316/",
        icon: <FaLinkedin />,
        name: "Linkedin",
        type: "linkedin",
      },
      {
        url: "https://stackoverflow.com/users/12261890/teo",
        icon: <FaStackOverflow />,
        name: "StackOverflow",
        type: "orange",
      },
      {
        url: "https://skynight1996.medium.com/",
        icon: <FaMedium />,
        name: "Medium",
        type: "gray",
      },
      {
        url: "mailto:teowenlong0316@gmail.com",
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
    url: "https://reactnative.dev/",
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
    name: "Javascript",
    icon: <FaJs fontSize="20px" />,
    url: "https://www.javascript.com/",
  },
  {
    name: "Redux & Redux Saga",
    icon: <SiRedux fontSize="20px" />,
    url: "https://redux.js.org/",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss fontSize="20px" />,
    url: "https://tailwindcss.com/",
  },
  {
    name: "Ant Design",
    icon: <SiAntdesign fontSize="20px" />,
    url: "https://ant.design/",
  },
  {
    name: "SASS",
    icon: <FaSass fontSize="20px" />,
    url: "https://sass-lang.com/",
  },
];

const companies = [
  {
    title: "Astro",
    alt: "astro image",
    url: "https://www.astro.com.my/",
    role: "Assiociate Frontend Engineer",
    skills: ["React", "Sass", "Redux", "Redux Saga", "StorybookJS"],
    period: "Oct 2022 - Present",
    logo: "/astro.png",
  },
  {
    title: "Qumon Intelligence",
    alt: "qumon image",
    url: "https://www.qumonintelligence.com/",
    role: "Software Engineer",
    skills: [
      "Kotlin",
      "Java",
      "Android",
      "Javascript",
      "React",
      "React Native",
    ],
    period: "Aug 2020 - Sept 2022",
    logo: "/qumon.png",
  },
  {
    title: "TimeTec Cloud Sdn Bhd",
    alt: "timetec image",
    url: "https://www.timeteccloud.com/",
    role: "Mobile Application Developer Intern",
    skills: ["Java", "Android", "C#", "Appium Automation Testing", "AWS"],
    period: "Jul 2019 - Jan 2020",
    logo: "/timetec.png",
  },
];

const educations = [
  {
    title: "University of Toronto (UTSG)",
    alt: "utsg image",
    url: "https://www.utoronto.ca/",
    role: "Bachelor's Degree in Computer Science",
    skills: ["CGPA - 3.74", "Data Structures & Algorithms", "Software Design", "Object Oriented Programming", "Operating Systems", ],
    period: "Sept 2022 - May 2026",
    logo: "/utm.png",
  },
];

const sideProjects = [
  {
    name: "TextMe",
    imageUrl: "/klusterx_player.png",
    alt: "TextMe",
    summary: "Online Casino Player Portal, built with NextJS, TailwindCSS and MantineUI",
    tech: [
      'NextJS',
      "TailwindCSS",
      "MantineUI",
      "Zustand"
    ]
  },
  {
    name: "MyRecipeMate",
    imageUrl: "/3commas.png",
    alt: "MyRecipeMate",
    summary:
      "MyRecipeMate is a recipe organizer application. Users can create their own accounts to save and organize their favourite recipes from a large database of popular recipes",
    link: "https://github.com/pratzyushd/csc207-course-project",
    tech: [
      'Java',
      "Swing",
    ]
  },
  {
    name: "KlusterX Player Portal",
    imageUrl: "/klusterx_player.png",
    alt: "klusterx",
    summary: "Online Casino Player Portal, built with NextJS, TailwindCSS and MantineUI",
    tech: [
      'NextJS',
      "TailwindCSS",
      "MantineUI",
      "Zustand"
    ]
  },
  {
    name: "KlusterX Tenant Portal",
    imageUrl: "/klusterx_tenant.png",
    alt: "klusterx",
    summary: "Online Casino Tenant Portal, built with Ant Design Pro",
    tech: [
      "UmiJS",
      "Ant Design",
      "Ant Design Pro"
    ]
  },
  {
    name: "Chativo",
    imageUrl: "https://play-lh.googleusercontent.com/tgLiP-ZL-sBuZt2RzDU1tN88Cp7NPbdjF7c0311_dui86f1HrAQM0j4gXaRE0pb5zW0=s360-rw",
    alt: "chativo",
    summary: "Enterprise ready live-chat base customer support & engagement software",
    tech: [
      "Android",
      "Kotlin",
      "Android Jetpack",
      "Coroutine Flow",
    ],
    link: "https://play.google.com/store/apps/details?id=io.chativo.chat"
  },
  {
    name: "ChativoV",
    imageUrl: "https://play-lh.googleusercontent.com/5U5s7sSIuzP6CygPkU2ZYxyOXT-MKv7oiyweGKHgkEgVameOcYt44rnXqCTWZJNZgVqn=s360-rw",
    alt: "chativo-v",
    summary: "Live-chat specifically designed for visitors to communicate with real-time agent instantly",
    tech: [
      "React Native",
      "Javascript",
      "Redux",
      "Redux Saga",
      "RealmJS"
    ],
    link: "https://play.google.com/store/apps/details?id=io.chativo.visitor"
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
