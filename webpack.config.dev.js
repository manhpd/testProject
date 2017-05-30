import webpack from 'webpack';
import path from 'path';

export default {
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style', 'css'] }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]

}