const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  plugins: [
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  watch: true,
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./build",
  },
  entry: {
    app: path.join(__dirname, "src", "index.tsx"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /ndoe_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss", ".css"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
  },
};
