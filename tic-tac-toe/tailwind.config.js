/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        nabla: ["Nabla", "sans-serif"],
        baskervvillesc: ["Baskervville SC", "serif"],
        geo: ["Geo", "serif"]
      }
    },
    plugins: [require('@tailwindcss/typography')],
  }
};
