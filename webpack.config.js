const path = require('path');

module.exports = {
    entry: {
        js: [ 'babel-polyfill', './src/index.js' ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
        ],
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map'
};

