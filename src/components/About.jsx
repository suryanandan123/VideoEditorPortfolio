import { motion } from "framer-motion";
import CountUp from "./CountUp";
import SectionTitle from "./SectionTitle";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "100+", label: "Videos Edited" },
  { value: "1M+", label: "Views Generated" },
  { value: "24/7", label: "Support" },
];

function About() {
  return (
    <section id="about" className="bg-black text-white py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="Get to know me" title="About" highlight="Me" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-10"
        >
          <p className="text-gray-300 text-base md:text-lg leading-8 md:leading-9 text-center md:text-left text-pretty max-w-3xl mx-auto md:mx-0">
            Hi, I'm{" "}
            <span className="text-white font-semibold">
              Suryanandan Bhagat
            </span>
            , a professional Video Editor specializing in YouTube
            documentaries, talking-head videos, podcasts, Instagram Reels
            and YouTube Shorts.
            <br />
            <br />
            I focus on creating high-retention edits with cinematic
            storytelling, motion graphics, smooth transitions and engaging
            pacing that help creators grow their audience and increase watch
            time.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-black rounded-2xl p-5 text-center border border-zinc-800 hover:border-red-500 transition-colors duration-300"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-red-500">
                  {stat.value.match(/^\d+/) ? (
                    <CountUp value={stat.value} suffix={stat.value.replace(/^\d+/, "")} />
                  ) : (
                    stat.value
                  )}
                </h3>
                <p className="text-gray-400 mt-2 text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
