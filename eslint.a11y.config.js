import jsxa11y from "eslint-plugin-jsx-a11y";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    plugins: {
      "jsx-a11y": jsxa11y,
      "@typescript-eslint": tseslint
    },
    rules: {
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/no-autofocus": "warn",
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/no-noninteractive-element-interactions": "warn",
      "jsx-a11y/label-has-associated-control": [
        "error",
        { required: { some: ["nesting", "id"] } }
      ]
    }
  }
];