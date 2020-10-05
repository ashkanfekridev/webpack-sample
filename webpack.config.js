const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
};