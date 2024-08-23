import { createPreset } from "fumadocs-ui/tailwind-plugin";
import { Config } from "tailwindcss";

import sharedConfig from "@fiscale/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./src/app/**/*.tsx",
    "./components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  presets: [sharedConfig, createPreset()],
};

export default config;