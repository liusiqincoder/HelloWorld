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

servlet类要有无参构造器，以便反射时调用

2.ServletContext
一个项目只有一个ServletContext对象
N个Servlet拥有同一个ServletContext，可以由给多个Servlet传递数据
tomcat启动时创建，关闭时死亡

获取SerletContext
   通过ServletConfig.getServletContext()
   GenericServlet，HttpServlet 可以产生。。。
javaWeb四大域对象之一
方法：getAttribute(name),setArrtibute(name,value),removeAttribute(name),getAttributeNames()

作用，读取项目下的资源文件
    使用Servlet的getResourceAsStream("文件在项目的相对路径"),或者getRealPath("文件在项目的相对路径")获取文件的绝对路径

<context-param>可以配置所有servlet可以读的参数，可以使用servletContext的getInitParameter(name)获取指定参数
                  getInitParameterNames()获取全部参数

3.资源注解
eg: private @Resource(name="haha") String message
需要在web.xml配置参数haha
使用<env-entry>配置参数

4.get and post 用于传送信息
get方法适用于搜索，搜索内容显示在浏览器的地址栏，只能传送255个字符
post方法则相反
上传文件需要将form标签的enctype属性设置为multipart/form-data
