/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DC2626', // Rouge JAB CONNEXION
        secondary: '#000000', // Noir pour style Oatmeal
        mist: {
          50: '#fafaf9',
          100: 'oklch(96.3% .002 197.1)',
          200: 'oklch(92.5% .005 214.3)',
          300: 'oklch(87.2% .007 219.6)',
          400: 'oklch(72.3% .014 214.4)',
          500: 'oklch(56% .021 213.5)',
          600: 'oklch(45% .017 213.2)',
          700: 'oklch(37.8% .015 216)',
          800: 'oklch(27.5% .011 216.9)',
          950: 'oklch(14.8% .004 228.8)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Familjen Grotesk', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
      letterSpacing: {
        tight: '-0.025em',
      },
      borderRadius: {
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
