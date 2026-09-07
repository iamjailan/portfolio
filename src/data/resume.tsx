import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Jailan Samun",
  initials: "JS",
  url: "https://sleepany.com",
  resumeUrl: "/Jailan_Samun_CV.pdf",
  location: "Kabul, Afghanistan",
  locationLink: "https://maps.google.com/?q=Kabul,Afghanistan",
  description:
    "Full-Stack Developer building reliable, scalable web applications and APIs with React, Next.js, Node.js, NestJS, and TypeScript.",
  summary:
    "Full-Stack Developer with over 5 years of experience building production web and mobile applications, designing APIs, and delivering responsive frontend experiences. I specialize in React, Next.js, Node.js, NestJS, and modern backend systems.\n\nMy core stack includes React, Next.js, Node.js, NestJS, TypeScript, PostgreSQL, and Prisma. I also work with React Query, Redux, Docker, and cloud deployment workflows.",
  avatarUrl: "/go-gopher.png",
  skillCategories: [
    {
      name: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: undefined },
        { name: "TypeScript", icon: Typescript },
        { name: "Python", icon: Python },
        { name: "Go", icon: Golang },
      ],
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: ReactLight },
        { name: "Next.js", icon: NextjsIconDark },
        { name: "Node.js", icon: Nodejs },
        { name: "NestJS", icon: undefined },
        { name: "Express", icon: undefined },
        { name: "REST APIs", icon: undefined },
        { name: "GraphQL", icon: undefined },
      ],
    },
    {
      name: "Databases & ORMs",
      skills: [
        { name: "PostgreSQL", icon: Postgresql },
        { name: "MongoDB", icon: undefined },
        { name: "MySQL", icon: undefined },
        { name: "Prisma", icon: undefined },
      ],
    },
    {
      name: "Messaging & Caching",
      skills: [
        { name: "Redis", icon: undefined },
        { name: "RabbitMQ", icon: undefined },
      ],
    },
    {
      name: "Cloud & Deployment",
      skills: [
        { name: "Docker", icon: Docker },
        { name: "Azure", icon: undefined },
        { name: "Google Cloud", icon: undefined },
        { name: "CI/CD", icon: undefined },
        { name: "GitHub Actions", icon: undefined },
      ],
    },
    {
      name: "Tools & Other",
      skills: [{ name: "Tailwind CSS", icon: undefined }],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "jailan.samun@gmail.com",
    tel: "+93780575336",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/iamjailan",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/iamjailan",
        icon: Icons.linkedin,
        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/93780575336",
        icon: Icons.whatsapp,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:jailan.samun@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "OtaTickets.com",
      href: "https://otatickets.com",
      badges: [],
      location: "Kabul, Afghanistan",
      title: "Full-Stack Developer",
      logoUrl: "https://www.google.com/s2/favicons?domain=otatickets.com&sz=128",
      start: "Aug 2026",
      end: "Present",
      description:
        "Building a ticket reservation and booking platform: responsive flight search and booking workflows in React and Next.js, plus scalable NestJS and Express APIs using MySQL, gRPC, and RabbitMQ. Integrating real-time airline and travel-provider availability, pricing, and booking data.",
    },
    {
      company: "Sunzala Marketplace",
      href: "https://www.sunzala.app",
      badges: [],
      location: "Kabul, Afghanistan",
      title: "Founder & Developer",
      logoUrl: "https://www.google.com/s2/favicons?domain=sunzala.app&sz=128",
      start: "Jun 2026",
      end: "Present",
      description:
        "Founded and independently developing a marketplace for digital and physical products with Next.js, React, TypeScript, NestJS, and PostgreSQL. Owning the product from architecture and secure APIs through database design, deployment, infrastructure, and ongoing development.",
    },
    {
      company: "Profitwave360 LLC",
      href: "https://profitwave360.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "https://www.google.com/s2/favicons?domain=profitwave360.com&sz=128",
      start: "May 2026",
      end: "Jul 2026",
      description:
        "Developed and maintained the Profitwave360 website, improving features, user experience, page performance, technical SEO, calculators, and content-focused service pages.",
    },
    {
      company: "blissio.ai",
      href: "https://blissio.ai",
      badges: [],
      location: "Kabul, Afghanistan - Remote",
      title: "Full-Stack Developer",
      logoUrl: "https://www.google.com/s2/favicons?domain=blissio.ai&sz=128",
      start: "Sep 2024",
      end: "Jun 2026",
      description:
        "Led backend development for production APIs and services using NestJS, TypeScript, PostgreSQL, and Prisma. Managed Docker deployments across Azure, Google Cloud, and DigitalOcean; integrated AI-powered services; and contributed to the React Native application.",
    },
    {
      company: "AseelApp",
      href: "https://aseelapp.com",
      badges: [],
      location: "Kabul, Afghanistan - Remote",
      title: "Full-Stack Developer",
      logoUrl: "https://www.google.com/s2/favicons?domain=aseelapp.com&sz=128",
      start: "Dec 2023",
      end: "Aug 2024",
      description:
        "Contributed across backend, web frontend, and mobile applications. Built Node.js, Express, MedusaJS, and PostgreSQL services; enhanced React and Next.js web applications; and delivered React Native features and performance improvements.",
    },
    {
      company: "MCCO Afghanistan",
      href: "https://mcco.af",
      badges: [],
      location: "Kabul, Afghanistan",
      title: "Full-Stack Developer",
      logoUrl: "https://www.google.com/s2/favicons?domain=mcco.af&sz=128",
      start: "Feb 2023",
      end: "Dec 2023",
      description:
        "Built and launched MCCO's official website as the sole Full-Stack Developer. Designed the Next.js, TypeScript, Tailwind CSS, and MongoDB architecture, built REST APIs, and managed deployment and post-launch maintenance.",
    },
    {
      company: "Dursa",
      href: "https://www.instagram.com/dursa_handicraft/",
      badges: [],
      location: "Kabul, Afghanistan",
      title: "Web Developer",
      logoUrl: "https://www.google.com/s2/favicons?domain=instagram.com&sz=128",
      start: "Jul 2022",
      end: "Jan 2023",
      description:
        "Developed and maintained the Dursa website using Next.js, React, and Tailwind CSS. Built responsive, accessible interfaces, delivered new features, and improved page-load performance.",
    },
  ],
  education: [
    {
      school: "Rana University",
      href: "https://ru.edu.af",
      degree: "Bachelor of Computer Science (BCS) - 83% (estimated GPA 3.32/4.0)",
      logoUrl: "https://www.google.com/s2/favicons?domain=ru.edu.af&sz=128",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "ResumeAF",
      description:
        "A CV and resume builder for creating a resume, choosing a template, and exporting it.",
      technologies: ["Next.js", "React", "TypeScript"],
      href: "https://resume.sleepany.com/",
      links: [],
      image: "/resume_af.png",
      video: "",
    },
    {
      title: "Sunzala Afghan Store",
      description:
        "An Afghan marketplace connecting buyers with authentic crafts, spices, clothing, and gemstones.",
      technologies: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL"],
      href: "https://www.sunzala.app/",
      links: [],
      image: "/sunzala-project.webp",
      video: "",
    },
    {
      title: "Marghai Job Portal",
      description:
        "A full-stack job portal with secure authentication, job browsing, filtering, and real-time applications.",
      technologies: ["React", "Node.js", "REST APIs"],
      href: "https://marghai.vercel.app/",
      links: [],
      image: "/marghai.webp",
      video: "",
    },
    {
      title: "Wadan Real Estate",
      description:
        "A real estate web application built with the MERN stack, including user sign-up and sign-in.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      href: "https://wadan-estate.onrender.com/",
      links: [],
      image: "/wadan.webp",
      video: "",
    },
    {
      title: "Chatak Weather",
      description: "A multilingual weather application built with React and the OpenWeather API.",
      technologies: ["React", "OpenWeather API"],
      href: "https://weather-af.netlify.app/",
      links: [],
      image: "/chatak.webp",
      video: "",
    },
    {
      title: "Singar Store",
      description:
        "An e-commerce application built with React and Tailwind CSS, using Firebase for storage.",
      technologies: ["React", "Tailwind CSS", "Firebase"],
      href: "https://singar.netlify.app/",
      links: [],
      image: "/singar.webp",
      video: "",
    },
  ],
} as const;
