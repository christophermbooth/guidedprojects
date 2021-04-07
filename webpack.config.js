const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/app.tsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [{
      loader: 'ts-loader',
      test: /\.tsx$/,
      exclude: /node_modules/
    },
    {
      test: /\.s[ac]ss$/i,
      use: ["style-loader", "css-loader", "sass-loader"]
    }
    ]
  },
  resolve: {
    extensions: ['.tsx','.ts','.js'],
  },
  plugins: [
    new Dotenv({
      path: './.env'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}