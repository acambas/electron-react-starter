var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: {
		bundle: [
            path.join(__dirname, '/app/client/app.js')]
	},
	output: {
		path: path.join(__dirname, '/app/static/assets'),
		publicPath: '/assets/',
		filename: '[name].js'
	},
    devtool: 'source-map',
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new ExtractTextPlugin('styles.css'),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: path.join(__dirname, 'app/client'),
				query: {
					presets: ["react", "es2015"]
				}
			},

			{
				test: /\.css$/,
				exclude: /\node_modules/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{ test: /\.(png|jpg|ttf|woff2|svg|woff)/, loader: 'url-loader?limit=1000' },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
		]
	}
};