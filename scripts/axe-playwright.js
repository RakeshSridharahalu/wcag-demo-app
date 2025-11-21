// import { chromium } from "playwright";
// import fs from "fs";
// import path from "path";
// import AxeBuilder from "@axe-core/playwright";

// async function runA11yScan() {
//   const browser = await chromium.launch();
//   const context = await browser.newContext();   // REQUIRED by axe-core
//   const page = await context.newPage();

//   await page.goto("http://localhost:5173");

//   const results = await new AxeBuilder({ page })
//     .withTags(["wcag2a", "wcag2aa"])
//     .analyze();

//   const outDir = "reports";
//   if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

//   fs.writeFileSync(
//     path.join(outDir, "axe-runtime.json"),
//     JSON.stringify(results, null, 2)
//   );

//   console.log("Runtime WCAG scan completed successfully.");
//   await browser.close();
// }

// runA11yScan();

import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { AxeBuilder } from "@axe-core/playwright";

async function runA11yScan() {
  const browser = await chromium.launch();
  const context = await browser.newContext();  // FIX: Required by new AxeBuilder
  const page = await context.newPage();

  await page.goto("http://localhost:5173", { waitUntil: "load" });

  // Run axe accessibility scan
  const results = await new AxeBuilder({ page }).analyze();

  // Ensure reports folder exists
  const outputDir = path.join(process.cwd(), "reports");
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  // Save report
  fs.writeFileSync(
    path.join(outputDir, "axe-runtime.json"),
    JSON.stringify(results, null, 2)
  );

  console.log("Runtime WCAG report created: reports/axe-runtime.json");

  await browser.close();
}

runA11yScan();
