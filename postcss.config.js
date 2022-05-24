module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  purge: [
    './resources/views/**/*.edge',
    './resources/css/**/*.css',
    './resources/js/**/*.js',
    './resources/js/**/*.ts',
  ],
}
