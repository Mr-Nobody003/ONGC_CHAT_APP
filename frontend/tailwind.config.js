/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // DaisyUI plugin should be listed here
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin", // Corrected property for Firefox
          scrollbarColor: "white transparent", // Fixed typo (scrollbarColor)
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "white",
            borderRadius: "100%",
            border: "1px solid white",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent", // Transparent track background
          },
        },
      };

      addUtilities(newUtilities); // Ensure new utilities are added
    },
  ],
};
