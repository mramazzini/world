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
        //first element is default theme
        dracula: {
          ...require("daisyui/src/theming/themes")["dracula"],
          ".tab-base-300": {
            "--tab-bg": "#1e1f29",
          },
        },
      },
      {
        cupcake: {
          ...require("daisyui/src/theming/themes")["cupcake"],
          primary: "#38bdf8",
          secondary: "#c084fc",
          ".tab-base-300": {
            "--tab-bg": "oklch(91.5861% 0.006811 53.440502)",
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
