const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withCSS(withSass({
  useFileSystemPublicRoutes: false,
  webpack(config) {
    config.devtool = 'hidden-source-map';
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'
    });
    return config;
  }
}));
