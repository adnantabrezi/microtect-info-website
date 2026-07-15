import { useState, useEffect } from "react";

export function useRoute(): string {
  const getHash = () => {
    const hash = window.location.hash.replace(/^#\/?/, "").split("?")[0];
    return hash || "home";
  };

  const [route, setRoute] = useState(getHash);

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash && !window.location.hash.startsWith("#/")) {
        return; // It's an in-page anchor, let the browser handle scrolling
      }
      const next = getHash();
      setRoute(next);
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

/** Navigate programmatically */
export function navigate(path: string) {
  window.location.hash = `#/${path}`;
}
