/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "primary-gradient": "var(--gradient-primary)",
      },
      colors: {
        primary: "#FF852C",
      },
      backgroundColor: {
        background: "#222222",
        "secondary-background": "#282828",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF852C",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",

          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          "—-animation-btn": "0.25s",
          "—-animation-input": "0.2s",
          "—-btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "—-tab-radius": "0.5rem",
        },
      },
    ],
  },
};
