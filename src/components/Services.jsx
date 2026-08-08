import { motion } from "framer-motion";
import {
  FaFilm,
  FaMicrophone,
  FaInstagram,
  FaMagic,
  FaPalette,
  FaImage,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const services = [
  { title: "YouTube Documentary Editing", icon: FaFilm },
  { title: "Talking Head Videos", icon: FaMicrophone },
  { title: "Instagram Reels & Shorts", icon: FaInstagram },
  { title: "Motion Graphics", icon: FaMagic },
  { title: "Color Grading", icon: FaPalette },
  { title: "Thumbnail Design", icon: FaImage },
];

function Services() {
  return (
    <section id="services" className="bg-zinc-950 text-white py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="What I offer" title="My" highlight="Services" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-7 min-h-[150px] flex flex-col justify-center items-center text-center gap-4 hover:border-red-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300"
            >
              <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-500/10 text-red-500 text-xl">
                <service.icon />
              </span>
              <h3 className="text-lg md:text-xl font-bold text-balance">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
