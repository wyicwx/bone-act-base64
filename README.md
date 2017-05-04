# bone-act-base64
[![NPM version](https://img.shields.io/npm/v/bone-act-base64.svg?style=flat)](https://npmjs.org/package/bone-act-base64)
[![NPM downloads](http://img.shields.io/npm/dm/bone-act-base64.svg?style=flat)](https://npmjs.org/package/bone-act-base64)
> bone的sass处理器

### 安装及使用
通过npm安装
```sh
$ npm install bone-act-base64
```

安装后在`bonefine.js`文件内通过`act()`加载

```js
var bone = require('bone');
var base64 = require('bone-act-base64');

bone.dest('dist').src('~/src/css/*.css').act(base64);
```

传递参数的调用方法
```js
bone.dest('dist').src('~/src/css/*.css').act(base64({
    maxSize: 10
}));
```

bone-act-base64是将postcss-url中间件包装成bone可用的处理器，参数查询参考[postcss-url](https://github.com/postcss/postcss-url)

### 其他
处理器开发以及使用请参考[处理器](https://github.com/wyicwx/bone/blob/master/docs/plugin.md)