/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf2f4',
          100: '#fbe4e8',
          200: '#f8cbd4',
          300: '#f2a4b3',
          400: '#e86f87',
          500: '#d74261',
          600: '#b82747',
          700: '#9b1d39',
          800: '#7B1E2B', // Official Primary Deep Maroon
          900: '#58141e',
          950: '#380a11',
        },
        saffron: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#F59E0B', // Official Saffron
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        cream: {
          50: '#fffdfa',
          100: '#FFF8ED', // Official Cream
          200: '#fdf1dc',
          300: '#f9e4c1',
          400: '#f3cfa0',
          500: '#eab479',
          600: '#dc9452',
          700: '#b87239',
          800: '#925830',
          900: '#77472a',
        },
        sacred: {
          dark: '#1C1917',
          charcoal: '#292524',
          gold: '#D4AF37',
          amber: '#B45309',
        }
      },
      fontFamily: {
        serif: ['"Rozha One"', '"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Poppins"', '"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
        hindi: ['"Noto Sans Devanagari"', '"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        'sacred': '0 10px 30px -10px rgba(123, 30, 43, 0.15)',
        'sacred-lg': '0 20px 40px -15px rgba(123, 30, 43, 0.25)',
        'gold-glow': '0 0 25px rgba(245, 158, 11, 0.35)',
      },
      backgroundImage: {
        'pattern-mandala': "radial-gradient(#7B1E2B 0.75px, transparent 0.75px), radial-gradient(#F59E0B 0.75px, #FFF8ED 0.75px)",
      }
    },
  },
  plugins: [],
}

