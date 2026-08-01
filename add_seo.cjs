const fs = require('fs');

const seoData = {
  "src/pages/AboutPage.tsx": {
    title: "About Microtech India — FDA Approved Contract Micronization",
    desc: "Learn about Microtech India, a leading provider of FDA-approved contract micronization, milling, and sieving services for pharmaceutical APIs and excipients."
  },
  "src/pages/FacilitiesPage.tsx": {
    title: "Facilities — Microtech India | State-of-the-Art Micronization",
    desc: "Explore Microtech India\\'s cGMP compliant and FDA approved contract manufacturing facilities equipped with advanced air jet mills and analytical instruments."
  },
  "src/pages/ServicesPage.tsx": {
    title: "Contract Particle Size Reduction Services — Microtech India",
    desc: "Microtech India offers contract micronization, milling, sieving, and particle size analysis services with a focus on cGMP compliance and FDA standards."
  },
  "src/pages/ContactPage.tsx": {
    title: "Contact Microtech India — Contract Manufacturing & Micronization",
    desc: "Contact Microtech India for your contract micronization, milling, and particle size reduction needs. Get a quote or inquire about our FDA-approved services."
  },
  "src/pages/ServiceMicronizationPage.tsx": {
    title: "Contract Micronization Services — Microtech India",
    desc: "FDA-approved contract micronization services utilizing advanced air jet milling technology for ultra-fine particle size reduction without heat generation."
  },
  "src/pages/ServiceMillingPage.tsx": {
    title: "Contract Milling & Grinding Services — Microtech India",
    desc: "Contract milling and grinding services for pharmaceuticals and excipients, featuring multi-mill and pin-mill technology for precise particle control."
  },
  "src/pages/ServiceSievingPage.tsx": {
    title: "Contract Sieving & Classification Services — Microtech India",
    desc: "Professional contract sieving and particle classification services to ensure uniform particle size distribution for APIs and excipients."
  },
  "src/pages/ServiceAnalysisPage.tsx": {
    title: "Particle Size Analysis Services — Microtech India",
    desc: "Advanced particle size analysis and testing services using state-of-the-art Malvern Mastersizer instruments for strict quality control."
  }
};

for (const [file, seo] of Object.entries(seoData)) {
  if (!fs.existsSync(file)) {
    console.log(`Skipping ${file}`);
    continue;
  }
  let content = fs.readFileSync(file, 'utf-8');
  
  // Skip if already has useSEO
  if (content.includes('useSEO(')) {
    console.log(`Already has useSEO: ${file}`);
    continue;
  }
  
  // Add import
  const importPath = file.startsWith('src/components') ? './useSEO' : '../components/useSEO';
  content = `import { useSEO } from "${importPath}";\n` + content;
  
  // Find the component definition
  // Match `export function PageName() {`
  const match = content.match(/export function (\w+)\(\)\s*\{/);
  if (match) {
    const insertPos = match.index + match[0].length;
    const seoCall = `\n  useSEO(\n    "${seo.title}",\n    "${seo.desc}"\n  );`;
    content = content.slice(0, insertPos) + seoCall + content.slice(insertPos);
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`Could not find component function in ${file}`);
  }
}
