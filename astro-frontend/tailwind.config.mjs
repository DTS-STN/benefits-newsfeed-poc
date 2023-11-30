/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      header: ["Lato", "font-serif"],
      display: ["Lato"],
      body: ["Noto sans"],
    },
    extend: {
      colors: {
        primary: "#26374A",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
