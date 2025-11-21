import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "jsx-a11y": jsxA11y
    },
    rules: {
      // Basic WCAG requirements
      "jsx-a11y/alt-text": "error",                                 
      "jsx-a11y/anchor-has-content": "error",

      // FORM & LABEL ASSOCIATION (you were missing these)
      "jsx-a11y/label-has-associated-control": "error",
      "jsx-a11y/control-has-associated-label": "error",
      "jsx-a11y/no-autofocus": "warn",

      // BUTTON & INTERACTIVITY
      "jsx-a11y/button-has-content": "error",
      "jsx-a11y/click-events-have-key-events": "error",
      "jsx-a11y/no-noninteractive-element-interactions": "warn",
      "jsx-a11y/no-static-element-interactions": "warn",

      // SEMANTICS
      "jsx-a11y/no-noninteractive-tabindex": "error",
      "jsx-a11y/no-redundant-roles": "warn",
      "jsx-a11y/role-supports-aria-props": "error",

      // HEADINGS + LANDMARKS
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/aria-props": "error",

      // YOUR NEW RULES WILL CATCH:
      // - input without label
      // - button without accessible name
      // - improper form controls
      // - semantic misuse
    }
  }
];
