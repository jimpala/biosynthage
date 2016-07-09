const path = require('path');
const srcDir = path.join(__dirname, 'src');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: path.join(srcDir, 'script.js'), // the mail file that loads everything else
  output: {
    filename: 'bundle.js', // or whatever
    path: path.join(__dirname, 'static', 'js'),
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      include: srcDir,
      query: {
        presets: ['es2015', 'react']
      }
    }],
  },
};
