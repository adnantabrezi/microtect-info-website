import { serve } from "bun";
import index from "./index.html";

const server = serve({
  port: 3002,
  routes: {
    // Serve static assets
    "/logo.svg": Bun.file(import.meta.dir + "/logo.svg"),
    "/logo-white.svg": Bun.file(import.meta.dir + "/logo-white.svg"),
    "/images/powder-white.png": Bun.file(import.meta.dir + "/images/powder-white.png"),
    "/images/powder-tan.png": Bun.file(import.meta.dir + "/images/powder-tan.png"),
    "/images/powder-yellow.png": Bun.file(import.meta.dir + "/images/powder-yellow.png"),
    "/images/powder-brown.png": Bun.file(import.meta.dir + "/images/powder-brown.png"),
    "/images/powder-cream.png": Bun.file(import.meta.dir + "/images/powder-cream.png"),
    "/images/powder-grey.png": Bun.file(import.meta.dir + "/images/powder-grey.png"),
    "/images/micronizer-machine.png": Bun.file(import.meta.dir + "/images/micronizer-machine.png"),
    "/images/air-jet-mill-new.png": Bun.file(import.meta.dir + "/images/air-jet-mill-new.png"),
    "/images/research.jpeg": Bun.file(import.meta.dir + "/images/research.jpeg"),
    "/images/micronisation-cbd.jpg": Bun.file(import.meta.dir + "/images/micronisation-cbd.jpg"),
    // Serve index.html for all unmatched routes.
    "/*": index
  }
});

console.log(`🚀 Server running at ${server.url}`);
