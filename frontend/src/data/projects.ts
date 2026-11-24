import posterResearchPapers from "@/assets/posters/poster-research-papers.jpg";
import posterEnhancedCourses from "@/assets/posters/poster-enhanced-courses.jpg";
import posterAiSoftware from "@/assets/posters/poster-ai-software.jpg";
import posterWebsiteDev from "@/assets/posters/poster-website-development.jpg";
import posterTechnicalSeminar from "@/assets/posters/poster-technical-seminar.jpg";
import posterDigitalMarketing from "@/assets/posters/poster-digital-marketing.jpg";
import posterRobotics from "@/assets/posters/poster-robotics.jpg";

import { company, contact } from "@/data/siteContent";

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: "Services" | "Courses" | "Research";
  year: string;
  location: string;
  cover: string;
  ratio: "portrait" | "landscape";
  excerpt: string;
  body: string[];
  credits: { role: string; name: string }[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "research-papers",
    title: "Research Papers Publishing",
    client: "GetSetAI Research Lab",
    category: "Research",
    year: "2026",
    location: "Global / India",
    cover: posterResearchPapers,
    ratio: "landscape",
    excerpt: "Share Your Research. Make an Impact with IEEE, Springer, Elsevier, and arXiv indexing guidance.",
    body: [
      "Expert guidance, journal recommendations, paper editing & review, easy submission, and boosting research impact.",
      "GetSetAI — Your Partner in Research Excellence.",
    ],
    credits: [
      { role: "Initiative", name: "Research Innovation Impact" },
      { role: "Platform", name: "GetSetAI Digital Library" },
    ],
    gallery: [posterResearchPapers],
  },
  {
    slug: "enhanced-courses",
    title: "Enhanced Courses — Go Beyond Basics",
    client: "GetSetAI Academy",
    category: "Courses",
    year: "2026",
    location: "Online",
    cover: posterEnhancedCourses,
    ratio: "landscape",
    excerpt: "Learn In-Demand Skills: Full-Stack Dev, AI, Data Science, UI/UX, Cloud Computing, and Career Growth.",
    body: [
      "Build real projects, gain industry in-demand skills, and learn with experts at GetSetAI Innovations.",
    ],
    credits: [
      { role: "Certification", name: "Industry Recognized" },
      { role: "Format", name: "Hands-on Projects & Mentorship" },
    ],
    gallery: [posterEnhancedCourses],
  },
  {
    slug: "ai-driven-software-solutions",
    title: "AI-Driven Software Solutions",
    client: "Enterprise Solutions",
    category: "Services",
    year: "2026",
    location: "India / Global",
    cover: posterAiSoftware,
    ratio: "landscape",
    excerpt: "Turn Ideas into Intelligent Solutions — Custom AI software, ML models, and smart automation.",
    body: [
      "Custom AI-powered software, machine learning solutions, and intelligent automation across Healthcare, E-Commerce, Finance, Education, and Automotive.",
    ],
    credits: [
      { role: "Capabilities", name: "AI & ML, Cloud & APIs" },
      { role: "Engineering", name: "GetSetAI Innovations" },
    ],
    gallery: [posterAiSoftware],
  },
  {
    slug: "website-development-full-stack",
    title: "Website Development — Full Stack Solutions",
    client: "Digital Solutions",
    category: "Services",
    year: "2026",
    location: "India / Global",
    cover: posterWebsiteDev,
    ratio: "landscape",
    excerpt: "Innovative digital solutions for businesses & startups. Modern designs, high performance, and robust security.",
    body: [
      "Custom websites, web apps, e-commerce stores, backend engineering, UI/UX design, and 24/7 maintenance support.",
    ],
    credits: [
      { role: "Stack", name: "React, Node.js, Next, Python, Cloud" },
      { role: "Performance", name: "Fast, Secure & Scalable" },
    ],
    gallery: [posterWebsiteDev],
  },
  {
    slug: "technical-seminar",
    title: "Technical Seminar & Workshops",
    client: "Academic & Corporate Outreach",
    category: "Services",
    year: "2026",
    location: "Nationwide",
    cover: posterTechnicalSeminar,
    ratio: "landscape",
    excerpt: "Build a Strong Portfolio: from learning to real opportunities with real projects and expert guidance.",
    body: [
      "Empowering students and professional teams for a smarter future with hands-on AI tools, development, and career mentorship.",
    ],
    credits: [
      { role: "Outreach", name: "Seminars & Hackathons" },
      { role: "Partners", name: "Universities & Enterprises" },
    ],
    gallery: [posterTechnicalSeminar],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing — Grow Your Brand",
    client: "Growth & Media",
    category: "Services",
    year: "2026",
    location: "India / Global",
    cover: posterDigitalMarketing,
    ratio: "landscape",
    excerpt: "Reach more, sell better with data-driven SEO, performance marketing, social media, and brand building.",
    body: [
      "Strategic marketing plans, creative campaigns, lead generation, social media management, and online sales acceleration.",
    ],
    credits: [
      { role: "Reach", name: "Google, Meta, LinkedIn, YouTube" },
      { role: "Strategy", name: "Data-Driven Performance Growth" },
    ],
    gallery: [posterDigitalMarketing],
  },
  {
    slug: "robotics-and-automation",
    title: "Robotics & Automation Systems",
    client: "Applied Robotics Lab",
    category: "Services",
    year: "2026",
    location: "India",
    cover: posterRobotics,
    ratio: "landscape",
    excerpt: "Smart robots, a smarter future. Designing intelligent robotic systems and automation for the real world.",
    body: [
      "AI-powered robotics, intelligent automation, design & build, and industry 4.0 applications in Manufacturing, Healthcare, Automotive, and Agriculture.",
    ],
    credits: [
      { role: "Specialization", name: "Industry 4.0, ROS & Embedded AI" },
      { role: "Applications", name: "Automation & Robotics Design" },
    ],
    gallery: [posterRobotics],
  },
];

export const categories = ["All", "Services", "Courses", "Research"] as const;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function nextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length]!;
}
