const
	path = require('path'),
	webpack = require('webpack'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	paths = {
		app: path.resolve(__dirname, 'app'),
		dist: path.resolve(__dirname, 'dist')
	},
	config = {
		context: paths.app,
		entry: {
			app: './index'
		},
		output:{
			path: paths.dist,
			filename: '[name].bundle.js'
		},
		resolve:{
			extensions:['.js']
		},
		devtool: 'inline-source-map',
		module:{
			rules: [
				{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
				{
					test: /\.sass$/,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: [ 'css-loader', 'sass-loader' ]
					})
				}
			]
		},
		plugins:[
			new ExtractTextPlugin('app.css'),
			new CleanWebpackPlugin(['dist']),
			new HtmlWebpackPlugin({
				template: './index.html'
			})
		]
	};


module.exports = config;