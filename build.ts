import { rm } from "node:fs/promises";
import path from "node:path";

const outdir = path.join(process.cwd(), "dist");
await rm(outdir, { recursive: true, force: true });

const entrypoints = [...new Bun.Glob("src/**/*.html").scanSync()];

const result = await Bun.build({
  entrypoints,
  outdir,
  publicPath: "/",
  minify: true,
  target: "browser",
  sourcemap: "linked",
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});

for (const output of result.outputs) {
  console.log(` ${path.relative(process.cwd(), output.path)}  ${(output.size / 1024).toFixed(1)} KB`);
}

// Copy static assets
import { cp } from "node:fs/promises";
await cp("src/images", path.join(outdir, "images"), { recursive: true, force: true }).catch(() => {});
await cp("src/logo.svg", path.join(outdir, "logo.svg"), { force: true }).catch(() => {});
await cp("src/logo-white.svg", path.join(outdir, "logo-white.svg"), { force: true }).catch(() => {});
await cp("src/bg-particles.svg", path.join(outdir, "bg-particles.svg"), { force: true }).catch(() => {});
await cp("src/robots.txt", path.join(outdir, "robots.txt"), { force: true }).catch(() => {});
await cp("src/sitemap.xml", path.join(outdir, "sitemap.xml"), { force: true }).catch(() => {});
await cp("src/.htaccess", path.join(outdir, ".htaccess"), { force: true }).catch(() => {});
await cp("src/llms.txt", path.join(outdir, "llms.txt"), { force: true }).catch(() => {});



