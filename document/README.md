# seamless-scroll 
> js无缝滚动插件

[![Build Status](https://img.shields.io/appveyor/ci/gruntjs/grunt/master.svg) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/seamless-scroll) ![](https://img.shields.io/npm/v/seamless-scroll.svg)


<p align="center">
    <img src="../test/timg.jpg" width="440"/>
</p>  
                                           
<p align="center">
   🌾 <a href="https://chenxuan0000.github.io/seamless-scroll/">简单demo</a> |
   📘 <a href="../README.md">English Document</a> 
</p>

## 兼容性
| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Android |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| IE7+ | &check;| &check; | &check; | &check; | &check; | &check;

* 不支持移动端手势。

## 使用

```js
const seamless = require('seamscroll')
 `or`
import seamless from 'seamscroll'

seamless.init({
  dom: document.getElementById('demo1')
})
//script tag
<script src="seamscroll.min.js"></script>
<script>
seamless.init({
  dom: document.getElementById('demo1')
})
</script>
```

## Demo
```css
.demo2 {
    width: 600px;
    height: 100px;
    position: relative;
    overflow: hidden;
    margin-top: 100px;
}
.list2 li {
    float: left;
    width: 100px;
    height: 100px;
    margin-right: 20px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    line-height:100px;
    background-color: #ccc;
}
```
```html
<div class="demo2">
      <ul class="list2 clearfix" id="demo2">
           <li>1</li>
           <li>2</li>
           <li>3</li>
           <li>4</li>
           <li>5</li>
           <li>6</li>
      </ul>
</div>
```
```javascript
<script src="seamscroll.min.js"></script>
seamscroll.init({
     dom: document.getElementById('demo2'),
     direction: 2
})
```

## 配置参数
*必填参数(dom)

|key|description|default|val|
|:---|---|---|---|
|`*dom`|作用的dom|`null`|`dom`|
|`step`|步长,越大越快|`1`|`Number`|
|`hoverStop`|是否启用鼠标hover控制|`true`|`Boolean`|
|`direction`|方向 0 往下 1 往上 2向左 3向右|`1`|`Number`|
|`singleHeight`|单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1|`0`|`Number`|
|`singleWidth`|单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3|`0`|`Number`|
|`waitTime`|单步停止等待时间(default 1s)|`1000`|`Number`|

## 历史版本
See the GitHub [历史版本](https://github.com/chenxuan0000/seamless-scroll/releases).

## License
seamless-scroll is open source and released under the [MIT License](LICENSE).