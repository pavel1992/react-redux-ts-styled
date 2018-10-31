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


module.exports = {
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
    optimization: {
        splitChunks: {
            chunks: "all"
        }
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