import { Hero } from "../components/Hero";
import { ServicesGrid } from "../components/ServicesGrid";
import { Industries } from "../components/Industries";
import { ScaleTimeline } from "../components/ScaleTimeline";
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
      <ServicesGrid />
      <Industries />
      <ScaleTimeline />
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
