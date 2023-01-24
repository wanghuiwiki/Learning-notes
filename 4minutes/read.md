说明:以下学习内容来源网址[四分钟制作一个美观的网页](https://hao.uisdc.com/cssmagic/)

前言:总结而言"四分钟制作一个美观的网页",可能花费的时间不止这些,也许作者更想表达制作一个页面的思考过程.

代码已上传Github:[https://github.com/wanghuiwiki/Learning-notes](https://github.com/wanghuiwiki/Learning-notes)
***

~~你现在看到的这个来自jgthms的页面，是一个非常有趣的案例，你一定觉得很简单？没关系，请继续跟着我们的指引往下点击链接，会发现神奇的变化。~~

比如你现在有一个产品介绍、个人展示页面、或者是一个想要和其它人分享的想法。在你将它发布到网上之前，你想要把它设计一下，让它看起来更加易读、美观。

### 先来点内容

>设计的目的是为了提高演示内容的易读和阅读体验。可能听起来都明白，但是内容是一个网站最主要最基本的元素，而不是将其放在最后考虑，所以要以内容优先，设计服务于内容。

假设你已经完成了内容的编写，下面让我们创建一个 `style.css` 文件，第一步你需要写些什么?↲

### 让内容居中

过长的文字所占空间比较大，浏览起来比较困难，需要更多的眼球转动，因此我们需要限制一行所要呈现的内容，以此来降低阅读疲劳。可以大大的提高可读性和吸引力。

```
body {
  margin: 0 auto;
  max-width: 50em;
}
```
在给文字添加了基本的P标签以后, 我们需要给文字本身添加些什么样式呢?↲

### 没错！控制字体样式

浏览器的默认字体"Times", 看起来没什么特色， 不妨我们换成**非衬线**便于阅读的字体，比如 "Helvetica" 或者 "Arial" 或许可以提升阅读美观度。在中文中，为了兼顾多数的浏览器，不妨使用下面这个字体选择方案。

```
font-family: Arial,微软雅黑,"Microsoft yahei","Hiragino Sans GB","冬青黑体简体中文 w3",STXihei,华文细黑,SimSun,宋体,Heiti,黑体,sans-serif;
```

~~如果你想使用衬线字体, 可以尝试 "Georgia"。~~

怎么样，解决了字体是不是更加美观了？下面让我们做一些更加能提高阅读体验的方法。↲

### 空间

当一个网页看起来混乱或者拥挤的时候, 通常是没有给文字留有**呼吸空间**的问题。 不妨给你的内容加入些空间和距离，以此来提升视觉吸引力。

```
body {
  line-height: 1.75;
  padding: 4em 1em;
}

h2 {
  margin-top: 1em;
  padding-top: 1em;
}
```
怎么样，看起来是不是酷毙了！别停下，让我们继续做一些改变↲

### 颜色&对比
白色背景上配上纯黑色的文字会不会显的太刺激和突兀，选择一个灰度稍微低点的黑色，使页面阅读起来更加**舒适**。
```
body {
  color: #555;
}
```
使用适当的**对比**, 可以凸现那些**重点**的词语。
```
h1,
h2,
strong {
  color: #333;
}
```
等等！是不是觉得背景还不够酷，我们也可以找到一些纹理网站给背景设置点铺满屏幕的纹理。
```
background: url(images/seigaiha.png) repeat;
```

虽然大部分的网页已经被有效的改进，但是这些代码会不会觉得有些混乱和格格不入，就像你桌子上那些随处摆放的物件一样，让我们给它添加一些装饰将它们合理收纳，保持**视觉平衡**。↲

### 视觉平衡
通过一些基本的样式调整就可以带来页面的视觉平衡。

```
code,
pre {
  background: #fff;
}

code {
  padding: 2px 4px;
  vertical-align: text-bottom;
}

pre {
  padding: 1em;
}
```
对于一些链接，为了方便点击和区分，我们不妨给他们提升一些识别度↲
### 主色
很多品牌都有自己的**主色调**以此来作为视觉的标识，在一个网站上，这个主色可以运用到用来强调互动的颜色，比如**链接**。
但是为了保证视觉平衡，我们需要增加一些辅助颜色。↲

### 次要颜色

主色调可以通过一些微妙的辅助色来提升整体的视觉表现，而这些辅助颜色可以运用到边框、背景、效果或者文本。
```
body {
  color: #566b78;
}

code,
pre {
  background: #ffffff;
  border-bottom: 1px solid #d8dee9;
  color: #a7adba;
}

pre {
  border-left: 2px solid #69c;
}
```
添加了不少的细节效果，为什么不改变些其它呢？↲
图形和图标可以用来装饰你的网站，辅助你的内容，或者更有效传达网站的信息。
让我们给头部添加一个**下载的背景图片**。
```
div {
  background-color: #263d36;
  background-image: url("http://image.uisdc.com/wp-content/uploads/2016/10/div.jpg");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  line-height: 1.2;
  padding: 10vw 2em;
  text-align: center;
}
```
然后添加一个logo
```
div img {
  display: inline-block;
  height: 120px;
  vertical-align: top;
  width: 120px;
}
```
让我们再添加一些文字样式
```
div h1 {
  color: white;
  font-size: 2.5em;
  font-weight: 300;
}

div a {
  border: 1px solid #e81c4f;
  border-radius: 290486px;
  color: white;
  font-size: 0.8em;
  letter-spacing: 0.2em;
  padding: 1em 2em;
  text-transform: uppercase;
  text-decoration: none;
  transition: none 200ms ease-out;
  transition-property: color, background;
}

div a:hover {
  background:  #e81c4f;
  color: white;
}
```
Duang！魔法发生了！在短短的几分钟内，我们就设计了一个像样的网页。赶紧回顶部看看效果吧!