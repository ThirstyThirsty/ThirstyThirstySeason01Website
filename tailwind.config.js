const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './resources/**/*.{edge,js,ts,vue,jsx,tsx}' // 👈
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['roc-grotesk', ...defaultTheme.fontFamily.sans],
        serif: ['freight-text-pro', ...defaultTheme.fontFamily.serif],
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
