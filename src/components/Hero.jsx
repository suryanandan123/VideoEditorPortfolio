import {
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import Button from "./Button";

const socials = [
  { icon: FaEnvelope, label: "Email", href: "mailto:skysuryanandan@gmail.com", external: false, hover: "hover:text-red-500" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/suryanandan-bhagat-766ab125a", external: true, hover: "hover:text-red-500" },
  { icon: FaYoutube, label: "YouTube", href: "https://youtube.com/@SnbThink", external: true, hover: "hover:text-red-500" },
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/917260032681", external: true, hover: "hover:text-green-500" },
];

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white flex items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 bg-red-600/10 rounded-full blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-[150px]" />

      {/* MAIN CONTAINER */}
      <div className="hero-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-16">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xl mx-auto lg:mx-0"
          >
            <span className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-gray-300 text-xs md:text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for freelance work
            </span>

            <p className="text-red-500 font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
              Professional Video Editor
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Hi, I'm{" "}
              <span className="text-red-500 whitespace-nowrap">
                Suryanandan
              </span>
            </h1>

            <p className="text-gray-400 mt-6 text-base md:text-lg leading-7 md:leading-8 text-pretty max-w-lg">
              I create high-retention YouTube videos, documentaries,
              talking-head edits, reels and motion graphics that help
              creators grow faster.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <Button href="https://wa.me/917260032681" external variant="primary">
                Hire Me
              </Button>
              <Button href="#projects" variant="outline">
                View Portfolio
              </Button>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 mt-9 text-gray-400">
              {socials.map(({ icon: Icon, label, href, external, hover }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className={`flex items-center gap-2 text-sm md:text-base transition-colors duration-200 ${hover}`}
                >
                  <Icon className="text-lg" />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -12, 0],
            }}
            transition={{
              opacity: { duration: 0.8 },
              x: { duration: 0.8 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-red-500/20 blur-2xl scale-95" />
              <img
                src={profile}
                alt="Suryanandan Bhagat"
                className="relative w-56 md:w-72 lg:w-80 rounded-3xl border-4 border-red-500 shadow-2xl object-cover transition-all duration-500 hover:scale-105 hover:shadow-red-500/40"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hidden md:flex flex-col items-center gap-2 absolute left-1/2 -translate-x-1/2 -bottom-4 text-gray-500 hover:text-red-500 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <span className="w-5 h-9 rounded-full border border-current flex justify-center pt-2">
            <span className="w-1 h-1.5 rounded-full bg-current animate-bounce" />
          </span>
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
