const webpack = require( 'webpack' ),
	NODE_ENV = process.env.NODE_ENV || 'development',
	webpackConfig = {
		entry: {
			block: './src/block.js',
			renderQrCode: './src/renderQrCode.js',
		},
		output: {
			filename: '[name].js',
			path: __dirname + '/assets',
		},
		module: {
			loaders: [
				{
					test: /.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
				},
			],
		},
		plugins: [
			new webpack.DefinePlugin( {
				'process.env.NODE_ENV': JSON.stringify( NODE_ENV ),
			} ),
		],
	};

if ( 'production' === NODE_ENV ) {
	webpackConfig.plugins.push( new webpack.optimize.UglifyJsPlugin() );
}

module.exports = webpackConfig;