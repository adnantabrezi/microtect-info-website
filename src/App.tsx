import { useEffect } from "react";
import "./index.css";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PowderShowcase } from "./components/PowderShowcase";
import { ParticleSize } from "./components/ParticleSize";
import { Features } from "./components/Features";
import { Benefits } from "./components/Benefits";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  useEffect(() => {
    // Simple reveal on scroll — matching sample.html behavior
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <PowderShowcase />
      <ParticleSize />
      <Features />
      <Benefits />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
