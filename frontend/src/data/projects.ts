import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import { company, contact, courses, services } from "@/data/siteContent";

const covers = [p1, p2, p3, p4, p5, p6];

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: "Services" | "Courses";
  year: string;
  location: string;
  cover: string;
  ratio: "portrait" | "landscape";
  excerpt: string;
  body: string[];
  credits: { role: string; name: string }[];
  gallery: string[];
};

const serviceEntries: Project[] = services.map((s, i) => ({
  slug: s.slug,
  title: s.title,
  client: company.name,
  category: "Services",
  year: "Service",
  location: "India",
  cover: covers[i % covers.length]!,
  ratio: i % 2 === 0 ? "portrait" : "landscape",
  excerpt: s.description,
  body: [
    s.description,
    `${company.name} delivers this work as part of a wider practice spanning AI-driven software, full-stack development and enterprise solutions.`,
    `To scope a ${s.title.toLowerCase()} engagement, write to ${contact.email} or call ${contact.phone}.`,
  ],
  credits: [
    { role: "Offering", name: s.title },
    { role: "Delivered by", name: company.name },
    { role: "Availability", name: contact.hours },
  ],
  gallery: [
    covers[i % covers.length]!,
    covers[(i + 2) % covers.length]!,
    covers[(i + 4) % covers.length]!,
  ],
}));

const courseEntries: Project[] = courses.map((c, i) => ({
  slug: c.slug,
  title: c.title,
  client: `${c.price} — Course`,
  category: "Courses",
  year: c.price,
  location: "Online",
  cover: covers[(i + 3) % covers.length]!,
  ratio: i % 2 === 0 ? "landscape" : "portrait",
  excerpt: c.description,
  body: [
    c.description,
    `Enrolment for ${c.title} is listed at ${c.price} on the Getsetai Innovations course catalogue.`,
    `Questions before enrolling? Email ${contact.email} — the team replies ${contact.hours}.`,
  ],
  credits: [
    { role: "Course", name: c.title },
    { role: "Price", name: c.price },
    { role: "Enrol", name: c.url },
  ],
  gallery: [
    covers[(i + 3) % covers.length]!,
    covers[(i + 1) % covers.length]!,
    covers[(i + 5) % covers.length]!,
  ],
}));

export const projects: Project[] = [...serviceEntries, ...courseEntries];

export const categories = ["All", "Services", "Courses"] as const;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function nextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length]!;
}
