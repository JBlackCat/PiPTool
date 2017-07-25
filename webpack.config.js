'use strict';

const path = require('path');

const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_DIR = 'build.safariextension';

module.exports = {
	entry: ['./src/scripts/global.js', './src/scripts/main.js'],
	output: {
		filename: '[name].built.js',
		path: path.resolve(__dirname, BUILD_DIR)
	},
	plugins: [
		new CleanWebpackPlugin([BUILD_DIR]),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common'
		}),
		new CopyWebpackPlugin([{
			context: 'src/',
			from: '*'
		// }, {
			// //scripts
			// context: BUILD_DIR,
			// from: '*.js',
			// to: 'scripts'
		}, {
			//stylesheets
			context: 'src/stylesheets',
			from: '*.css',
			to: 'stylesheets'
		}, {
			//images
			context: 'src/images',
			from: '*',
			to: 'images'
		}])
	],
	module: {
		rules: [{}]
	}
};
