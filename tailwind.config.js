/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0F172A',
          800: '#1E293B',
        },
        blue: {
          500: '#3BB2F6',
          600: '#2BA5E8',
        },
        violet: {
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        amber: {
          500: '#F59E0B',
          600: '#D97706',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
