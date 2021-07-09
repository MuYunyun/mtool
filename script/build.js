const gulp = require('gulp')
const ts = require('gulp-typescript')
const merge = require('merge2')
const del = require('del')
const fs = require('fs')
const path = require('path')
const ora = require('ora')
const { rollup } = require('rollup')
const commenjs = require('@rollup/plugin-commonjs')
const typescript = require('@rollup/plugin-typescript')
const { terser } = require('rollup-plugin-terser')
const pkg = require('../package.json')

let building = ora('building...')

async function buildNode() {
  try {
    const result = await rollup({
      input: path.resolve('src/common', 'index.ts'),
      plugins: [
        typescript(),
        commenjs(),
        terser(),
      ],
    })
    await result.write({
      file: `lib/${pkg.name}.back.js`,
      format: 'cjs',
    })
  } catch (e) {
    throw e
  }
}

async function buildBrowser() {
  try {
    const result = await rollup({
      input: path.resolve('src/browser', 'index.ts'),
      plugins: [
        typescript(),
        commenjs(),
        terser(),
      ],
    })
    await result.write({
      file: `lib/${pkg.name}.js`,
      format: 'esm',
    })
  } catch (e) {
    throw e
  }
}

function compileTS(dir, esModule) {
  console.log('compileTS')
  const tsProject = ts.createProject('tsconfig.build.json', {
    module: esModule ? 'ES2015' : 'CommonJS'
  })
  const tsResult = tsProject.src().pipe(tsProject())
  return merge([tsResult.js.pipe(gulp.dest(dir)), tsResult.dts.pipe(gulp.dest(dir))])
}

function compileES() {
  return compileTS('es', true)
}

function compileCJS() {
  return compileTS('lib', false)
}

function clean() {
  console.log('111222333')
  return del(['es', 'lib'])
}

// 导出单个函数
function buildSingleFn() {
  gulp.series(
    clean,
    gulp.parallel(compileES, compileCJS),
  )
}

function build() {
  // if (!fs.existsSync(path.resolve(__dirname, '../', 'lib'))) {
  //   fs.mkdirSync(path.resolve(__dirname, '../', 'lib'))
  // }
  building.start()
  buildSingleFn(),
  // buildNode()
  // buildBrowser()
  // Promise.all([
  //   await buildNode(),
  //   await buildBrowser(),
  // ]).then(([result1, result2, result3]) => {
  //   building.stop()
  // }).catch(e => {
  //   building.stop()
  //   throw e
  // })
  building.stop()
}

build()