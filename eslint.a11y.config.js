import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "jsx-a11y": jsxA11y
    },
    rules: {
      // BASIC WCAG CHECKS
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/aria-role": "error",

      // FORM LABEL ISSUES
      "jsx-a11y/label-has-associated-control": "error",

      // BUTTON & INTERACTION (supported in v6)
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/no-static-element-interactions": "warn",
      "jsx-a11y/no-noninteractive-element-interactions": "warn",
      "jsx-a11y/no-noninteractive-tabindex": "warn",
      "jsx-a11y/tabindex-no-positive": "warn",

      // HEADINGS & SEMANTIC STRUCTURE
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/no-redundant-roles": "warn",

      // ARIA PROPS
      "jsx-a11y/aria-props": "error"
    }
  }
];
