const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "development",
  plugins: [new ESLintPlugin()],
  watch: true,
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
