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
