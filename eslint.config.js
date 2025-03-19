import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

module.exports = {
  files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "next/core-web-vitals",
    "plugin:react/recommended",
  ],
  ignorePatterns: ["dist", "coverage", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  rules: {
    "react/no-unused-state": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
  plugins: [
    pluginJs,
    tseslint,
    pluginReact,
  ],
};
