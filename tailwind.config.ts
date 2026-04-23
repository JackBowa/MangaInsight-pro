import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#e03030',
          50: '#fff1f1', 100: '#ffe0e0', 200: '#ffc5c5', 300: '#ff9999', 400: '#ff5c5c', 500: '#e03030', 600: '#c42020', 700: '#a31515', 800: '#861414', 900: '#701515'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
export default config
