const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const publicPath = '/';
const appPath = path.join(appDirectory, 'client/index.js');
const srcPath = path.join(appDirectory, 'client');
const indexHtmlPath = path.join(appDirectory, 'public/index.html');
const buildPath = path.join(appDirectory, 'build');

module.exports = {
  publicPath,
  appPath,
  srcPath,
  indexHtmlPath,
  buildPath,
};