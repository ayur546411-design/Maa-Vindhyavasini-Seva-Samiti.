/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Serene White & Light Blue Theme
        skyblue: {
          50: '#F0F7FF',  // Base ultra-light blue background
          100: '#E0F2FE', // Soft light blue
          200: '#BAE6FD', // Light sky border / highlight
          300: '#7DD3FC', // Vibrant sky blue
          400: '#38BDF8', // Sky accent
          500: '#0EA5E9', // Ocean blue
          600: '#0284C7', // Primary Trust Blue
          700: '#0369A1', // Deep Sky Blue
          800: '#075985', // Dark Ocean Blue
          900: '#0C4A6E', // Navy Blue
          950: '#082F49', // Deepest Navy
        },
        // Re-mapping maroon palette to deep professional ocean/sky blues
        maroon: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0284C7',
          600: '#0369A1',
          700: '#0284C7',
          800: '#0369A1', // Official Primary Trust Blue
          900: '#0C4A6E', // Deep Navy Blue
          950: '#082F49',
        },
        // Re-mapping saffron to sky / azure highlights
        saffron: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0284C7',
          600: '#0369A1',
          700: '#075985',
          800: '#0C4A6E',
          900: '#082F49',
          950: '#031E33',
        },
        // Re-mapping cream to pure white & crisp light blue
        cream: {
          50: '#FFFFFF',  // Pure crisp white
          100: '#F0F7FF', // Light blue
          200: '#E0F2FE',
          300: '#BAE6FD',
          400: '#93C5FD',
          500: '#60A5FA',
          600: '#3B82F6',
          700: '#2563EB',
          800: '#1D4ED8',
          900: '#1E40AF',
        },
        sacred: {
          dark: '#082F49',
          charcoal: '#0F172A',
          gold: '#38BDF8',
          amber: '#0284C7',
        }
      },
      fontFamily: {
        // Times New Roman for English, Devanagari for Hindi
        roman: ['"Times New Roman"', 'Times', '"Playfair Display"', 'Georgia', 'serif'],
        devnagri: ['"Noto Serif Devanagari"', '"Tiro Devanagari Hindi"', '"Rozha One"', 'Mangal', 'serif'],
        serif: ['"Times New Roman"', 'Times', '"Noto Serif Devanagari"', 'serif'],
        sans: ['"Times New Roman"', 'Times', '"Noto Serif Devanagari"', 'serif'],
        hindi: ['"Noto Serif Devanagari"', '"Tiro Devanagari Hindi"', '"Rozha One"', 'Mangal', 'serif'],
      },
      boxShadow: {
        'sacred': '0 10px 30px -10px rgba(2, 132, 199, 0.12)',
        'sacred-lg': '0 20px 40px -15px rgba(2, 132, 199, 0.20)',
        'sky-glow': '0 0 25px rgba(56, 189, 248, 0.35)',
      }
    },
  },
  plugins: [],
}
