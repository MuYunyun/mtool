(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{728:function(t,n){t.exports="### _.convertInObj(obj, ruleObj)\n\n该函数可以将相应字段转化为指定格式 [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/object/convertInObj.ts \"View in source\")\n\n##### Arguments\n`obj` *(Object)*\n\n`ruleObj` *(Object)*: 给相应字段配置规则，暂时支持 number、string、boolean 类型\n\n&nbsp;&nbsp;\n\n##### Example\n```js\n_.convertInObj({ att1: '1', att2: '2', att3: 'att3value', att4: '', att5: 5, att6: 0 },\n      {\n        number: ['att1', 'att2', 'att4'],\n        string: ['att3','att5'],\n        boolean: ['att6'],\n      })\n    => { att1: 1, att2: 2, att3: 'att3value', att4: null, att5: '5', att6: false }\n```"}}]);