import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaYoutube, FaWhatsapp, FaCopy, FaCheck } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const contactLinks = [
  {
    icon: FaEnvelope,
    label: "Email Me",
    href: "mailto:skysuryanandan@gmail.com",
    external: false,
    hoverClass: "hover:border-red-500 hover:text-red-500",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/suryanandan-bhagat-766ab125a",
    external: true,
    hoverClass: "hover:border-red-500 hover:text-red-500",
  },
  {
    icon: FaYoutube,
    label: "YouTube Channel",
    href: "https://youtube.com/@SnbThink",
    external: true,
    hoverClass: "hover:border-red-500 hover:text-red-500",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/917260032681",
    external: true,
    hoverClass: "hover:border-green-500 hover:text-green-400",
  },
];

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("skysuryanandan@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available, ignore silently
    }
  };

  return (
    <section id="contact" className="bg-zinc-950 text-white py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <SectionTitle
          eyebrow="Let's connect"
          title="Let's"
          highlight="Work Together"
          description="Looking for a professional video editor? Let's create something amazing together."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {contactLinks.map(({ icon: Icon, label, href, external, hoverClass }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className={`flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 font-medium transition-all duration-300 ${hoverClass}`}
            >
              <Icon />
              {label}
            </a>
          ))}
        </div>

        <button
          onClick={copyEmail}
          className="mt-6 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors duration-200"
        >
          {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
          {copied ? "Email copied!" : "Copy email address"}
        </button>
      </div>
    </section>
  );
}

export default Contact;
