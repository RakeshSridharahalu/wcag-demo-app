import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import AxeBuilder from "@axe-core/playwright";

async function runA11yScan() {
  const browser = await chromium.launch();

  // REQUIRED by latest axe-core/playwright
  const context = await browser.newContext();
  const page = await context.newPage();

  // Load your preview build
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });

  // Run WCAG scan
  const results = await new AxeBuilder({ page }).analyze();

  // Save report
  const outDir = path.join(process.cwd(), "reports");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  fs.writeFileSync(
    path.join(outDir, "axe-runtime.json"),
    JSON.stringify(results, null, 2)
  );

  console.log("Runtime WCAG scan complete!");
  await browser.close();
}

runA11yScan();
