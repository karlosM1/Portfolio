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
      // logoUrl: "/atomic.png",
      startDate: "2024",
      endDate: "Present",
      description: "Building a decentralized trading platform",
    },
  ],
  education: [
    {
      school: "Lyceum of the Philippines University",
      degree: "Bachelor of Science in Computer Science",
      href: "https://manila.lpu.edu.ph",
      startDate: "2021",
      endDate: "2025",
    },
  ],
} as const;
