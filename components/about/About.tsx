"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Code2, Database, Layers3, Server } from "lucide-react";

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
      style={{
        background: `
          radial-gradient(
            circle at 85% 20%,
            rgba(37, 99, 235, 0.18) 0%,
            transparent 35%
          ),
          radial-gradient(
            circle at 10% 75%,
            rgba(14, 165, 233, 0.10) 0%,
            transparent 30%
          ),
          linear-gradient(
            135deg,
            #020617 0%,
            #07152d 48%,
            #020b1c 100%
          )
        `,
      }}
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

        <div className="grid gap-10 md:gap-16 lg:grid-cols-[0.35fr_1fr]">
          {/* Section label */}

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
            className="flex items-start gap-3"
          >
            <span className="h-px w-8 bg-blue-400/70" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-blue-300/60
              "
            >
              About
            </span>
          </motion.div>

          {/* Main heading */}

          <div>
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
                max-w-5xl
                text-[2.5rem]
                font-semibold
                leading-[0.9]
                tracking-[-0.065em]
                sm:text-5xl
                md:text-[clamp(3rem,7vw,7rem)]
              "
            >
              I build digital
              <span className="block text-white/25">experiences</span>
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-white
                  via-blue-200
                  to-blue-400
                  bg-clip-text
                  text-transparent
                "
              >
                with purpose.
              </span>
            </motion.h2>

            {/* =================================================
                INTRO
            ================================================== */}

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
              className="
                mt-10
                grid
                gap-8
                border-t
                border-blue-200/[0.10]
                pt-8
                md:grid-cols-[1fr_1fr]
              "
            >
              <p
                className="
                  max-w-lg
                  text-lg
                  leading-8
                  text-white/65
                  md:text-xl
                "
              >
                I&apos;m Muhammad Wahyu Pratama, a fullstack developer focused on
                creating modern, responsive, and meaningful web experiences.
              </p>

              <div className="max-w-md">
                <p
                  className="
                    text-sm
                    leading-7
                    text-blue-50/45
                  "
                >
                  I enjoy working across the stack — from crafting interfaces
                  and interactions to building APIs, managing data, and thinking
                  about how everything works together.
                </p>

                <a
                  href="#skills"
                  className="
                    group
                    mt-6
                    inline-flex
                    items-center
                    gap-3
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-blue-300/60
                    transition-colors
                    hover:text-blue-200
                  "
                >
                  What I work with
                  <ArrowDownRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:translate-y-1
                    "
                  />
                </a>
              </div>
            </motion.div>
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
                text-blue-300/40
              "
            >
              What I do
            </span>

            <Code2 className="h-4 w-4 text-blue-300/30" />
          </motion.div>

          <div className="divide-y divide-blue-200/[0.08]">
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
                    grid
                    gap-6
                    py-8
                    transition-colors
                    duration-300
                    md:grid-cols-[80px_0.7fr_1fr_auto]
                    md:items-center
                    md:py-10
                  "
                >
                  {/* Number */}

                  <span
                    className="
                      font-mono
                      text-xs
                      text-blue-300/25
                    "
                  >
                    {item.number}
                  </span>

                  {/* Title */}

                  <div className="flex items-center gap-4">
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
                          text-blue-300/50
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
                        text-white/80
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
                      max-w-md
                      text-sm
                      leading-7
                      text-white/30
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
                      md:justify-end
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
                          text-blue-100/35
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
              text-white/70
              md:text-4xl
              md:leading-tight
            "
          >
            Good software isn&apos;t only about making things work.
            <span className="text-blue-200/25">
              {" "}
              It&apos;s about making them feel right.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
