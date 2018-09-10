7.21
<script type="text/javascript">代码</script>
引用外部文件<script src="script.js"></script>
我们可以将JavaScript代码放在html文件中任何位置，但是我们一般放在网页的head或者body部分
// 我是注释，该语句功能在网页中输出内容
 /*
    多行注释
    养成书写注释的良好习惯
   */
   函数：
function 函数名()
{
     函数代码;
}
输出空格，默认情况下空格保留，可以设置white-space:pre;或者&nbsp代替
window.open([URL], [窗口名称], [参数字符串])  打开一个新窗口

window.close();   //关闭本窗口
或
<窗口对象>.close();   //关闭指定的窗口

确认框  confirm("....") (boolean)
输入框  var url=prompt("通过输入对话框，确定打开的网址","http://www.imooc.com");

7.22
document.getElementById("id")获取DOM对象
innerHTML修改对象的HTML内容
eg:
  var mychar=document.getElementById("con");
  document.write("原标题:"+mychar.innerHTML+"<br>"); //输出原h2标签内容
  mychar.innerHTML="Hello world"
  document.write("修改后的标题:"+mychar.innerHTML);
Object.style.property=new style; 用于改变HTML样式
eg: mychar.style.color="red"

Object.style.display = value(value="none" 隐藏元素， value="block" 显示元素)
object.className = classname 为元素添加样式

对象：
var person={firstname:"Bill", lastname:"Gates", id:5566};
两种寻址方式：
name=person.lastname;
name=person["lastname"];
清空变量：name=null;
声明新变量：var carname=new String;

HTML DOM树
通过标签名寻找HTML元素：
本例查找 id="main" 的元素，然后查找 "main" 中的所有 <p> 元素：
var x=document.getElementById("main");
var y=x.getElementsByTagName("p");

HTML事件
onCLick  onload和onunload处理鼠标经过事件
onchange 事件常结合对输入字段的验证来使用
onmouseover 和 onmouseout 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数
onmousedown onmouseup

创建HTML元素
var para=document.createElement("p");
var node=document.createTextNode("这是新段落。");
para.appendChild(node);
var element=document.getElementById("div1");
element.appendChild(para);

var child=document.getElementById("p1");
child.parentNode.removeChild(child);

函数创建对象
function person(firstname,lastname,age,eyecolor)
{
this.firstname=firstname;
this.lastname=lastname;
this.age=age;
this.eyecolor=eyecolor;
}
2018.9.8 表单验证
eg.
function validateForm()
{
  var x=document.forms["myForm"]["fname"].value;
  if (x==null || x=="")
  {
    alert("姓必须填写");
    return false;
  }
}
html调用validateForm:
<form name="myForm" action="demo-form.php" onsubmit="return validateForm()" method="post">
姓: <input type="text" name="fname">
<input type="submit" value="提交">
</form>
验证api
Dom方法
checkValidity() 确认输入数据是否合法
setCustomValidity() 修改自定义提示
DOM属性
validity 返回input是否合法
validationMessage 	浏览器错误提示信息
willValidate 	指定 input 是否需要验证
.....
javascrpit:void(表达式或值) 不返回值，但里面表达式会执行

函数表达式
JavaScript 函数可以通过一个表达式定义。
函数表达式可以存储在变量中：
实例
var x = function (a, b) {return a * b}; 
函数构造器：Function()
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);

函数提升（Hoisting）
提升（Hoisting）是 JavaScript 默认将当前作用域提升到前面去的的行为。
提升（Hoisting）应用在变量的声明与函数的声明。
使用表达式定义函数时无法提升。

匿名函数自动调用表达式：
(function(){})()
(函数定义)

函数参数（2018.9.10）
参数规则
JavaScript 函数定义时显式参数没有指定数据类型。
JavaScript 函数对隐式参数没有进行类型检测。
JavaScript 函数对隐式参数的个数没有进行检测。
默认参数：eg
function myFunction(x, y) {
    if (y === undefined) {
          y = 0;
    } 
}
agrgument对象：包含函数调用的参数数组
eg。
x = sumAll(1, 123, 500, 115, 44, 88);
function sumAll() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
值传递的参数在函数外不会改变，对象则会改变
this关键字 对象本身
函数既是HTML页面对象的函数，也是winow对象的函数

闭包可以访问上一层函数的变量
eg。
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}//闭包函数
})();
 
add();
add();
add();
// 计数器为 3

    JavaScript 能够改变页面中的所有 HTML 元素   document.getElementById("p1").innerHTML="新文本!";
    JavaScript 能够改变页面中的所有 HTML 属性   document.getElementById(id).attribute=新属性值
    JavaScript 能够改变页面中的所有 CSS 样式    document.getElementById(id).style.property=新样式
    JavaScript 能够对页面中的所有事件做出反应    
    1.<button type="button"
onclick="document.getElementById('id1').style.color='red'">
点我!</button>
    2.document.getElementById("myBtn").onclick=function(){displayDate()};
    3.<body onload="checkCookies()">  (onload和unload事件进入或离开页面触发，检测访问者的浏览器类型和浏览器版本)
    4.<input type="text" id="fname" onchange="upperCase()">  （onchange事件，改变字段时触发）
    5.onmouseover和onmouseout事件，用户鼠标移入或者移出html元素时触发
    6.onmousedown、onmouseup 以及 onclick 事件  
       首先当点击鼠标按钮时，会触发 onmousedown 事件，当释放鼠标按钮时，
       会触发 onmouseup 事件，最后，当完成鼠标点击时，会触发 onclick 事件
    7.onfouse

    通过 id 找到 HTML 元素    eg. var x=document.getElementById("intro"); 
    通过标签名找到 HTML 元素   var y=x.getElementsByTagName("p");
    通过类名找到 HTML 元素     var x=document.getElementsByClassName("intro"); 


addEventListener()方法 可以向一个元素添加多个事件句柄
     当你使用 addEventListener() 方法时, JavaScript 从 HTML 标记中分离开来，可读性更强， 在没有控制HTML标记时也可以添加事件监听。
     你可以使用 removeEventListener() 方法来移除事件的监听。
     语法：element.addEventListener(event, function, useCapture);（useCapture选择描述事件是冒泡还是捕获）
