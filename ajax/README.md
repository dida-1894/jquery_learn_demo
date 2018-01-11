# ajax_node_native
用原生的js实现ajax，后台使用node接受数据。



ajax请求过程


1.创建XMLHttpRequest对象
 - 首先检查windows是否有XMLHttpRquest这个属性
 - IE7及其以上版本中支持原生的 XHR 对象，因此可以直接用： var oAjax = new XMLHttpReques
 - IE6及以下 var xhr = new ActiveXObject('Microsoft.XMLHTTP');


2.连接和发送
- open()函数的三个参数：请求方式、请求地址、是否异步请求(同步请求的情况极少，至今还没用到过)；
type == “GET”
× GET 请求方式是通过URL参数将数据提交到服务器的
type == ‘POST’
× POST则是通过将数据作为 send 的参数提交到服务器；
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
× POST 请求中，在发送数据之前，要设置表单提交的内容类型；


3.接收
3.1 接收到响应后，响应的数据会自动填充XHR对象，相关属性如下
- responseText：响应返回的主体内容，为字符串类型；
- responseXML：如果响应的内容类型是 "text/xml" 或 "application/xml"，这个属性中将保存着相应的xml 数据，是 XML 对应的 document 类型；
- status：响应的HTTP状态码；
- statusText：HTTP状态的说明；


3.2 XHR对象的readyState属性表示请求/响应过程的当前活动阶段，这个属性的值如下
- 0-未初始化，尚未调用open()方法；
- 1-启动，调用了open()方法，未调用send()方法；
- 2-发送，已经调用了send()方法，未接收到响应；
- 3-接收，已经接收到部分响应数据；
- 4-完成，已经接收到全部响应数据；


node 服务器端处理ajax

1 判断req.method
- 处理get
服务器端对url进行解析就可以得到该请求的内容
- 处理post
因为Post请求一般数据比较多，分多次传输，on 接听 req的data事件，每次data事件发生时传递一部分数据，执行回调函数将数据拼起来
直到发生 end事件，数据传输结束。
**
bug之一
不允许静态文件响应POST请求，否则会返回“HTTP/1.1 405 Method not allowed”错误。 即，将出错页面表单的method=“post”改为“get”即可...
