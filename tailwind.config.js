import { Config } from "tailwindcss"

const config = {
  content: [
    "./index.html",                   // Vite entry
    "./src/**/*.{js,ts,jsx,tsx}",     // All React/TS files
  ],
  theme: {
    extend: {
      screens: {
        // Mobile devices
        '2xs': '280px',     // Ultra small phones
        'xs': '320px',      // Small phones
        'sm': '480px',      // Mobile phones
        'md': '768px',      // Tablets
        'lg': '1024px',     // Laptops/Desktop
        'xl': '1280px',     // Desktop
        '2xl': '1536px',    // Large desktop
        '3xl': '1920px',    // Full HD (1080p)
        '4xl': '2560px',    // 2K/QHD screens
        '5xl': '3840px',    // 4K UHD screens
        '6xl': '5120px',    // 5K screens
        'tv': '2560px',     // TV/Large displays
        'led': '3840px',    // LED Screens (4K)
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
    },
  },
  plugins: [],
  darkMode: "media"
}

export default config
