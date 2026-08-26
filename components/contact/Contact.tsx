"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammadwahyupra/",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/muhammadwahyupratamaa",
    icon: FaGithub,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6289530625746",
    icon: FaWhatsapp,
  },
];

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="contact"
      className="
        relative
        isolate
        overflow-hidden
        px-6
        py-20
        text-white
        md:py-44
      "
      style={{
        background: `
          radial-gradient(
            circle at 50% 25%,
            rgba(37, 99, 235, 0.18) 0%,
            transparent 38%
          ),
          radial-gradient(
            circle at 15% 85%,
            rgba(14, 165, 233, 0.08) 0%,
            transparent 30%
          ),
          radial-gradient(
            circle at 90% 75%,
            rgba(30, 64, 175, 0.10) 0%,
            transparent 30%
          ),
          linear-gradient(
            135deg,
            #020617 0%,
            #07152d 50%,
            #020b1c 100%
          )
        `,
      }}
    >
      {/* =====================================================
          AMBIENT LIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/[0.055]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-400/[0.04]
          blur-[140px]
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[520px]
          max-w-6xl
          flex-col
          items-center
          justify-between
        "
      >
        {/* =================================================
            STATUS
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            flex
            items-center
            gap-3
            text-xs
            font-medium
            uppercase
            tracking-[0.3em]
            text-blue-200/45
          "
        >
          <span
            className="
              h-2
              w-2
              rounded-full
              bg-blue-400
              shadow-[0_0_14px_rgba(96,165,250,0.8)]
            "
          />
          Available for projects
        </motion.div>

        {/* =================================================
            MAIN
        ================================================== */}

        <div className="flex flex-col items-center text-center">
          <AnimatePresence mode="wait">
            {!open ? (
              <motion.div
                key="closed"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="flex flex-col items-center"
              >
                {/* Heading */}

                <h2
                  className="
                    max-w-5xl
                    text-5xl
                    font-light
                    tracking-[-0.055em]
                    text-white
                    md:text-8xl
                    lg:text-[9rem]
                  "
                >
                  Let&apos;s work
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
                    together.
                  </span>
                </h2>

                {/* Open Button */}

                <motion.button
                  type="button"
                  onClick={() => setOpen(true)}
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                  className="
                    group
                    mt-10
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-blue-200/15
                    bg-blue-400/[0.04]
                    text-blue-100/70
                    shadow-[0_0_60px_rgba(37,99,235,0.08)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-blue-300/40
                    hover:bg-blue-400/[0.10]
                    hover:text-white
                    hover:shadow-[0_0_80px_rgba(37,99,235,0.18)]
                    md:h-28
                    md:w-28
                  "
                  aria-label="Open contact"
                >
                  <ArrowUpRight
                    className="
                      h-8
                      w-8
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 25,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center"
              >
                {/* Label */}

                <p
                  className="
                    mb-5
                    text-sm
                    uppercase
                    tracking-[0.3em]
                    text-blue-300/45
                  "
                >
                  Let&apos;s talk
                </p>

                {/* Heading */}

                <h2
                  className="
                    max-w-5xl
                    text-4xl
                    font-light
                    tracking-[-0.05em]
                    text-white
                    md:text-7xl
                    lg:text-8xl
                  "
                >
                  Have something
                  <span className="block text-white/25">in mind?</span>
                </h2>

                {/* Description */}

                <p
                  className="
                    mt-8
                    max-w-xl
                    text-sm
                    leading-7
                    text-white/40
                    md:text-base
                  "
                >
                  Whether it&apos;s a product, collaboration, or an opportunity,
                  I&apos;d love to hear what you&apos;re building.
                </p>

                {/* Actions */}

                <div className="mt-8 flex items-center gap-3">
                  {/* WhatsApp */}

                  <a
                    href="https://wa.me/6289530625746"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      bg-blue-500
                      px-6
                      py-3.5
                      text-sm
                      font-medium
                      text-white
                      shadow-lg
                      shadow-blue-500/20
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-blue-400
                      hover:shadow-blue-400/30
                    "
                  >
                    Let&apos;s Talk
                    <ArrowUpRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </a>

                  {/* Close */}

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-blue-200/10
                      bg-blue-400/[0.03]
                      text-white/40
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:border-blue-300/30
                      hover:bg-blue-400/[0.08]
                      hover:text-white
                    "
                    aria-label="Close contact"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* =================================================
            DIRECT CONTACT
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
            duration: 0.7,
          }}
          className="
            flex
            flex-col
            items-center
            gap-4
            text-center
            py-4
          "
        >
          <span
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-blue-100/25
            "
          >
            or reach me directly
          </span>

          <div className="flex items-center gap-4 sm:gap-6">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-white/35
                    transition-all
                    duration-300
                    hover:text-blue-200
                  "
                >
                  <Icon
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                    "
                  />

                  <span className="hidden min-[360px]:inline">{social.label}</span>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
