/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tech-black': '#0a0a0a',
        'tech-gray': '#1a1a1a',
        'neon-green': '#00ff41',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 10px rgba(0, 255, 65, 0.5)',
      },
    },
  },
  plugins: [],
}
