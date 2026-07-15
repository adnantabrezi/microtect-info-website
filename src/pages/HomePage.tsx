import { Hero } from "../components/Hero";
import { PowderShowcase } from "../components/PowderShowcase";
import { ParticleSize } from "../components/ParticleSize";
import { Features } from "../components/Features";
import { Benefits } from "../components/Benefits";
import { Process } from "../components/Process";
import { Contact } from "../components/Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <PowderShowcase />
      <ParticleSize />
      <Features />
      <Benefits />
      <Process />
      <Contact />
    </>
  );
}

export default HomePage;
