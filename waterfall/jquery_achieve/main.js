$(document).ready(function(){
  waterfall();
  var dataInt = {"data":[{"src":"../images/1.jpg"},{"src":"../images/2.jpg"},{"src":"../images/3.jpg"},{"src":"../images/4.jpg"},{"src":"../images/5.jpg"}]}
  $(window).on("scroll",function(){
    if (checkScrollSlide) {
      $.each(dataInt.data,function(index,value){
        var box=$("<div>").addClass("box").appendTo($("#main"));
        var pic=$("<div>").addClass("pic").appendTo($(box));
        $("<img>").attr("src",$(value).attr("src")).appendTo($(pic));
        waterfall();
      });
    }
  })
});
function waterfall(){
  var main=$("#main");
  var boxs=$(".box");
  var w=boxs.outerWidth();
  var cols=Math.floor($(window).width()/w);
  main.width(cols*boxs.outerWidth());
  var hArr=new Array();
  boxs.each(function(index,value){
    if (index<cols) {
      hArr.push(boxs.eq(index).outerHeight());
    } else {
      var minH=Math.min.apply(null,hArr);
      var minHIndex=$.inArray(minH,hArr);
      $(value).css({"position":"absolute","top":minH+"px","left":minHIndex*w+"px"})
      hArr[minHIndex]+=boxs.eq(index).outerHeight();
    }
  });
}
function checkScrollSlide(){
  var lastboxH=$(".box").last().offset().top;
  var scrollTop=$(window).scrollTop();
  var height=$(window).height();
  return(lastboxH==scrollTop+height)? false:true;
}
