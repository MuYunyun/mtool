const path = require('path')
const pkg = require('../package.json')
const rootPath = path.resolve(__dirname, '../')

const bsConfig = {
  entry: path.resolve(rootPath, 'dist/src/browser', 'index.js'),
  mode: "production",
  output: {
    filename: `${pkg.name}.js`,
    path: path.resolve(rootPath, 'lib'),
    library: `${pkg.name}`,
    libraryTarget: 'umd'
  },
}

const nodeConfig = {
  entry: path.resolve(rootPath, 'dist/src/node', 'index.js'),
  mode: "production",
  output: {
    filename: `${pkg.name}.back.js`,
    path: path.resolve(rootPath, 'lib'),
    library: `${pkg.name}`,
    libraryTarget: 'commonjs2'
  }
}

module.exports = { bsConfig, nodeConfig }