const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    path.join(__dirname, '/src/index.tsx'),
    path.join(__dirname, '/src/style/index.scss')
  ],
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader',
        ]
      },
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"]
  },
  externals: {
    "react": "MFE.GLB.React",
    "react-dom": "MFE.GLB.ReactDOM",
    "shared-components": "MFE.SHC",
    "team-c-interface": "MFE.TCI"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ],
  optimization: {
    moduleIds: 'hashed',
    minimize: false
  }
};
