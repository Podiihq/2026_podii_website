/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        accent: "#F59E0B",
        brand: {
          one: "#44A574",
          two: "#4B68F0",
          three: "#0E7490",
          four: "#EDC343",
        },
      },
    },
  },
  plugins: [],
};
