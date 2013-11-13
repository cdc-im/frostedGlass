# 毛玻璃效果

## 用法

假设需要毛玻璃的元素为`#dialog`，首先需要添加一个子元素作为背景，假设为`.bg`，接下来，调用

	frostedGlass.render($('#dialog'),$('#dialog .bg'));

即可加上毛玻璃效果。

## 注意事项

- 因为毛玻璃效果实际上是`#dialog .bg`元素的背景，这个元素需要铺满整个容器。（一般用绝对定位 + 宽高100%实现）
- 因为毛玻璃效果需要取页面元素渲染后的结果作为背景，因此只能在`onload`事件触发后进行初始化
- 背景等图片资源跨域的话将无法获得正确的背景图

## demo

<http://cdc-im.github.io/frostedGlass/example/example.html>