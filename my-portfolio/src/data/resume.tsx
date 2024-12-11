import { Mail } from "lucide-react";

export const DATA = {
  name: "Karlos Miguel Serrano",
  initials: "KMS",
  location: "Quezon City, Philippines",
  description:
    "Full Stack Engineer who’s all about building cool stuff from front to back. I love tackling challenges and making things work. Catch me on Twitter for some tech talk!",
  summary:
    "I graduated in 2025 with a computer science degree from Lyceum of thePhilippines University (LPU). Along the way, I leveled up my codingskills, joined coding challenges, and did a few internships with localtech companies. I’m all about building cool stuff and ready to divedeeper into the tech world!",
  avatarUrl: "/src/assets/profile-picture.jpg",
  contact: {
    email: "kmserrano@up.edu.ph",
    tel: "+639495021293",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kmserrano",
        // icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kmserrano/",
        // icon: Icons.linkedin,
      },
      email: {
        name: "Email",
        url: "mailto:kmserrano@up.edu.ph",
        // icon: Icons.email,
      },
    },
  },
  work: [
    {
      company: "Asurion ROHQ",
      href: "https://www.asurion.com",
      title: "Full Stack Engineer",
      badge: [],
      logoUrl: "../src/assets/asurion-logo.png",
      start: "2024",
      end: "Present",
      description:
        "I contributed to building a responsive front-end app using TypeScript and React, integrating TanStack Query for efficient data fetching and state management. I implemented dynamic UI components with reusable design patterns and optimized performance. Leveraged TypeScript for type safety and maintainable code, while working closely with the backend to ensure seamless API integration for a smooth user experience.",
    },
  ],
  education: [
    {
      school: "Lyceum of the Philippines University",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "../src/assets/lpu-logo.png",
      href: "https://manila.lpu.edu.ph",
      startDate: "2021",
      endDate: "2025",
    },
    {
      school: "Polytechnic University of the Philippines",
      degree: "Science Technology and Engineering Mathematics",
      logoUrl: "../src/assets/pup-logo.png",
      href: "https://www.pup.edu.ph",
      startDate: "2019",
      endDate: "2021",
    },
  ],
  projects: [
    {
      title: "AI-nforcer",
      href: "",
      dates: "Oct 2024 - Present",
      active: true,
      description: "Plate Number and Helmet Detection",
      technologies: [
        "React",
        "Typescript",
        "FireBase",
        "Express",
        "TailwindCSS",
        "Shadcn UI",
        "Next UI",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Mail className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Waste Classification Detection",
      href: "",
      dates: "January 2024 - September 2024",
      active: true,
      description:
        "This web application classifies waste images into either Organic or Recyclable categories using a pre-trained TensorFlow model.",
      technologies: [
        "HTML",
        "CSS",
        "SQLAlchemy",
        "JavaScript",
        "Python",
        "Flask",
        "Open-CV",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Mail className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Porfolio",
      href: "",
      dates: "December 2024 - January 2025",
      active: true,
      description:
        "This project is my resume portfolio. It showcases my work experience, skills, and projects. The portfolio is built using React with TypeScript and TailwindCSS + shadcn UI + Magic UI.",
      technologies: [
        "TypeScript",
        "React",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Tanstack Router",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Mail className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
} as const;

export const reviews = [
  {
    name: "HTML",
    img: "../src/assets/html-5.png",
  },
  {
    name: "CSS",
    img: "../src/assets/css-3.png",
  },
  {
    name: "Javascript",
    img: "../src/assets/js.png",
  },
  {
    name: "Typescript",
    img: "../src/assets/typescript.png",
  },
  {
    name: "Tanstack",
    img: "../src/assets/tanstack.png",
  },
  {
    name: "Python",
    img: "../src/assets/python.png",
  },
  {
    name: "React",
    img: "../src/assets/react.png",
  },
  {
    name: "Tanstack Query",
    img: "../src/assets/query.png",
  },
  {
    name: "TailwindCSS",
    img: "../src/assets/tailwind.png",
  },
  {
    name: "Shadcn UI",
    img: "../src/assets/shadcn.png",
  },
  {
    name: "Firebase",
    img: "../src/assets/firebase.png",
  },
  {
    name: "Express",
    img: "../src/assets/express.png",
  },
  {
    name: "Node Js",
    img: "../src/assets/programing.png",
  },
  {
    name: "Git",
    img: "../src/assets/git.png",
  },
  {
    name: "Github",
    img: "../src/assets/githubs.png",
  },
];
