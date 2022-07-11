
module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': {
      content: ['./src/**/*.html','./src/assets/js/**/*.js'],
    },
  },
}