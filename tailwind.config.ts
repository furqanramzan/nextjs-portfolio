import type { Config } from 'tailwindcss';
import { orange, yellow } from 'tailwindcss/colors';
import flowbite from 'flowbite/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [flowbite],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: orange,
        secondary: yellow,
      },
    },
  },
};
export default config;
