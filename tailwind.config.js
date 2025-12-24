/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.tsx',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#b23836', // EventVote Red
        secondary: '#FFD700', // Gold
        midnight: '#0f172a', // Deep Slate/Black
        surface: '#1e293b', // Lighter Slate for cards
        highlight: '#fbbf24', // Amber/Gold highlight
      },
      fontFamily: {
        // Assuming system fonts for now
      },
    },
  },
  plugins: [],
}
