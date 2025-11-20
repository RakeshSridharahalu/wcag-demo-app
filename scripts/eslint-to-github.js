import fs from "fs";

const reportPath = "reports/eslint-a11y.json";

if (!fs.existsSync(reportPath)) {
  console.log("No ESLint report found.");
  process.exit(0);
}

const data = JSON.parse(fs.readFileSync(reportPath, "utf8"));

const annotations = [];
let errorCount = 0;
let warningCount = 0;

data.forEach((file) => {
  const path = file.filePath.replace(process.cwd() + "\\", "");
  file.messages.forEach((msg) => {
    const level = msg.severity === 2 ? "failure" : "warning";
    if (msg.severity === 2) errorCount++;
    else warningCount++;

    annotations.push({
      path,
      start_line: msg.line,
      end_line: msg.endLine || msg.line,
      annotation_level: level,
      message: msg.message + ` (rule: ${msg.ruleId})`,
      title: `WCAG: ${msg.ruleId}`
    });
  });
});

fs.writeFileSync(
  "reports/eslint-annotations.json",
  JSON.stringify({ errorCount, warningCount, annotations }, null, 2)
);

console.log("WCAG static scan complete.");