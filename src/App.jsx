import BackToTop from "./components/BackToTop";
import { useState } from "react";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) =>
        setMouse({
          x: e.clientX,
          y: e.clientY,
        })
      }
      className="relative w-full min-h-screen overflow-x-hidden bg-black"
    >

      <div
        className="pointer-events-none fixed w-96 h-96 rounded-full blur-[140px] opacity-20 bg-red-500 transition-all duration-100"
        style={{
          left: mouse.x - 180,
          top: mouse.y - 180,
        }}
      />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Stats />
      <Contact />
      <Footer />
      <BackToTop />

    </div>
  );
}

export default App;