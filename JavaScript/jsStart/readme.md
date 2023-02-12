>[JavaScript入门篇学习](https://www.dhnblog.com/learn/36)本教程让您快速认识JavaScript，熟悉JavaScript基本语法、窗口交互方法和通过DOM进行网页元素的操作，学会如何编写JS代码，如何运用JavaScript去操作HTML元素和CSS样式，本JavaScript教程分为四个章节，能够让您快速入门，为JavaScript深入学习打下基础。

javascript作为一种脚本语言可以放在html页面中任何位置，但是浏览器解释html时是按先后顺序的，所以前面的script就先被执行。比如进行页面显示初始化的js必须放在head里面，因为初始化都要求提前进行（如给页面body设置css等）；而如果是通过事件调用执行的function那么对位置没什么要求的。

 ~~本章节主要讲解如何向网页中输入内容，如何与浏览器窗口进行交互，通过简单的对象方法就可以轻松实现。~~
 
定义变量使用关键字var,语法如下：`var 变量名`

 变量名可以任意取名，但要遵循命名规则:
 1. 变量必须使用字母、下划线(_)或者美元符($)开始。
 2. 然后可以使用任意多个英文字母、数字、下划线(_)或者美元符($)组成。
 3. 不能使用JavaScript关键词与JavaScript保留字。

变量要先声明再赋值，如下：
```
var mychar;
mychar="javascript";
var mynum = 6;
```
变量可以重复赋值，如下：
```
var mychar;
mychar="javascript";
mychar="hello";
```
注意:
1. 在JS中区分大小写，如变量mychar与myChar是不一样的，表示是两个变量。
2. 变量虽然也可以不声明，直接使用，但不规范，需要先声明，后使用。

 ***
## if...else判断

 if...else语句是在指定的条件成立时执行代码，在条件不成立时执行else后的代码。
 ```
 if(条件)
 { 条件成立时执行的代码 }
 else
 { 条件不成立时执行的代码 }
 ```
 
 假设我们通过年龄来判断是否为成年人，如年龄大于等于18岁，是成年人，否则不是成年人。代码表示如下:
 
 ```
 <script type="text/javascript">
    var myage = 18;
    if(myage>=18)  //myage>=18是判断条件
    { document.write("你是成年人。");}
    else  //否则年龄小于18
    { document.write("未满18岁，你不是成年人。");}
 </script>
 ```
 
 ```
 <script type="text/javascript">
 	var score =80; //score变量存储成绩，初值为80
 	  if(score>=60)
 	{
 	 document.write("很棒，成绩及格了。");
 	}
 else
 	{
 	 document.write("加油，成绩不及格。");
 	}
 </script>
 ```
 ## 什么是函数

如何定义一个函数呢？基本语法如下:
```
function 函数名()
{
	 函数代码;
}
```
说明:
1. function定义函数的关键字。
2. "函数名"你为函数取的名字。
3. "函数代码"替换为完成特定功能的代码。

我们来编写一个实现两数相加的简单函数,并给函数起个有意义的名字：“add2”，代码如下：
```
function add2(){
   var sum = 3 + 2;
   alert(sum);
}
```
函数调用:

函数定义好后，是不能自动执行的，所以需调用它,只需直接在需要的位置写函数就ok了,代码如下:
```
<script type="text/javascript">
function add2(){
var sum = 3 + 2;
alert(sum);
}
add2();//调用函数,直接写函数名.
</script>

<form>
<input type="button"  value="点击我" onclick="add2()" />  
<!--单击按钮,调用函数,onclick为点击事件.-->
</form>
```

```
<script type="text/javascript">
  function contxt() //定义函数
  {
	 alert("哈哈，调用函数了!");
  }
</script>
<form>
  <input type="button"  value="点击我" onclick="contxt()" />  
</form>
```
***
## JavaScript-输出内容
`document.write() `可用于直接向 HTML 输出流写内容。简单的说就是直接在网页中输出内容。
**第一种:输出内容用""括起，直接输出""号内的内容。**
```
<script type="text/javascript">
  document.write("I love JavaScript！"); //内容用""括起来，""里的内容直接输出。
</script>
```
**第二种:通过变量，输出内容**
```
<script type="text/javascript">
  var mystr="hello world!";
  document.write(mystr);  //直接写变量名，输出变量存储的内容。
</script>
```
**第三种:输出多项内容，内容之间用+号连接。**
```
<script type="text/javascript">
  var mystr="hello";
  document.write(mystr+"I love JavaScript"); //多项内容之间用+号连接
</script>
```
**第四种:输出HTML标签，并起作用，标签使用""括起来。**
```
<script type="text/javascript">
  var mystr="hello";
document.write(mystr+"<br>");//输出hello后，输出一个换行符
  document.write("JavaScript");
</script>
```
**关于JS输出空格问题，如果想要实现输出空格，可以使用特殊字符“&nbsp;”实现**
```
<script type="text/javascript">
  document.write("&nbsp;");//输出空格
</script>
```
~~演示代码~~
```
  <script type="text/javascript">
    var mystr="我是";
    var mychar="JavaScript";
    document.write(mychar+"<br/>");
    document.write(mystr+mychar+"的忠实粉丝");
  </script>
```
## JavaScript-警告（alert 消息对话框）
语法: `alert(字符串或变量);`
看下面的代码:
```
<script type="text/javascript">
   var mynum = 30;
   alert("hello!");
   alert(mynum);
</script>
```
注:alert弹出消息对话框(包含一个确定按钮)。

结果:按顺序弹出消息框

1. 在点击对话框"确定"按钮前，不能进行任何其它操作。
2. 消息对话框通常可以用于调试程序。
3. alert输出内容，可以是字符串或变量，与document.write 相似。

## JavaScript-确认（confirm 消息对话框）
confirm 消息对话框通常用于允许用户做选择的动作，如：“你对吗？”等。弹出对话框(包括一个确定按钮和一个取消按钮)。
语法: `confirm(str);`
参数说明
```
str：在消息对话框中要显示的文本
返回值: Boolean值
```
注: 通过返回值可以判断用户点击了什么按钮
看下面的代码:
```
<script type="text/javascript">
	var mymessage=confirm("你喜欢JavaScript吗?");
	if(mymessage==true)
	{   document.write("很好,加油!");   }
	else
	{  document.write("JS功能强大，要学习噢!");   }
</script>
```
注: 消息对话框是排它的，即用户在点击对话框按钮前，不能进行任何其它操作。
~~演示代码~~
```
<script type="text/javascript">
function rec(){
var mymessage=confirm("当点击按钮时，完成性别确认");
if(mymessage==true)
{
	document.write("你是女士!");
}
else
{
	document.write("你是男士!");
}
}    
</script>
</head>
<body>
<input name="button" type="button" onClick="rec()" value="点击我，弹出确认对话框" />
</body>
```
## JavaScript-提问（prompt 消息对话框）
prompt弹出消息对话框,通常用于询问一些需要与用户交互的信息。弹出消息对话框（包含一个确定按钮、取消按钮与一个文本输入框）。

语法: `prompt(str1, str2);`

参数说明：
```
str1: 要显示在消息对话框中的文本，不可修改
str2：文本框中的内容，可以修改
```
返回值:
```
1. 点击确定按钮，文本框中的内容将作为函数返回值
2. 点击取消按钮，将返回null
```
看看下面代码:
```
var myname=prompt("请输入你的姓名:");
if(myname!=null)
  {   alert("你好"+myname); }
else
  {  alert("你好 my friend.");  }
```
注:在用户点击对话框的按钮前，不能进行任何其它操作。
```
&lt;script type="text/javascript"&gt;
  function rec(){
	var score; //score变量，用来存储用户输入的成绩值。
	score = prompt("输入你的成绩,根据输入的成绩做出评价");
	if(score&gt;=90)
	{
	   document.write("你很棒!");
	}
	else if(score&gt;=75)
	{
	   document.write("不错吆!");
	}
	else if(score&gt;=60)
	{
	   document.write("要加油!");
	}
	else
	{
	   document.write("要努力了!");
	}
  }
&lt;/script&gt;
```

## JavaScript-打开新窗口（window.open）
open() 方法可以查找一个已经存在或者新建的浏览器窗口。

语法：`window.open([URL], [窗口名称], [参数字符串])`
**参数说明:**
>URL：可选参数，在窗口中要显示网页的网址或路径。如果省略这个参数，或者它的值是空字符串，那么窗口就不显示任何文档。
>窗口名称：可选参数，被打开窗口的名称。
>    1.该名称由字母、数字和下划线字符组成。
>    2."_top"、"_blank"、"_self"具有特殊意义的名称。
>       _blank：在新窗口显示目标网页
>       _self：在当前窗口显示目标网页
>       _top：框架网页中在上部窗口中显示目标网页
>    3.相同 name 的窗口只能创建一个，要想创建多个窗口则 name 不能相同。
>    4.name 不能包含有空格。
>参数字符串：可选参数，设置窗口参数，各参数用逗号隔开。
参数表:
![图片](https://img.mukewang.com/52e3677900013d6a05020261.jpg)
例如:打开http://www.dhnblog.com网站，大小为300px * 200px，无菜单，无工具栏，无状态栏，有滚动条窗口：
```
<script type="text/javascript"> window.open('http://www.dhnblog.com','_blank','width=300,height=200,menubar=no,toolbar=no, status=no,scrollbars=yes')
</script>
```
注意：运行结果考虑浏览器兼容问题。

## JavaScript-关闭窗口（window.close）

close()关闭窗口

用法 `window.close();   //关闭本窗口`
或者	`<窗口对象>.close();   //关闭指定的窗口`

例如:关闭新建的窗口。
```
<script type="text/javascript">
   var mywin=window.open('http://www.dhnblog.com'); //将新打的窗口对象，存储在变量mywin中
   mywin.close();
</script>
```
注意:上面代码在打开新窗口的同时，关闭该窗口，看不到被打开的窗口。
***
## 认识DOM
>文档对象模型DOM（Document Object Model）定义访问和处理HTML文档的标准方法。DOM 将HTML文档呈现为带有元素、属性和文本的树结构（节点树）。
**HTML文档可以说由节点构成的集合，三种常见的DOM节点:**
![图片](https://img.mukewang.com/52e4bd0f0001dd8d04830279.jpg)
1. 元素节点：上图中&lt;html&gt;、&lt;body&gt;、&lt;p&gt;等都是元素节点，即标签。
2. 文本节点:向用户展示的内容，如<li>...</li>中的JavaScript、DOM、CSS等文本。
3. 属性节点:元素属性，如<a>标签的链接属性href="http://www.dhnblog.com"。

## 通过ID获取元素
>学过HTML/CSS样式，都知道，网页由标签将信息组织起来，而标签的id属性值是唯一的，就像是每人有一个身份证号一样，只要通过身份证号就可以找到相对应的人。那么在网页中，我们通过id先找到标签，然后进行操作。

语法` document.getElementById("id") `
看看下面代码:
![图片](https://img.mukewang.com/52e4c5950001054207900423.jpg)
结果:null或[object HTMLParagraphElement]
注:获取的元素是一个对象，如想对元素进行操作，我们要通过它的属性或方法。
```
<script type="text/javascript">
  var mychar= document.getElementById('con');          ;
  document.write("结果:"+mychar); //输出获取的P标签。 
</script>
```
## innerHTML 属性
innerHTML 属性用于获取或替换 HTML 元素的内容。
语法`Object.innerHTML`
1. .Object是获取的元素对象，如通过document.getElementById("ID")获取的元素。
2. 注意书写，innerHTML区分大小写。

我们通过id="con"获取&lt;p&gt;元素，并将元素的内容输出和改变元素内容，代码如下:
![图片](https://img.mukewang.com/52e4cd080001f01507220418.jpg)

```
<h2 id="con">javascript</H2>
<p> JavaScript是一种基于对象、事件驱动的简单脚本语言，嵌入在HTML文档中，由浏览器负责解释和执行，在网页上产生动态的显示效果并实现与用户交互功能。</p>
<script type="text/javascript">
  var mychar= document.getElementById('icon');          ;
  document.write("原标题:"+mychar.innerHTML+"<br>"); //输出原h2标签内容
  mychar.innerHTML="Hello world!";
  document.write("修改后的标题:"+mychar.innerHTML); //输出修改后h2标签内容
</script>
```
## 改变 HTML 样式
HTML DOM 允许 JavaScript 改变 HTML 元素的样式。如何改变 HTML 元素的样式呢？
语法`Object.style.property=new style;`
注意:Object是获取的元素对象，如通过document.getElementById("id")获取的元素。

基本属性表（property）:
![图片](https://img.mukewang.com/52e4d4240001dd6c04850229.jpg)
注意:该表只是一小部分CSS样式属性，其它样式也可以通过该方法设置和修改。

看看下面的代码:改变p元素的样式，将颜色改为红色，字号改为20,背景颜色改为蓝：
```
<p id="pcon">Hello World!</p>
<script>
   var mychar = document.getElementById("pcon");
   mychar.style.color="red";
   mychar.style.fontSize="20";
   mychar.style.backgroundColor ="blue";
</script>
```
## 显示和隐藏（display属性）
网页中经常会看到显示和隐藏的效果，可通过display属性来设置。
语法`Object.style.display = value`

注意:Object是获取的元素对象，如通过document.getElementById("id")获取的元素。

value取值:

![图片](https://img.mukewang.com/52e4dba5000179da04110095.jpg)

看看下面代码:
![图片](https://img.mukewang.com/52e4dcf50001bead09310689.jpg)

~~演示代码~~
```
<script type="text/javascript"> 
	function hidetext()  
	{  
	var mychar = document.getElementById("con");
	mychar.style.display="none"
	}  
	function showtext()  
	{  
	var mychar = document.getElementById("con")
	mychar.style.display="block;";
	}
</script> 
</head> 
<body>  
<h1>JavaScript</h1>  
<p id="con">做为一个Web开发师来说，如果你想提供漂亮的网页、令用户满意的上网体验，JavaScript是必不可少的工具。</p> 
<form>
   <input type="button" onclick="hidetext()" value="隐藏内容" /> 
   <input type="button" onclick="showtext()" value="显示内容" /> 
</form>
</body> 
```
## 控制类名（className 属性）
>className 属性设置或返回元素的class 属性。
语法`object.className = classname`
作用:
1. 获取元素的class 属性
2. 为网页内的某个元素指定一个css样式来更改该元素的外观
看看下面代码，获得p元素的 class 属性和改变className：

![图片](https://img.mukewang.com/52e4e28c0001c97f07980838.jpg)
```
<style>
    body{ font-size:16px;}
    .one{
		border:1px solid #eee;
		width:230px;
		height:50px;
		background:#ccc;
		color:red;
    }
	.two{
		border:1px solid #ccc;
		width:230px;
		height:50px;
		background:#9CF;
		color:blue;
	}
	</style>
</head>
<body>
    <p id="p1" > JavaScript使网页显示动态效果并实现与用户交互功能。</p>
    <input type="button" value="添加样式" onclick="add()"/>
	<p id="p2" class="one">JavaScript使网页显示动态效果并实现与用户交互功能。</p>
    <input type="button" value="更改外观" onclick="modify()"/>

	<script type="text/javascript">
	   function add(){
	      var p1 = document.getElementById("p1");
	      p1.className="one";
	   }
	   function modify(){
	      var p2 = document.getElementById("p2");
	       p2.className="two";
	   }
	</script>
```

## 编程挑战
>请编写"改变颜色"、"改变宽高"、"隐藏内容"、"显示内容"、"取消设置"的函数，点击相应按钮执行相应操作，点击"取消设置"按钮后，提示是否取消设置，如是执行操作，否则不做操作。
一、定义"改变颜色"的函数
```
提示:
obj.style.color
obj.style.backgroundColor 
```
二、定义"改变宽高"的函数
```
提示:
obj.style.width
obj.style.height 
```
三、定义"隐藏内容"的函数
```
提示:
obj.style.display="none";
```
四、定义"显示内容"的函数
```
提示:
obj.style.display="block";
```
五、定义"取消设置"的函数
```
提示: 
使用confirm()确定框，来确认是否取消设置。
如是将以上所有的设置恢复原始值,否则不做操作。
```
六、当点击相应按钮，执行相应操作，为按钮添加相应事件
~~参考代码~~
```
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" Content="text/html; charset=utf-8" />
<title>javascript</title>
<style type="text/css">
body{font-size:12px;}
#txt{
    height:400px;
    width:600px;
	border:#333 solid 1px;
	padding:5px;}
p{
	line-height:18px;
	text-indent:2em;}
</style>
</head>
<body>
  <h2 id="con">JavaScript课程</H2>
  <div id="txt"> 
     <h5>JavaScript为网页添加动态效果并实现与用户交互的功能。</h5>
        <p>1. JavaScript入门篇，让不懂JS的你，快速了解JS。</p>
        <p>2. JavaScript进阶篇，让你掌握JS的基础语法、函数、数组、事件、内置对象、BOM浏览器、DOM操作。</p>
        <p>3. 学完以上两门基础课后，在深入学习JavaScript的变量作用域、事件、对象、运动、cookie、正则表达式、ajax等课程。</p>
  </div>
  <form>
  <!--当点击相应按钮，执行相应操作，为按钮添加相应事件-->
    <input type="button" value="改变颜色" onclick='myceshi1()'>  
    <input type="button" value="改变宽高" onclick='myceshi2()'>
    <input type="button" value="隐藏内容" onclick='myceshi3()'>
    <input type="button" value="显示内容" onclick='myceshi4()'>
    <input type="button" value="取消设置" onclick='myceshi5()'>
  </form>
  <script type="text/javascript">
			//定义"改变颜色"的函数
			function myceshi1(){
				var ceshi1=document.getElementById('txt');
				ceshi1.style.color='red';
			}
			//定义"改变宽高"的函数  
			function myceshi2(){
				var ceshi2=document.getElementById('txt');
				ceshi2.style.width='600px';
				ceshi2.style.height='400px';
			}
			//定义"隐藏内容"的函数  
			function myceshi3(){
				var ceshi3=document.getElementById('txt');
				ceshi3.style.display='none';
			}
			//定义"显示内容"的函数  
			function myceshi4(){
				var ceshi4=document.getElementById('txt');
				ceshi4.style.display='block';
			}
			//定义"取消设置"的函数 
			function myceshi5(){
				if(confirm('是否取消设置'))
				{
					var ceshi5=document.getElementById('txt');
					ceshi5.style.width='400px';
					ceshi5.style.height='200px';
					ceshi5.style.border='1px solid #ccc';
					ceshi5.style.padding='5px';
					ceshi5.style.lineHeight='24px';
					ceshi5.style.textAlign='justify';
					ceshi5.style.display='block';
				}
				else{
					console.log('恭喜你已经成功取消操作');
				}
			}
		</script>
</body>
</html>
```