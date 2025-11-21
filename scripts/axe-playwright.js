import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import AxeBuilder from "@axe-core/playwright";

async function runA11yScan() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Load your preview server
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });

  // Run AXE scan — IMPORTANT FIX
  const results = await new AxeBuilder({ page }).analyze();

  // Ensure reports folder exists
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
