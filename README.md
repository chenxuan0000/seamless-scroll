# seamless-scroll 
> js seamless-scroll plugin

[![Build Status](https://img.shields.io/appveyor/ci/gruntjs/grunt/master.svg) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/seamless-scroll) ![](https://img.shields.io/npm/v/seamless-scroll.svg)

<p align="center">
    <img src="./test/timg.jpg" width="440"/>
</p>  
                                           
<p align="center">
   🌾 <a href="https://chenxuan0000.github.io/seamless-scroll/">sample demo</a> |
   📘 <a href="./document/README.md">中文文档</a> 
</p>


## Browser support
| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Android |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| IE7+ | &check;| &check; | &check; | &check; | &check; | &check;

* mobile gestures are not supported.


## Installation

### NPM

```bash
npm install seamscroll --save
```

## Usage

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

## Configure
*Required parameters(dom)

|key|description|default|val|
|:---|---|---|---|
|`*dom`|the role of the element|`null`|`dom`|
|`step`|step,the faster the rolling speed is faster|`1`|`Number`|
|`hoverStop`|mouse hover control is enabled|`true`|`Boolean`|
|`direction`|0 down  1 up  2 left  3 right|`1`|`Number`|
|`singleHeight`|one single stop height(default zero is seamless) => direction 0/1|`0`|`Number`|
|`singleWidth`|one single stop width(default zero is seamless) => direction 2/3|`0`|`Number`|
|`waitTime`|one single data stop wait time(1s)|`1000`|`Number`|

## Changelog
See the GitHub [release history](https://github.com/chenxuan0000/seamless-scroll/releases).

## License
seamless-scroll is open source and released under the [MIT License](LICENSE).