const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
    const config = {
        context: path.join(__dirname, 'src'),
        entry: './index.js',
        output: {
            filename: '[name].js',
            path: path.join(__dirname, 'dist'),
        },
        devtool: 'eval-source-map' ,
        devServer: {
           contentBase: './dist',
            port: 8000,
            hot: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./index.html",
                filename: "./index.html"
            }),
        ],
        module: {
            rules: [{
                test: /\.js(x?)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }]
        },
        resolve: {
            extensions: [".js"]
        },
    }
    if (env.NODE_ENV === 'production'){
        config.optimization = {
            minimize: true,
            minimizer: [new TerserPlugin()],
        }
        config.devtool = false;
        config.output = {
            filename: '[name].[hash].js',
        }
    }
    return config;
}

