module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        blob: 'blob 7s infinite',
        blink: 'blink 1s step-start infinite'
      },
      keyframes: {
        blink: {
          '50%': {
            opacity: '0'
          },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -90px) scale(1.0)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.8)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
    fontFamily: {
      signature: ['Satisfy'],
    },
  },
  plugins: [],
};

