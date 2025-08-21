/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepsea: "#0B1D2A",
        abyss: "#07151C",
        surface: "#0F2531",
        raised: "#123242",
        borderdark: "#1F3442",
        brand: "#06B6D4",
        brandHover: "#0891B2",
        brandRing: "#22D3EE",
        success: "#34D399",
        warning: "#F59E0B",
        error: "#F87171",
        info: "#7DD3FC",
        infoHover: "#BAE6FD",
        heading: "#E6F7FB",
        body: "#C2D7E1",
        muted: "#8CA3B0",
        disabled: "#5E7785"
      },
      backgroundImage: {
        oceanGrad: "linear-gradient(to bottom, #0B1D2A, #0F3C4C)",
      },
      boxShadow: {
        glow: "0 0 0 4px rgba(34, 211, 238, 0.25)",
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  plugins: [],
}
