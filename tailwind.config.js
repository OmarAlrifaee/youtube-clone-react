/** @type {import('tailwindcss').Config} */
import lineClamp from "@tailwindcss/line-clamp";
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-bg": "#212121",
      },
    },
  },
  plugins: [lineClamp],
};
