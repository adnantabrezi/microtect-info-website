import { useState, useEffect } from "react";

export function useRoute(): string {
  const getPath = () => {
    // Return path without leading slash, fallback to "home" if empty
    const path = window.location.pathname.replace(/^\/+/, "");
    return path || "home";
  };

  const [route, setRoute] = useState(getPath);

  useEffect(() => {
    const onLocationChange = () => {
      const next = getPath();
      setRoute(next);
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    // Listen to popstate (back/forward buttons)
    window.addEventListener("popstate", onLocationChange);

    // Custom event for internal navigation
    window.addEventListener("pushstate", onLocationChange);
    
    return () => {
      window.removeEventListener("popstate", onLocationChange);
      window.removeEventListener("pushstate", onLocationChange);
    };
  }, []);

  return route;
}

/** Navigate programmatically using History API */
export function navigate(path: string) {
  // Add leading slash if missing
  const url = path.startsWith("/") ? path : `/${path}`;
  window.history.pushState({}, "", url);
  
  // Dispatch custom event to notify components listening to the route
  const navEvent = new PopStateEvent("pushstate");
  window.dispatchEvent(navEvent);
}

/** Link component for history API routing */
export function Link({ to, children, className, onClick, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) {
  const url = to.startsWith("/") ? to : `/${to}`;
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Open in new tab if ctrl/cmd is held
    if (e.ctrlKey || e.metaKey || e.shiftKey) return;
    
    e.preventDefault();
    navigate(to);
    if (onClick) onClick(e);
  };

  return (
    <a href={url} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
