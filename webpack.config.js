const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


const PATHS = {
    bundle: path.resolve(__dirname, 'dist'),
};

const entries = {
    main: './src/entries/index.tsx',
};

const mode = process.env.mode || 'development';

module.exports = {
    mode,
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/templates/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    entry: entries,
    output: {
        path: PATHS.bundle,
        filename: `[name].js`//`[name].[chunkhash].js`
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
        ]
    }
};