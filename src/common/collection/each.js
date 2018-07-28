const optimizeCb = require('../../util')
// https://github.com/jashkenas/underscore/pull/2094
const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1
/**
 * 处理数组、类数组以及对象
 */
const each = function (obj, iteratee, context) {
  iteratee = optimizeCb(iteratee, context)
  let i, length
  // 数组以及类数组
  if (isArrayLike(obj)) {
    // 由于 length 是动态类型的属性，避免 obj 直接传入 length 属性
    for (i = 0, length = obj.length; i < length; i++) {
      iteratee(obj[i], i, obj)
    }
  } else { // 处理对象
    const keys = Object.keys(obj)
    for (i = 0, length = keys.length; i < length; i++) {
      iteratee(obj[keys[i]], keys[i], obj)
    }
  }
  return this
}

const isArrayLike = (collection) => {
  // 类数组必定含有 length 属性,其它属性为 number 类型
  const length = collection === null ? void 0 : collection['length']
  return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX
}

module.exports = each
