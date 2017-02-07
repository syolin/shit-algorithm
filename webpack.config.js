var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: path.join(__dirname, 'src/client/index.js'),
    output: {
        path: path.join(__dirname, 'src/server/public/javascripts/'),
        publicPath: '/javascripts/',
        filename: 'build.js'
    },
    resolve: {
        extensions: ['', '.js', '.vue']
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [
            {
                //Awesome Swiper 로더 ? 등록
                test: /\.css$/,
                loaders: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {presets: ['es2015']}
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpg|gif|svg|woff|ttf|woff2|eot)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash:7]'
                }
            }
        ]
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};
