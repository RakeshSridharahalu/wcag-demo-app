import jsxA11y from "eslint-plugin-jsx-a11y";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      "jsx-a11y": jsxA11y
    },
    rules: {
      // Images
      "jsx-a11y/alt-text": "error",

      // Label + Form fields
      "jsx-a11y/label-has-associated-control": "error",
      "jsx-a11y/no-autofocus": "warn",

      // Interactivity
      "jsx-a11y/click-events-have-key-events": "error",
      "jsx-a11y/no-static-element-interactions": "warn",
      "jsx-a11y/no-noninteractive-element-interactions": "warn",

      // ARIA rules
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",

      // Headings and content
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/anchor-has-content": "error",

      // Tabindex misuse
      "jsx-a11y/no-noninteractive-tabindex": "error"
    }
  }
];
