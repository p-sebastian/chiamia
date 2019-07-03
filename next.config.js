const withTypescript = require('@zeit/next-typescript');
const withFonts = require('next-fonts');

// multiple can be added with fn composition
module.exports = withTypescript(
  withFonts({
    webpack(config) {
      return config;
    }
  })
)
