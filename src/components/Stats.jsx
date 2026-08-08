import { motion } from "framer-motion";
import CountUp from "./CountUp";

const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "100+", label: "Videos Edited" },
  { number: "1M+", label: "Views Generated" },
  { number: "3+", label: "Years Experience" },
];

function Stats() {
  return (
    <section className="bg-black text-white pt-16 pb-24 px-4 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 md:p-7 text-center hover:border-red-500 transition-all duration-300"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-red-500">
                <CountUp value={stat.number} suffix={stat.number.replace(/^\d+/, "")} />
              </h3>
              <p className="text-gray-400 text-sm md:text-base mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
