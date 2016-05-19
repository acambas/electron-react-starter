var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: {
		bundle: [
			'webpack-hot-middleware/client?path=http://localhost:1616/__webpack_hmr',
            path.join(__dirname, '/app/client/app.js')]
	},
	output: {
		path: path.join(__dirname, '/app/static/assets'),
		publicPath: 'http://localhost:1616/assets/',
		filename: '[name].js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('styles.css'),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	],
	devtool: 'source-map',
	module: {
		loaders: [
            {
				test: /\.js$/,
				loader: 'babel-loader',
				include: path.join(__dirname, 'app/client'),
				query: {
					presets: ["react", "es2015"],
					plugins: [
						["react-transform", {
							transforms: [{
								transform: "react-transform-hmr",
								imports: ["react"],
								locals: ["module"]
							}, {
									transform: "react-transform-catch-errors",
									imports: ["react", "redbox-react"]
								}]
						}]
					]
				}
			},

			{
				test: /\.css$/,
				exclude: /\node_modules/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{ test: /\.(png|jpg|ttf|woff2|svg|woff)/, loader: 'url-loader?limit=1000' },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" }
		]
	}
};
