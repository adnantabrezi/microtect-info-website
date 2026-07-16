import { useEffect } from "react";
import "./index.css";

import { useRoute } from "./components/Router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";
import { FacilitiesPage } from "./pages/FacilitiesPage";
import { ParticlesBackground } from "./components/ParticlesBackground";
import { ServiceMicronizationPage } from "./pages/ServiceMicronizationPage";
import { ServiceMillingPage } from "./pages/ServiceMillingPage";
import { ServiceSievingPage } from "./pages/ServiceSievingPage";
import { ServiceAnalysisPage } from "./pages/ServiceAnalysisPage";

function PageContent({ route }: { route: string }) {
  if (route.startsWith("services/micronization")) return <ServiceMicronizationPage />;
  if (route.startsWith("services/milling")) return <ServiceMillingPage />;
  if (route.startsWith("services/sieving")) return <ServiceSievingPage />;
  if (route.startsWith("services/analysis")) return <ServiceAnalysisPage />;

  switch (route) {
    case "about":
      return <AboutPage />;
    case "facilities":
      return <FacilitiesPage />;
    case "services":
      return <ServicesPage />;
    case "contact":
      return <ContactPage />;
    case "home":
    default:
      return <HomePage />;
  }
}

export function App() {
  const route = useRoute();

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
  }, [route]); // Re-run when route changes so new page elements get observed

  return (
    <>
      <ParticlesBackground />
      <Header />
      <PageContent route={route} />
      <Footer />
    </>
  );
}

export default App;
