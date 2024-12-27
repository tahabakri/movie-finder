/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'modal-slide-up': 'modal-slide-up 0.3s ease-out',
      },
    },
  },
  plugins: [],
};