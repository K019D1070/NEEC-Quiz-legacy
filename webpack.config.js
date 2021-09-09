const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, "src", "index.js"),
  output: { // 出力に関して
    filename: 'bundle.js', // 出力するファイル名
    path: path.join(__dirname, "docs"), // 出力するディレクトリ階層
    // pathは絶対パスで指定、そのため __dirname でディレクトリ階層を取得しています
    assetModuleFilename: "resource/[name][ext]"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // babelを通さないディレクトリ
        use: [
          {
            loader: "babel-loader",
            // Babel のオプションを指定する
            options: {
              presets: [
                // プリセットを指定することで、ES2020 を ES5 に変換
                "@babel/preset-env",
              ],
            }
          }
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        type: "javascript/auto"
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: true }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp|ico)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,  // <--- 4kb
          },
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime'],
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./resources/html/index.html"
    })
  ]
};