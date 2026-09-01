import { ElasticGallery } from "@/components/ui/elastic-gallery";
import { RuixenGradientFooter } from "@/components/ui/ruixen-gradient-footer";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import { ArrowUpRight } from "lucide-react";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* =====================================================
          HERO
      ====================================================== */}

      <Hero />

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <About />

      {/* =====================================================
          SKILLS
      ====================================================== */}

      <Skills />

      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section
        id="projects"
        className="
          relative
          isolate
          overflow-hidden
          px-4
          py-20
          text-white
          md:py-40
          md:px-6
        "
        style={{ backgroundColor: "rgb(3 28 38 / 62%)" }}
      >
        {/* =================================================
            AMBIENT GLOW
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-10
            h-96
            w-96
            rounded-full
            bg-blue-500/10
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-32
            h-[28rem]
            w-[28rem]
            rounded-full
            bg-cyan-400/10
            blur-[160px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-180px]
            left-1/2
            h-[32rem]
            w-[32rem]
            -translate-x-1/2
            rounded-full
            bg-indigo-500/10
            blur-[180px]
          "
        />

        {/* =================================================
            SUBTLE GRID
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.5) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.5) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 80%)",
          }}
        />

        {/* =================================================
            CONTENT
        ================================================== */}

        <div className="relative mx-auto max-w-6xl">
          {/* =================================================
              HEADER
          ================================================== */}

          <div className="mb-8 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end md:gap-8">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-400/60" />

                <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-blue-300/60">
                  Selected Work
                </p>
              </div>

              <h2
                className="
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                  text-white
                  md:text-6xl
                "
              >
                BrilianShop
              </h2>
            </div>

            <div className="max-w-sm">
              <p className="text-sm leading-6 text-blue-50/55">
                A fullstack e-commerce platform built across customer
                experience, administration, backend services, and
                infrastructure.
              </p>
            </div>
          </div>

          {/* =================================================
              GALLERY FRAME
          ================================================== */}

          <div
            className="
              rounded-[1.35rem]
              border
              border-blue-300/10
              bg-blue-950/20
              p-1
              shadow-2xl
              shadow-blue-950/40
              backdrop-blur-sm
            "
          >
            <ElasticGallery />
          </div>

          {/* =================================================
              PROJECT INFORMATION
          ================================================== */}

          <div
            className="
              mt-10
              flex
              flex-col
              gap-8
              border-t
              border-blue-200/10
              pt-8
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            {/* Technology */}

            <div>
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-300/45">
                Technology
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "Go",
                  "PostgreSQL",
                  "Sequelize",
                  "Docker",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-blue-300/15
                      bg-blue-400/[0.05]
                      px-3
                      py-1.5
                      text-[10px]
                      font-medium
                      text-blue-50/65
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:border-blue-300/30
                      hover:bg-blue-400/[0.1]
                      hover:text-white
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}

            <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
              {/* Live Demo */}

              <a
                href="http://103.127.96.192:9402/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  col-span-2
                  items-center
                  gap-2
                  rounded-full
                  bg-blue-500
                  px-5
                  py-2.5
                  text-xs
                  font-medium
                  text-white
                  shadow-lg
                  shadow-blue-500/20
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-blue-400
                  hover:shadow-blue-400/30
                  justify-center
                  sm:col-span-1
                "
              >
                Live Demo
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              {/* Frontend */}

              <a
                href="https://github.com/muhammadwahyupratamaa/koda-b8-react"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-300/15
                  bg-blue-400/[0.05]
                  px-5
                  py-2.5
                  text-xs
                  font-medium
                  text-blue-50/75
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-blue-300/30
                  hover:bg-blue-400/[0.1]
                  hover:text-white
                  justify-center
                "
              >
                Frontend
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              {/* Backend */}

              <a
                href="https://github.com/muhammadwahyupratamaa/koda-b8-backendjs"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-300/15
                  bg-blue-400/[0.05]
                  px-5
                  py-2.5
                  text-xs
                  font-medium
                  text-blue-50/75
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-blue-300/30
                  hover:bg-blue-400/[0.1]
                  hover:text-white
                  justify-center
                "
              >
                Backend
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ====================================================== */}

      <Contact />

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <RuixenGradientFooter gradientHeight="50vh">
        <div className="mx-auto w-full max-w-5xl px-6 pb-28 pt-12 md:py-12">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2026 My Portfolio. All rights reserved.
            </p>

            <div className="flex gap-4 text-gray-500 text-sm">
              <a
                href="https://www.instagram.com/muhammadwahyu_2"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
              >
                Instagram
              </a>

              <a
                href="https://github.com/muhammadwahyupratamaa"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/muhammadwahyupra/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </RuixenGradientFooter>
    </main>
  );
}
