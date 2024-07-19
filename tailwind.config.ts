import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      lineClamp: {
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3b82f6",

          secondary: "#ff6000",

          accent: "#c13500",

          neutral: "#1c1e2d",

          "base-100": "#1b2835",

          info: "#00b1ff",

          success: "#00c05b",

          warning: "#ffcf00",

          error: "#ff576f",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
