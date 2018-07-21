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
