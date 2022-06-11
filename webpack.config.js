import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export const mode = 'development';
export const entry = './starting-code/code/main.js';
export const output = {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js',
};
export const plugins = [new HtmlWebpackPlugin({
    template: "./starting- ",
    code
} / index.html, " })],",
    module, {
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.png$/i,
            type: "asset/resource"
        },
        {
            test: /\.txt$/i,
            type: 'asset/source'
        },
        {
            test: /\.(woff|woff2)$/i,
            type: "asset/resource"
        },
    ]
})];