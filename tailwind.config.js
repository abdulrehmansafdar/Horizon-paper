// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{html,ts,scss}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        fadeInUpDelayed: 'fadeInUp 0.8s ease-out 0.3s forwards',
        scaleIn: 'scaleIn 0.6s ease-out forwards',
      }
    },
  },
  plugins: [],
}






