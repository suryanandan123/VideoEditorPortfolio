import { useEffect, useState } from "react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-zinc-800 shadow-lg shadow-black/40"
          : "bg-black/40 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="h-18 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl md:text-3xl font-extrabold text-red-500 tracking-wide"
          >
            SNB
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative py-1 hover:text-red-500 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hire Me */}
          <a
            href="https://wa.me/917260032681"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex bg-red-500 hover:bg-red-600 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/30"
          >
            Hire Me
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-white text-2xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-zinc-950 border-t border-zinc-800 py-6">
            <div className="flex flex-col items-center gap-5 text-center">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-red-500 transition text-base font-medium"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="https://wa.me/917260032681"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-semibold transition w-4/5 max-w-xs text-center"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
