const path = require('path');

const version = `${require('./package.json').version}`;

module.exports = {
  entry: [
    path.join(__dirname, 'index.ts')
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist', version),
    library: ['MFE', 'GLB'],
    publicPath: `https://rohitrox.github.io/microfrontend-esnext-demo/global-vendors/dist/${version}/`,
    jsonpFunction: 'wpJsonpGLB'
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  optimization: {
    moduleIds: 'hashed',
    minimize: false
  }
};
