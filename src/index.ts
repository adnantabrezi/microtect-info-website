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
    // Serve index.html for all unmatched routes.
    "/*": index,

    "/api/hello": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async PUT(req) {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    "/api/hello/:name": async req => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
