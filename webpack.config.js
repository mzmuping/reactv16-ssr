const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    client: './src/client.js',
    bundle: './src/bundle.js',
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // loader: 'babel-loader',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
}
