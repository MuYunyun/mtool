### _.throttle(function, wait, [options])

函数节流。创建并返回一个像节流阀一样的函数，当重复调用函数的时候，至少每隔 wait 毫秒调用一次该函数。对于想控制一些触发频率较高的事件有帮助。默认情况下，throttle 将在你调用的第一时间尽快执行这个 function，(默认第一次和最后一次都执行function)。如果你想禁用第一次首先执行的话，传递{leading: false}，还有如果你想禁用最后一次执行的话，传递{trailing: false} [&#x24C8;](https://github.com/MuYunyun/diana/blob/master/src/common/function/throttle.ts "View in source")

##### Example
```js
const throttled = _.throttle(updatePosition, 100)
$(window).scroll(throttled)
```