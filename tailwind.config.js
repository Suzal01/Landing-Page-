/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          'from': { transform: 'scale(0)' },
          'to': { transform: 'scale(1)'  },
        },
      },
      animation: {
        pulse: 'pulse 2s ease-in-out alternate infinite',
      },
  keyframes: {
    fude: {
      '0%': { opacity: '0', transform: 'translateX(1500px)' },
      '100%': { opacity: '1', transform: 'translateX(0px)' },
    }
  },
  animation: {
    fude: 'fude 2s ease-in-out forwards',
  }
},
},
  variants: {},
  plugins: [],
};


