const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist/')
    },
    devServer: {
        contentBase: "./",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                loader: ['babel-loader']
            },
            {
                test: /\.scss/,
                loader: ['style-loader', 'postcss-loader', 'sass-loader']
            }
        ],

    },
    optimization: {
    },
    plugins: [

    ]
};
