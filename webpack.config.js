const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: {
            import: './src/index.js',
            dependOn: 'vendors',
        },
        another: {
            import: './src/another-module.js',
            dependOn: 'vendors'
        },
        vendors:['lodash']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        runtimeChunk: 'single',
    }
}