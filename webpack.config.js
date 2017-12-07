const path = require('path');
const webpack = require('webpack');

const sharedConfig = {
	context: __dirname + "/presentation/ui/",
	devtool: 'source-map',
	resolve: {
		alias: {
			"Poptart": __dirname + "/presentation/ui/",
			"Templates": "../presentation/templates",
			"Lib": __dirname + "/presentation/ui/lib",
		}
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
		]
	}
	/*plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "Poptart",
			filename: "./presentation/static/ui/Poptart.js",
			minChunks: 2
		})
	]*/
};

const topLevelPackagesConfig = Object.assign(
	{
		entry: {
			Account: "./modules/account/scripts/Poptart.Account.js",
			Dashboard: "./modules/dashboard/scripts/Poptart.Dashboard.js"
		},
		output: {
			path: __dirname,
			filename: './presentation/static/ui/modules/[name]/scripts/main.js',
			libraryTarget: 'umd',
			library: ['Poptart', '[name]']
		}
	},
	sharedConfig
);

const monitorPackagesConfig = Object.assign(
	{
		entry: {
			Account: "./modules/monitors/account/scripts/Poptart.Monitor.Account.js",
			Security: "./modules/monitors/security/scripts/Poptart.Monitor.Security.js"
		},
		output: {
			path: __dirname,
			filename: './presentation/static/ui/modules/monitors/[name]/scripts/main.js',
			libraryTarget: 'umd',
			library: ['Poptart', 'Monitor', '[name]']
		}
	},
	sharedConfig
);

module.exports = [
	topLevelPackagesConfig,
	monitorPackagesConfig
];