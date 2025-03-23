import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Get the current directory of the file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a compat instance with the base directory
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend the ESLint config
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  // Add custom rules here
  {
    rules: {
      "react/no-unescaped-entities": "off",  // Disable the rule
      "@next/next/no-img-element": "off",   // Disable the rule for <img> elements
    },
  },
];

export default eslintConfig;
