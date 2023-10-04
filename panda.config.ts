import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  jsxFramework: "solid",
  presets: ["@pandacss/dev/presets", "@park-ui/presets"],
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "#174C73" },
          secondary: { value: "#EE0F0F" },
          accent: { value: "#F0811D" },
        },
      },
    },
  },

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "styled-system",
});
