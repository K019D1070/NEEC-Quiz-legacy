const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, "src", "index.js"),
  output: { // 出力に関して
    filename: 'bundle.js', // 出力するファイル名
    path: path.join(__dirname, "docs") // 出力するディレクトリ階層
    // pathは絶対パスで指定、そのため __dirname でディレクトリ階層を取得しています
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
            options: { url: false }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: "url-loader",
        options: {
          limit: 2048,
          name: "./images/[name].[ext]"
        }
      }
    ]
  }
};