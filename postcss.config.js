
module.exports = {
  plugins: {
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': {
      content: ['./src/**/*.html','./src/assets/js/**/*.js'],
      //除外設定　https://purgecss.com/safelisting.html
      safelist: ['hoge']
    },
  },
}