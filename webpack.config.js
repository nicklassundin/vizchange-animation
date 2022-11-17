// const $ = require("jquery");
const path = require("path");
const webpack = require("webpack");
const dir = __dirname;

module.exports = {
    entry: './src/browning/story.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'client')
    }
}