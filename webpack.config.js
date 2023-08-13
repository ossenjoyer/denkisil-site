const prod = process.env.NODE_ENV === "production";

const path = require("path");
const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TSPathsWebpackPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: prod ? "production" : "development",
  entry: "./src/index.tsx",
  target: "web",
  output: {
    path: __dirname + "/build/"
  },
  resolve: {
    modules: [__dirname, "src", "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: path.resolve(__dirname, "node_modules"),
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"]
        },
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devtool: false,
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html"
    }),
    new MiniCssExtractPlugin()
  ],
  resolve: {
    plugins: [new TSPathsWebpackPlugin()]
  },
  devServer: {
    historyApiFallback: true
  }
};
