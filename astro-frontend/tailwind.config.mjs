/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(38, 55, 74)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
