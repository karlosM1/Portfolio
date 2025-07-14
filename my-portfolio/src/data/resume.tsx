import { Mail, Code } from "lucide-react";
import { images } from "@/constants";

export const DATA = {
  name: "Karlos Miguel Serrano",
  initials: "KMS",
  location: "Quezon City, Philippines",
  description:
    "Computer Science Student who’s all about building cool stuff from front to back. I love tackling challenges and making things work. Catch me on X for some tech talk!",
  summary:
    "I'm a Computer Science student at Lyceum of the Philippines University (LPU), expected to graduate in September 2025. Along the way, I leveled up my coding skills and completed an internship with a tech company. I’m all about building cool stuff and ready to divedeeper into the tech world!",
  avatarUrl: images.profilepicture,
  contact: {
    email: "karlos_serrano2002@yahoo.com",
    tel: "+639495021293",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/karlosM1",
        // icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/karlos-miguel-serrano-09a025305/",
        // icon: Icons.linkedin,
      },
      email: {
        name: "Email",
        url: "karlos_serrano2002@yahoo.com",
        // icon: Icons.email,
      },
    },
  },
  work: [
    {
      company: "Asurion ROHQ",
      href: "https://www.asurion.com",
      title: "Software Engineer Intern",
      badge: [],
      logoUrl: "../src/assets/asurion-logo.png",
      start: "2024",
      end: "2025",
      description:
        "I contributed to building a responsive front-end app using TypeScript and React, integrating TanStack Query for efficient data fetching and state management. I implemented dynamic UI components with reusable design patterns and optimized performance. Leveraged TypeScript for type safety and maintainable code, while working closely with the backend to ensure seamless API integration for a smooth user experience.",
    },
  ],
  education: [
    {
      school: "Lyceum of the Philippines University",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: images.lpu,
      href: "https://manila.lpu.edu.ph",
      startDate: "2021",
      endDate: "2025",
    },
    {
      school: "Polytechnic University of the Philippines",
      degree: "Science Technology and Engineering Mathematics",
      logoUrl: images.pup,
      href: "https://www.pup.edu.ph",
      startDate: "2019",
      endDate: "2021",
    },
  ],
  projects: [
    {
      title: "AI-nforcer",
      href: "",
      dates: "Oct 2024 - June 2025",
      active: true,
      description:
        "A smart surveillance system that uses machine learning to detect motorcycle riders without helmets and identify plate numbers in real-time. Designed for road safety enforcement and monitoring.",
      technologies: [
        "React",
        "Typescript",
        "FireBase",
        "FastApi",
        "TailwindCSS",
        "Shadcn UI",
        "Next UI",
        "Tanstack Router",
        "Tanstack Query",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Mail className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/karlosM1/AI-nfocer-Mobile-App",
          icon: <Code className="size-3" />,
        },
      ],
      image: images.ainforcer,
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
        {
          type: "Source Code",
          href: "https://github.com/karlosM1/Waste-Classification",
          icon: <Code className="size-3" />,
        },
      ],
      image: images.dash,
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
          href: "https://karlosmiguel.vercel.app",
          icon: <Mail className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/karlosM1/Portfolio",
          icon: <Code className="size-3" />,
        },
      ],
      image: images.portfolio,
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Fragra",
      href: "",
      dates: "July 2025 - Present",
      active: true,
      description:
        "A perfume discovery app with social features, mood-based and dupe finders, AI-powered reviews, and user-generated content. Lets users track in-store tests and build personal scent collections.",
      technologies: [
        "TypeScript",
        "React",
        "TailwindCSS",
        "Shadcn UI",
        "Tanstack Router",
        "Tanstack Query",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Mail className="size-3" />,
        },
        {
          type: "Source Code",
          href: "",
          icon: <Code className="size-3" />,
        },
      ],
      image: images.fragra,
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
} as const;

// eslint-disable-next-line react-refresh/only-export-components
export const reviews = [
  {
    name: "HTML",
    img: images.html,
  },
  {
    name: "CSS",
    img: images.css3,
  },
  {
    name: "Javascript",
    img: images.js,
  },
  {
    name: "Typescript",
    img: images.typescript,
  },
  {
    name: "Tanstack",
    img: images.tanstack,
  },
  {
    name: "Python",
    img: images.python,
  },
  {
    name: "React",
    img: images.react,
  },
  {
    name: "Tanstack Query",
    img: images.query,
  },
  {
    name: "TailwindCSS",
    img: images.tailwind,
  },
  {
    name: "Shadcn UI",
    img: images.shadcn,
  },
  {
    name: "Firebase",
    img: images.firebase,
  },
  {
    name: "Express",
    img: images.express,
  },
  {
    name: "Node Js",
    img: images.programming,
  },
  {
    name: "Git",
    img: images.git,
  },
  {
    name: "Github",
    img: images.github,
  },
];
