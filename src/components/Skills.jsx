import { motion } from "framer-motion";
import {
  FaVideo,
  FaMagic,
  FaPalette,
  FaCamera,
  FaFilm,
  FaFillDrip,
  FaYoutube,
  FaMobileAlt,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const skills = [
  { name: "Adobe Premiere Pro", level: 80, icon: FaFilm },
  { name: "After Effects", level: 95, icon: FaMagic },
  { name: "DaVinci Resolve", level: 75, icon: FaFillDrip },
  { name: "Photoshop", level: 80, icon: FaPalette },
  { name: "Motion Graphics", level: 90, icon: FaVideo },
  { name: "Color Grading", level: 75, icon: FaCamera },
  { name: "YouTube Editing", level: 95, icon: FaYoutube },
  { name: "Short Form Content", level: 90, icon: FaMobileAlt },
];

function Skills() {
  return (
    <section id="skills" className="bg-black text-white py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="What I'm good at" title="My" highlight="Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-red-500 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="flex items-center gap-3 text-base md:text-lg font-semibold">
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-500/10 text-red-500 text-base">
                    <skill.icon />
                  </span>
                  {skill.name}
                </h3>

                <span className="text-red-500 font-semibold">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full h-2.5 bg-zinc-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="h-full bg-red-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
