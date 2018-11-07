const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withCSS(withSass({
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = 'cheap-module-source-map';
    }
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'
    });
    return config;
  }
}));
