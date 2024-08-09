import type { Config } from "tailwindcss";
import daisyui from 'daisyui'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [daisyui],
  daisyui: {
    themes: [{
      light: {
        ...require("daisyui/src/theming/themes")["light"],
        "color-scheme": "light",
        primary: "#10408B",
        secondary: "#463AA2",
        accent: "#C148AC",
        neutral: "#021431",
        "base-100": "#ffffff",
        "base-200": "#F2F7FF",
        "base-300": "#E3E9F4",
        "base-content": "#394E6A",
        info: "#93E7FB",
        success: "#0D8C51",
        warning: "#F0BF14",
        error: "#C61414",

      }
    }]
  }
};
export default config;
