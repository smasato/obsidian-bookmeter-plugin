/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import path from "path";
import { Configuration, DefinePlugin } from "webpack";

import pack from "./package.json";

const isProduction = process.env.NODE_ENV === "production";
const releaseVersion = pack.version;

const config: Configuration = {
	entry: "./src/index.ts",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		libraryTarget: "commonjs",
		clean: true,
	},
	target: "node",
	mode: isProduction ? "production" : "development",
	devtool: isProduction ? "source-map" : "inline-source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				options: {
					transpileOnly: true,
				},
			},
			{
				test: /\.(svg|njk|html)$/,
				type: "asset/source",
			},
		],
	},
	optimization: {
		minimize: isProduction,
		minimizer: [],
	},
	plugins: [
		new DefinePlugin({
			PACKAGE_NAME: JSON.stringify(pack.name),
			VERSION: JSON.stringify(releaseVersion),
			PRODUCTION: JSON.stringify(isProduction),
		}),
	],
	resolve: {
		modules: ["node_modules"],
		alias: {
			"~": path.resolve(__dirname, "src"),
		},
		extensions: [".ts", ".tsx", ".js"],
	},
	externals: {
		obsidian: 'commonjs2 obsidian'
	}
};

export default config;
