import { FaYoutube, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const socials = [
  { icon: FaEnvelope, href: "mailto:skysuryanandan@gmail.com", external: false, label: "Email" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/suryanandan-bhagat-766ab125a", external: true, label: "LinkedIn" },
  { icon: FaYoutube, href: "https://youtube.com/@SnbThink", external: true, label: "YouTube" },
  { icon: FaWhatsapp, href: "https://wa.me/917260032681", external: true, label: "WhatsApp" },
];

function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 text-gray-400 px-4 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <h2 className="text-white text-xl font-bold">
          SNB <span className="text-red-500">Portfolio</span>
        </h2>

        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, external, label }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 hover:border-red-500 hover:text-red-500 transition-all duration-300"
            >
              <Icon />
            </a>
          ))}
        </div>

        <p className="text-sm">
          © 2026 Suryanandan Bhagat. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
