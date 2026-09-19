"use client";

import { motion } from "framer-motion";
import { ElasticGallery, type GalleryItem } from "@/components/ui/elastic-gallery";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "02",
    name: "LamarLog",
    description:
      "A personal job application tracker with authentication, dashboard summaries, search, filters, and status history.",
    technologies: ["React", "Express.js", "PostgreSQL", "Sequelize", "JWT"],
    images: [
      "lamarlog-dashboard.png",
      "lamarlog-applications.png",
      "lamarlog-add-application.png",
      "lamarlog-login.png",
    ],
    links: [
      { label: "Live Demo", href: "https://lamarlog-web.vercel.app/login" },
      { label: "Frontend", href: "https://github.com/muhammadwahyupratamaa/lamarlog-web" },
      { label: "Backend", href: "https://github.com/muhammadwahyupratamaa/lamarlog-api" },
    ],
  },
  {
    number: "03",
    name: "ShortLink",
    description:
      "A URL shortener with authenticated link management, custom slugs, pagination, soft deletion, and Redis caching.",
    technologies: ["React", "Express.js", "PostgreSQL", "Redis", "Zod"],
    images: ["shortlink-landing.png", "shortlink-dashboard.png", "shortlink-profile.png"],
    links: [],
  },
];

export function AdditionalProjects() {
  return (
    <div className="mt-20 border-t border-blue-200/[0.18] pt-8 md:mt-28">
      <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-200/80">
        More projects
      </p>
      <div className="divide-y divide-blue-200/[0.18] border-y border-blue-200/[0.18]">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="py-8 md:py-12"
          >
            <div className="mb-7 grid gap-4 md:grid-cols-[80px_minmax(0,1fr)] md:gap-8">
              <span className="font-mono text-xs tracking-[0.2em] text-blue-200/70">{project.number}</span>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-blue-200/65">Personal project</p>
                <h3 className="mt-2 text-3xl font-medium tracking-tight text-white md:text-4xl">{project.name}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-50/75">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-blue-200/[0.18] bg-blue-400/[0.06] px-3 py-1 text-[10px] font-medium text-blue-50/80">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <ElasticGallery
              initialActiveId="01"
              items={project.images.map((image, imageIndex): GalleryItem => ({
                id: String(imageIndex + 1).padStart(2, "0"),
                title: `${project.name} ${imageIndex + 1}`,
                category: "Project screen",
                description: project.description,
                src: `/projects/${image}`,
                alt: `${project.name} screenshot ${imageIndex + 1}`,
              }))}
            />
            {project.links.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2.5 border-t border-blue-200/10 pt-6">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 ${link.label === "Live Demo" ? "bg-blue-500 text-white hover:bg-blue-400" : "border border-blue-300/15 bg-blue-400/[0.05] text-blue-50/75 hover:border-blue-300/30 hover:bg-blue-400/[0.1] hover:text-white"}`}
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </div>
  );
}
