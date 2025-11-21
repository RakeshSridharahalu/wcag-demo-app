import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { injectAxe, getAxeResults } from "axe-playwright";

async function runA11yScan() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const url = "http://localhost:5173";

  // 🔥 Wait for Vite preview server to be available
  let ready = false;
  for (let i = 0; i < 20; i++) {
    try {
      await page.goto(url, { waitUntil: "load", timeout: 2000 });
      ready = true;
      break;
    } catch (e) {
      console.log("Waiting for server...", i + 1);
      await new Promise((res) => setTimeout(res, 1000));
    }
  }

  if (!ready) {
    console.error("❌ Vite server not reachable. Axe scan aborted.");
    process.exit(1);
  }

  console.log("✅ Vite server is up — running Axe audit...");

  // Inject axe-core properly
  await injectAxe(page);

  // Run Axe WCAG scan
  const results = await getAxeResults(page);

  // Ensure reports directory exists
  const outDir = path.join(process.cwd(), "reports");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  // Save results
  fs.writeFileSync(
    path.join(outDir, "axe-runtime.json"),
    JSON.stringify(results, null, 2)
  );

  console.log("🎉 Runtime WCAG scan complete!");

  await browser.close();
}

runA11yScan();
