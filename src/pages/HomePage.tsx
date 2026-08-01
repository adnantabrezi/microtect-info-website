import { Hero } from "../components/Hero";
import { useSEO } from "../components/useSEO";
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
  useSEO(
    "Microtech India — Contract Micronization Services",
    "Microtech India offers FDA-approved contract micronization services for pharmaceutical APIs. Precision particle size reduction from 10g to large volume production."
  );
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
