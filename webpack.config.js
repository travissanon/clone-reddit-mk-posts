const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	plugins: [
		new ESLintPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src/client", "index.html"),
		}),
	],
	watch: true,
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./build",
	},
	entry: {
		app: path.join(__dirname, "src/client", "index.tsx"),
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: [/node_modules/, /\.test.tsx?$/],
			},
			{
				test: /\.(scss|css)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|jp(e*)g|svg|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "images/[path][name].[ext]",
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".scss", ".css"],
		alias: {
			"@api": path.resolve(__dirname, "src/api"),
			"@components": path.resolve(__dirname, "src/client/components"),
			"@images": path.resolve(__dirname, "src/client/images"),
			"@client": path.resolve(__dirname, "src/client"),
		},
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "build"),
	},
};
