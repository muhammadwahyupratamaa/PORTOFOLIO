"use client";

import {
  siReact,
  siNextdotjs,
  siSequelize,
  siTailwindcss,
  siJavascript,
  siNodedotjs,
  siGo,
  siPostgresql,
  siDocker,
  siGit,
  siGithub,
  siFigma,
} from "simple-icons";

type Skill = {
  title: string;
  icon: {
    path: string;
  };
};

const frontend: Skill[] = [
  {
    title: "React",
    icon: siReact,
  },
  {
    title: "Next.js",
    icon: siNextdotjs,
  },
  {
    title: "Sequelize",
    icon: siSequelize,
  },
  {
    title: "Tailwind CSS",
    icon: siTailwindcss,
  },
  {
    title: "JavaScript",
    icon: siJavascript,
  },
];

const backendAndTools: Skill[] = [
  {
    title: "Node.js",
    icon: siNodedotjs,
  },
  {
    title: "Go",
    icon: siGo,
  },
  {
    title: "PostgreSQL",
    icon: siPostgresql,
  },
  {
    title: "Docker",
    icon: siDocker,
  },
  {
    title: "Git",
    icon: siGit,
  },
  {
    title: "GitHub",
    icon: siGithub,
  },
  {
    title: "Figma",
    icon: siFigma,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        isolate
        overflow-hidden
        py-20
        text-white
        md:py-40
      "
      style={{ backgroundColor: "rgb(3 28 38 / 62%)" }}
    >
      {/* =====================================================
          AMBIENT LIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-12%]
          top-[15%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-500/[0.06]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-10%]
          right-[-8%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-400/[0.045]
          blur-[140px]
        "
      />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="relative z-20 mx-auto max-w-7xl px-5 md:px-8">
        <div
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >
          <div>
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-blue-400/60" />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.4em]
                  text-blue-300/60
                "
              >
                  Capabilities
              </span>
            </div>

            <h2
              className="
                mx-auto
                max-w-4xl
                text-[clamp(2.5rem,7vw,6.5rem)]
                font-semibold
                tracking-[-0.05em]
                text-white
                md:text-6xl
              "
            >
              Tools that move
              <span className="block text-blue-200/75">ideas into products.</span>
            </h2>
          </div>

        </div>
        <p className="mx-auto mt-7 max-w-md text-center text-sm leading-7 text-blue-50/70">
          A working toolkit for interfaces, reliable services, and the delivery in between.
        </p>
      </div>

      {/* =====================================================
          MARQUEES
      ====================================================== */}

      <div className="relative z-20 mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-3 px-5 sm:grid-cols-3 md:hidden">
        {[...frontend, ...backendAndTools].map((skill) => (
          <MobileSkillCard key={skill.title} skill={skill} />
        ))}
      </div>

      <div className="relative z-20 mt-16 hidden overflow-hidden md:block md:mt-24">
        {/* Left fade */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-30
            w-20
            bg-gradient-to-r
            from-[#031c26]
            to-transparent
            md:w-56
          "
        />

        {/* Right fade */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-30
            w-20
            bg-gradient-to-l
            from-[#031c26]
            to-transparent
            md:w-56
          "
        />

        {/* =================================================
            FRONTEND
        ================================================== */}

        <Marquee items={frontend} direction="left" speed="32s" />

        {/* =================================================
            BACKEND + TOOLS
        ================================================== */}

        <div className="relative mt-4">
          <Marquee items={backendAndTools} direction="right" speed="30s" />
        </div>
      </div>
    </section>
  );
}

function MobileSkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="flex min-w-0 items-center gap-2.5 rounded-2xl border border-blue-200/[0.16] bg-[#031c26]/55 px-3 py-4 shadow-lg shadow-blue-950/20 backdrop-blur-sm">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 shrink-0 fill-blue-100/85"
        aria-hidden="true"
      >
        <path d={skill.icon.path} />
      </svg>
      <span className="truncate text-xs font-medium text-white/90">
        {skill.title}
      </span>
    </div>
  );
}

/* ============================================================
   MARQUEE
============================================================ */

function Marquee({
  items,
  direction,
  speed,
}: {
  items: Skill[];
  direction: "left" | "right";
  speed: string;
}) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="group flex overflow-hidden">
      <div
        style={{
          animationDuration: speed,
        }}
        className={`
          flex
          w-max
          shrink-0
          items-center
          gap-3
          px-3
          ${
            direction === "left"
              ? "animate-skills-left"
              : "animate-skills-right"
          }
          group-hover:[animation-play-state:paused]
        `}
      >
        {repeated.map((skill, index) => (
          <SkillCard key={`${skill.title}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   SKILL CARD
============================================================ */

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div
      className="
        group/card
        relative
        flex
        h-[68px]
        items-center
        gap-3
        rounded-2xl
        border
        border-blue-200/[0.09]
        bg-blue-400/[0.035]
        px-5
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-blue-300/[0.25]
        hover:bg-blue-400/[0.08]
        md:h-[74px]
        md:px-6
      "
    >
      {/* =====================================================
          CARD GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-2xl
          bg-blue-400/[0.07]
          opacity-0
          blur-xl
          transition-opacity
          duration-500
          group-hover/card:opacity-100
        "
      />

      {/* =====================================================
          ICON
      ====================================================== */}

      <div
        className="
          relative
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          transition-transform
          duration-500
          group-hover/card:scale-110
        "
      >
        <svg
          viewBox="0 0 24 24"
          className="
            h-6
            w-6
            fill-blue-100/45
            transition-all
            duration-500
            group-hover/card:fill-blue-200
            group-hover/card:drop-shadow-[0_0_7px_rgba(96,165,250,0.45)]
          "
          aria-hidden="true"
        >
          <path d={skill.icon.path} />
        </svg>
      </div>

      {/* =====================================================
          NAME
      ====================================================== */}

      <span
        className="
          relative
          whitespace-nowrap
          text-sm
          font-medium
          tracking-[-0.01em]
          text-white/45
          transition-colors
          duration-500
          group-hover/card:text-white/90
          md:text-[15px]
        "
      >
        {skill.title}
      </span>

      {/* =====================================================
          DOT
      ====================================================== */}

      <span
        className="
          ml-1
          h-1
          w-1
          rounded-full
          bg-blue-300/20
          transition-all
          duration-500
          group-hover/card:bg-blue-300
          group-hover/card:shadow-[0_0_8px_rgba(96,165,250,0.8)]
        "
      />
    </div>
  );
}
