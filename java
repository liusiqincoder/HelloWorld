1.servlet

image.io写图片
BufferedImage 可以用来画图并传输

<servlet-name>存放运行的servlet类名称</servlet-name>
<servlet-class>servlet的项目下的路径</servlet-class>
<servlet-mapping>
<servlet-name>---同上
<url-pattern>类对应的浏览器映射</url-pattern>
</servlet-mapping>
<init-paramter>
<param-name>p2</param-name>
<param-value>v2</param-value>#map对应关系

线程不安全，所以
    最好不要在servlet创建成员，局部变量即可
    也可以创建无状态对象
    创建只读状态对象
    
让服务器在启动时创建servlet
在<servlet>中设置  <load-od-startup>num</load-od-startup> num为非负整数，代表servlet的执行顺序，小的先

<url-pattern>可以使用通用匹配符*,如*.do,*不能放中间
