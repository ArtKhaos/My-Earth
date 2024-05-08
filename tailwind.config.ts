import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
        rubik: ['var(--font-rubik)', 'sans-serif'],
      },
    },
    colors: {
      'primary': 'var(--primary)',
      'green': 'var(--green)',
      'blue': 'var(--blue)'
    }
  },
  plugins: [],
};
export default config;
