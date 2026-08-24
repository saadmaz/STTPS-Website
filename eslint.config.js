import js from "@eslint/js";
import nextConfig from "eslint-config-next";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: [".next", "next-env.d.ts"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, ...nextConfig],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  eslintPluginPrettier,
);
