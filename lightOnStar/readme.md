**全局变量太多啦**

  > * 1.模拟命名空间

  > * 2.闭包

  自我执行匿名函数
  ```
    (function(){

      })()
```
-------------
**事件委托or事件代理**：为ul下每一个li都绑定一个事件，是一种浪费，可以直接在父元素上绑定事件，这样父元素及其子元素都会有触发事件的可能（冒泡）
```
  $item.on("mouseover",function(){
    lightOn($(this).index()+1);
  }).on("click",function(){
    num=$(this).index()+1;
    lightOn(num);
  });
  $rating.on("mouseout",function(){
    lightOn(num);
  });
```
Then
```
  $rating.on("mouseover",".item",function(){
    lightOn($(this).index()+1);
  }).on("click",".item",function(){
      num=$(this).index()+1;
      lightOn(num);
    }).on("mouseout",function(){
      lightOn(num);
    });
```
-----------
**代码复用**
  通过外界传递的参数来决定对象
  ```
  var rating=(function(){

    function lightOn(el,num){
      ......
    }

    var init=function(el,num){
      取dom
      绑定事件触发/事件委托
    }
    return init{
      init:init
    };
  })()
```
 * 调用
  ```
  rating.init('#rating',2)
```

* jquery插件
  ```
  $.fn.extend({
      rating:function(num){
        return this.each(function(){
          init(this,num)
          })
      }
    });
  ```
* 调用
  ```
  $('#rating').rating(2);
  ```
  ------
  **设计模式**

  × 当封装一个函数时，你是在复用代码;而当你使用一个设计模式的时候，你是在复用他人的设计经验。

  × GoF：设计模式是在面向对象软件设计过程中针对特定问题的简洁而优雅的解决方案。

  GoF有23种设计模式，分为三类：

  1、创建型模式：对创建类的过程进行了封装

  2、结构型模式：解决类，对象，模块之间的耦合关系

  3、行为型模式：识别对象之间的常用交流模式，并加以实现。

> * 优点

  × 利于沟通

  ×保证代码的可维护性，扩展性，复用性，灵活性。
