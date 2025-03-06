module.exports = {
  mode: 'development',  // or 'production' for production builds
  // Other configuration settings here...
};
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};