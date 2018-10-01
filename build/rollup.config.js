var resolve = require('rollup-plugin-node-resolve')
var commonjs = require('rollup-plugin-commonjs')
var babel = require('rollup-plugin-babel')

var baseConfig = {
  input: 'src/calendar.js',
  output: {
    file: 'dist/calendar.js',
    name: 'dayjsCalendar',
    format: 'umd',
    sourcemap: true
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    })
  ]
}

module.exports = {
  // 入口
  index: Object.assign({}, baseConfig)
}
