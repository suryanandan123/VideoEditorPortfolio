import { motion } from "framer-motion";

function SectionTitle({ eyebrow, title, highlight, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl mx-auto text-center mb-14 md:mb-16"
    >
      {eyebrow && (
        <span className="inline-block text-red-500 font-semibold tracking-[0.2em] uppercase text-xs md:text-sm mb-3">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
        {title} <span className="text-red-500">{highlight}</span>
      </h2>

      {description && (
        <p className="text-gray-400 mt-4 text-sm md:text-base leading-7 text-pretty">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;
