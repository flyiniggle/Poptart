const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const sharedConfig = {
	context: __dirname + "/../ui/",
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			"Poptart": __dirname + "/../ui/",
			"Templates": "../presentation/templates",
			"Lib": __dirname + "/../ui/lib"
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader'
				}]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
					}
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			}
		],
		loaders: [
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
		]
	}
};

module.exports = sharedConfig;