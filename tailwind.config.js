/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      backgroundImage: {
        'color-corners':
          'linear-gradient(135deg, rgb(168 85 247) 60px, transparent 60px), linear-gradient(-45deg, rgb(168 85 247) 130px, transparent 130px)',
      },
      fontFamily: {
        silkscreen: ['Silkscreen', 'monospace'],
        permanent: ['Permanent Marker', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
};
