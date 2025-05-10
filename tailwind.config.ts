import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#000f1e", // Add a custom name for the color
      },
    },
  },
  plugins: [],
};

export default config;