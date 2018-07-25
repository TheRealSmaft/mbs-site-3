const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: './app/index.js',
	output: {
		filename: 'app.bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
         },
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]'
				},
			},
		]
	},
	devtool: 'source-map',
	devServer: {
		historyApiFallback: true,
		contentBase: './dist'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};