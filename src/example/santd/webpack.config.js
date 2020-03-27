const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
        path: path.join(__dirname, 'dist')
    },
    devServer: {
        port: 8000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [['import', {
                                libraryName: 'santd',
                                libraryDirectory: 'es',
                                style: true
                            }]]
                        }
                    }
                ]
            },
            {
                test: /\.san$/,
                use: 'san-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true,
                        modifyVars: {
                            'primary-color': '#1DA57A',
                            'link-color': '#1DA57A',
                            'border-radius-base': '2px'
                        },
                        javascriptEnabled: true
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.san', '.json']
    },
    plugins: [
        new HTMLWebpackPlugin({template: 'index.html'})
    ],
};
