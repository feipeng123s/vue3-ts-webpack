const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: {
        app: './src/index.ts'
    },
    output: {
        filename: '[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', 'vue'],
        alias: {
            // 'vue': 'vue/dist/vue.esm.js'
            // 'vue': '@vue/runtime-dom'
            'vue': 'vue/dist/vue.esm-bundler.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new VueLoaderPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}