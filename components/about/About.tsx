"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Code2, Database, Download, Layers3, Server } from "lucide-react";
import Image from "next/image";

const capabilities = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Building responsive interfaces with strong attention to detail, interaction, and usability.",
    icon: Layers3,
    technologies: ["React", "Next.js", "Tailwind"],
  },
  {
    number: "02",
    title: "Backend",
    description:
      "Designing APIs and application logic with maintainable architecture and clear data flow.",
    icon: Server,
    technologies: ["Node.js", "Go", "REST API"],
  },
  {
    number: "03",
    title: "Database",
    description:
      "Working with structured data, relationships, queries, and backend persistence.",
    icon: Database,
    technologies: ["PostgreSQL", "SQL"],
  },
];

const experience = [
  {
    period: "May 2026 — August 2026",
    role: "Talent · Full-Stack Development",
    company: "Koda · Depok, Indonesia",
    summary:
      "Building full-stack applications with React, Node.js, Go, PostgreSQL, and Docker. Built BrilianShop across its storefront, authentication, catalog, checkout, and REST APIs.",
    highlights: [
      "Developed scalable full-stack applications with React, JavaScript, Tailwind CSS, Node.js, Go, and PostgreSQL.",
      "Built BrilianShop: authentication, product catalog, cart, wishlist, checkout flow, and order history.",
      "Designed and integrated RESTful APIs for secure, efficient client–server communication.",
      "Worked with PostgreSQL data modeling, relationships, queries, and Sequelize ORM.",
      "Containerized development environments with Docker for consistent delivery.",
      "Used Git, reusable component architecture, debugging, and clean-code practices in project-based collaboration.",
    ],
  },
  {
    period: "Feb 2025 — Feb 2026",
    role: "Warehouse Worker",
    company: "Yuan Neng Farmer Mesin Indonesia · South Lampung",
    summary:
      "Managed inventory movement while supporting product content, live-stream promotion, and the day-to-day coordination behind operations.",
    highlights: [
      "Maintained accurate inventory movement in a fast-paced warehouse environment.",
      "Hosted live streams to promote products and engage customers.",
      "Created product photography and promotional video content with operations and sales teams.",
    ],
  },
];

const education = [
  {
    period: "2020 — 2024",
    school: "University of Baturaja",
    program: "Bachelor of English Language Education · GPA 3.60",
    highlights: [
      "Active in BEM, HIMABING, and Bujang Gadis Kampus activities.",
      "Built leadership, teamwork, and project coordination through student organizations.",
      "Contributed to member development, faculty religious and social events, and event planning.",
    ],
  },
  {
    period: "May 2026 — August 2026",
    school: "Koda",
    program: "Full-Stack Web Development",
    highlights: [
      "Built applications with JavaScript, React, Node.js, Go, and PostgreSQL.",
      "Worked with REST APIs, authentication, Sequelize, Docker, Git, and GitHub.",
      "Applied database modeling, middleware, authorization, CRUD flows, and collaborative development.",
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        isolate
        overflow-hidden
        border-t
        border-blue-400/[0.08]
        text-white
      "
      style={{ backgroundColor: "rgb(3 28 38 / 62%)" }}
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Blue glow */}

        <div
          className="
            absolute
            left-[-12%]
            top-[20%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/[0.06]
            blur-[150px]
          "
        />

        {/* Cyan glow */}

        <div
          className="
            absolute
            bottom-[-10%]
            right-[-5%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-400/[0.045]
            blur-[150px]
          "
        />

        {/* Subtle center light */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-600/[0.025]
            blur-[180px]
          "
        />

        {/* Subtle grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.35) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.35) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse at center, black 15%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 15%, transparent 80%)",
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-32 lg:px-10 lg:py-44">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
            }}
            className="flex justify-center gap-3"
          >
            <span className="h-px w-8 bg-blue-400/70" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-blue-200/90
              "
            >
              About
            </span>
        </motion.div>

        <motion.h2
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mx-auto
                mt-8
                max-w-[1200px]
                text-center
                text-[clamp(1.1rem,7vw,5.9rem)]
                font-semibold
                leading-[0.94]
                tracking-[-0.065em]
                sm:mt-10
                sm:text-[clamp(2rem,6.5vw,3rem)]
                md:text-6xl
                lg:text-[clamp(3.5rem,6vw,5.9rem)]
              "
            >
              <span className="block whitespace-nowrap">I build digital experiences</span>
              <span className="mt-2 block whitespace-nowrap sm:mt-3">
                with {" "}
                <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                  purpose.
                </span>
              </span>
        </motion.h2>

        <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="mt-12 grid gap-8 border-t border-blue-200/[0.10] pt-8 md:mt-16 md:grid-cols-2 lg:grid-cols-[210px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-12"
            >
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[210px] overflow-hidden rounded-2xl border border-blue-200/25 bg-[#031c26] shadow-2xl shadow-blue-950/60 md:row-span-2 lg:mx-0">
                <Image src="/images/pra.png" alt="Muhammad Wahyu Pratama" fill sizes="(min-width: 1024px) 210px, 60vw" className="object-cover object-center" />
              </div>
              <p
                className="
                  max-w-xl
                  text-lg
                  leading-8
                  text-white/90
                  md:text-xl
                "
              >
                I&apos;m Muhammad Wahyu Pratama, a fullstack developer focused on
                creating modern, responsive, and meaningful web experiences.
              </p>

              <div className="max-w-xl">
                <p
                  className="
                    text-sm
                    leading-7
                    text-blue-50/80
                  "
                >
                  I enjoy working across the stack — from crafting interfaces
                  and interactions to building APIs, managing data, and thinking
                  about how everything works together.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <a
                    href="#skills"
                    className="group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-blue-200/90 transition-colors hover:text-blue-200"
                  >
                    What I work with
                    <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
                  </a>
                  <a
                    href="/Muhammad-Wahyu-Pratama-CV.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-blue-200/30 bg-blue-100/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-blue-200 hover:text-[#031c26]"
                  >
                    Download CV
                    <Download className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
        </motion.div>

        <div className="mt-20 border-t border-blue-200/[0.10] pt-8 md:mt-32">
          <div className="mb-8 flex items-center justify-between border-b border-blue-200/[0.10] pb-5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-blue-200/80">
              Experience
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-blue-200/80">Selected roles</span>
          </div>

          <div className="divide-y divide-blue-200/[0.08]">
            {experience.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                className="grid gap-4 py-7 md:grid-cols-[170px_1fr_minmax(20rem,1fr)] md:gap-8 md:py-9"
              >
                <span className="font-mono text-xs text-blue-200/80">{item.period}</span>
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-white md:text-2xl">{item.role}</h3>
                  <p className="mt-1 text-sm text-blue-100/85">{item.company}</p>
                </div>
                <div>
                  <p className="max-w-md text-sm leading-7 text-white/80">{item.summary}</p>
                  <ul className="mt-4 space-y-2 border-l border-blue-300/25 pl-4 text-sm leading-6 text-blue-50/75">
                    {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-blue-200/[0.10] pt-8 md:mt-32">
          <div className="mb-8 flex items-center justify-between border-b border-blue-200/[0.10] pb-5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-blue-200/80">Education</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-blue-200/80">Learning path</span>
          </div>

          <div className="divide-y divide-blue-200/[0.08]">
            {education.map((item, index) => (
              <motion.div
                key={item.school}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                className="grid gap-3 py-7 md:grid-cols-[170px_1fr] md:gap-8 md:py-9"
              >
                <span className="font-mono text-xs text-blue-200/80">{item.period}</span>
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-white md:text-2xl">{item.school}</h3>
                  <p className="mt-1 text-sm text-blue-100/85">{item.program}</p>
                  <ul className="mt-4 space-y-2 border-l border-blue-300/25 pl-4 text-sm leading-6 text-blue-50/75">
                    {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =====================================================
            CAPABILITIES
        ====================================================== */}

        <div className="mt-20 md:mt-32 lg:mt-44">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              mb-8
              flex
              items-center
              justify-between
              border-b
              border-blue-200/[0.10]
              pb-5
            "
          >
            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-blue-200/80
              "
            >
              What I do
            </span>

            <Code2 className="h-4 w-4 text-blue-200/75" />
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className="
                    group
                    flex
                    h-full
                    flex-col
                    rounded-2xl
                    border
                    border-blue-200/[0.12]
                    bg-[#031c26]/45
                    p-6
                    transition-colors
                    duration-300
                    hover:border-blue-200/30
                    hover:bg-blue-950/35
                  "
                >
                  {/* Number */}

                  <span
                    className="
                      font-mono
                      text-xs
                      text-blue-200/70
                    "
                  >
                    {item.number}
                  </span>

                  {/* Title */}

                  <div className="mt-6 flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-blue-300/[0.10]
                        bg-blue-400/[0.04]
                        transition-all
                        duration-300
                        group-hover:border-blue-400/30
                        group-hover:bg-blue-400/[0.10]
                        group-hover:shadow-[0_0_30px_rgba(37,99,235,0.12)]
                      "
                    >
                      <Icon
                        className="
                          h-4
                          w-4
                          text-blue-200/85
                          transition-colors
                          duration-300
                          group-hover:text-blue-200
                        "
                      />
                    </div>

                    <h3
                      className="
                        text-2xl
                        font-medium
                        tracking-tight
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-white
                        md:text-3xl
                      "
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}

                  <p
                    className="
                      mt-6
                      text-sm
                      leading-7
                      text-white/75
                      transition-colors
                      duration-300
                      group-hover:text-white/50
                    "
                  >
                    {item.description}
                  </p>

                  {/* Technologies */}

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-2
                      mt-6
                    "
                  >
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full
                          border
                          border-blue-300/[0.10]
                          bg-blue-400/[0.04]
                          px-3
                          py-1.5
                          text-[9px]
                          uppercase
                          tracking-[0.15em]
                          text-blue-50/80
                          transition-all
                          duration-300
                          group-hover:border-blue-300/20
                          group-hover:bg-blue-400/[0.06]
                          group-hover:text-blue-100/55
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-20
            border-t
            border-blue-200/[0.10]
            pt-10
            lg:mt-44
            md:mt-32
          "
        >
          <p
            className="
              max-w-4xl
              text-2xl
              font-medium
              leading-relaxed
              tracking-tight
              text-white/90
              md:text-4xl
              md:leading-tight
            "
          >
            Good software isn&apos;t only about making things work.
            <span className="text-blue-100/75">
              {" "}
              It&apos;s about making them feel right.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
