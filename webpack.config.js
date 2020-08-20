const path = require('path')

/**
 * [hash]
 * [chunkhash]
 * [name]
 * [id]
 * [query]
 * [contenthash]
 */

module.exports = {
    // this is actually the configuration webpack uses
    mode: 'development',
    entry: ["@babel/polyfill", './src/script.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js', 
        publicPath: '/assets/'
    },
    devServer: {
        port: 1234,
        contentBase: path.join(__dirname, 'dist'),
        writeToDisk: false, // eviter d'afficher le dossier build
        open: true // ouvrire automatiquement le navigateur

    },
    module: {
        rules: [
          {
            test: /\.m?js$/, // verifier les fichier js
            exclude: /(node_modules|bower_components)/, // exclure certains dossiers comm node_modules
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
}