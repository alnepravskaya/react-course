const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
    const config = {
        context: path.join(__dirname, 'src'),
        entry: './index.jsx',
        output: {
            filename: '[name].js',
            path: path.join(__dirname, 'dist'),
        },
        devtool: 'eval-assets-map',
        devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
            // publicPath: '/assets/',
            port: 8000,
            hot: true,
            historyApiFallback: {
                index: 'index.html'
            }
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.js(x?)$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.less$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: env.NODE_ENV === 'production' ? '[hash:base64:5]' : '[local]--[hash:base64:5]',
                                },
                            },
                        },
                        {
                            loader: 'less-loader',
                        }
                    ],
                    exclude: /\.global\.less$/
                },
                {
                    test: /\.less$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'less-loader',
                        }
                    ],
                    include: /\.global\.less$/
                },
                {
                    test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                    loader: 'url-loader?limit=100000'
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Custom template',
                template: "index.html",
            }),
            new CopyWebpackPlugin( {
                patterns: [
                    {from: 'assets', to: 'assets' }
                ]
            })

        ],
        resolve: {
            extensions: [".js", ".jsx"]
        }
    }
    if (env.NODE_ENV === 'production') {
        config.optimization = {
            minimize: true,
            minimizer: [new TerserPlugin()],
        }
        config.devtool = false;
        config.output = {
            filename: '[name].[hash].js',
            publicPath: '/react-course'
        }
    }
    return config;
}

