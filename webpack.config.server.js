var path = require('path');
var externalsPlugin = require('webpack-externals-plugin');
module.exports = {
  entry: path.resolve(__dirname, './server/server.js'),
  output: {
    path: __dirname + '/dist/',
    filename: 'server.bundle.js'
  },
  target: 'node',
  node: {
    __dirname: true,
    __filename: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new externalsPlugin({
      type: 'commonjs',
      include: path.join(__dirname, './node_modules/')
    })
  ]
};
