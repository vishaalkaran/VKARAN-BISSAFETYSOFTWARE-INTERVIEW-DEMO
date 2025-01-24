const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const path = require('path');

module.exports = {
    entry: './src/index.js', // Your main entry point
    output: {
        // path: path.resolve(__dirname, 'public'), // Output directory
        path: path.resolve(__dirname, 'send-to-laravel'), // Output directory
        filename: 'main.js', // Output file name
        publicPath: '/', // Ensure assets are served from the root
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Match .js and .jsx files
                exclude: /node_modules/, // Exclude node_modules directory
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'], // Use Babel presets
                },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // Injects CSS into the DOM
                    'css-loader',   // Translates CSS into CommonJS
                    'sass-loader',  // Compiles Sass to CSS
                ],
            },
            {
              test: /\.(png|jpe?g|gif|svg)$/i, // Match image and SVG files
              type: 'asset/resource', // Use Webpack 5's asset module
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Resolve these file extensions
    },
    mode: 'development', // Set mode to development
    watch: true, // Enable Webpack's watch mode
    plugins: [
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 3000,
                server: { baseDir: ['public'] }, // Serve the public directory
                files: ['public/**/*'], // Watch files in the public directory
            },
            { reload: true } // Enable reload
        ),
    ],
    watchOptions: {
        ignored: /node_modules/, // Ignore node_modules for performance
        poll: 1000, // Enable polling for file changes every second
        aggregateTimeout: 300, // Delay rebuild after file changes
    },
}