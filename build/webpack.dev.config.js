const merge = require('webpack-merge');
const basic = require('./webpack.config.js');

module.exports = merge(basic, {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        proxy: {
            '*': {
                target: 'http://localhost:8080',
                changeOrigin: true
            }
        }
    }
});

