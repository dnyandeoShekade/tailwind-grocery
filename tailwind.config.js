// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        slideIn: 'slideIn 1s ease-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: [],
}
