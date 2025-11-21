import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import axeSource from "@axe-core/playwright";

async function runA11yScan() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // URL of your app (local build served by Vite)
  await page.goto("http://localhost:5173");

  // Inject axe-core
  await page.addScriptTag({ content: axeSource });

  const results = await page.evaluate(async () => {
    return await axe.run();
  });

  // Save results
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
