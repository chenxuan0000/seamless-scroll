const path = require('path')
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const webpack = require('webpack')
const pkg = require('../package.json')
const rootPath = path.resolve(__dirname, '../')


const config = {
  entry: path.resolve(rootPath, 'src', 'index.js'),
  output: {
    filename: `${pkg.name}.min.js`,
    path: path.resolve(rootPath, 'build'),
    library: `${pkg.name}`,
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {screw_ie8: false},
      mangle: {except: ['$']},
      support_ie8: true
    })
  ]
}

new Promise(() => {
  // 构建全量压缩包
  let building = ora('building...')
  building.start()
  rm(path.resolve(rootPath, 'build', `${pkg.name}.min.js`), err => {
    if (err) throw (err)
    webpack(config, function (err, stats) {
      if (err) throw (err)
      building.stop()
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n')
      console.log(chalk.cyan('  Build complete.\n'))
    })
  })
})