import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F14",
        card: "#121821",
        muted: "#1A2230",
        mint: "#9AE6B4",
        periwinkle: "#A3BFFA",
        apricot: "#FBD38D",
        rose: "#FBB6CE"
      },
      borderRadius: {
        "2xl": "1rem"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.2)"
      }
    }
  },
  plugins: []
}
export default config


