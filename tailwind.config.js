/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",       
    "./components/**/*.{js,jsx,ts,tsx,mdx}", 
    "./*.{js,jsx,ts,tsx,mdx}",      
  ],
  theme: {
    extend: {
      colors: {
        brand: "#0072ce",   // Brand Blue
        prime: "#000000",   // Dark Black
        back: "#232f3e",    // Background
        type: "#6cace4",    // Typography Accent
        form: "#3c63aa",    // Form Blue
      },
    },
  },
  plugins: [],
};