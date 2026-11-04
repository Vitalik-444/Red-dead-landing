/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#17130F',
        ink2: '#211B16',
        paper: '#E9DFCE',
        aged: '#D8CBB5',
        mute: '#8F8170',
        rust: '#A33B2D',
        gold: '#B99A70',
        line: '#514437',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Impact', 'sans-serif'],
        serif: ['"IM Fell English"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
