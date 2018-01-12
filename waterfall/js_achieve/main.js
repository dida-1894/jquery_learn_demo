window.onload = function() {
  waterfall("main", "box");
  var dataInt = {"data":[{"src":"../images/1.jpg"},{"src":"../images/2.jpg"},{"src":"../images/3.jpg"},{"src":"../images/4.jpg"},{"src":"../images/5.jpg"}]}
  window.onscroll = function(){
    var oParent=document.getElementById('main');
    if(checkScrollSlide){
      // checkScrollSlide()
      for (var i = 0; i < dataInt.data.length; i++) {
        var box=document.createElement("div");
        box.className="box";
        oParent.append(box);
        var pic=document.createElement("div");
        pic.className="pic";
        box.append(pic);
        var img=document.createElement("img");
        img.src=dataInt.data[i].src;
        pic.append(img);
        waterfall("main", "box");
      }
    }
  }
}

function checkScrollSlide(){
  var oBoxs=document.getElementsByClassName('box');
  var lastBoxH=oBoxs[oBoxs.length-1].offsetTop;
  var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
  var height=document.body.clientHeight || document.documentElement.clientHeight;
  return (lastBoxH==scrollTop+height)? false:true;
  console.log(scrollTop);

}

function waterfall(parent, children) {
  var oParent = document.getElementById(parent);
  var oBoxs = oParent.getElementsByClassName(children);
  var oBoxW = oBoxs[0].offsetWidth;
  var cols = Math.floor(document.documentElement.clientWidth / oBoxW);
  var oMainW = cols*oBoxW;
  oParent.style.width = oMainW + "px";
  var hArr=[];
  for (var i = 0; i < oBoxs.length; i++) {
    if (i<cols) {
      hArr.push(oBoxs[i].offsetHeight);
    } else {
      var minH=Math.min.apply(null,hArr);
      var index=getMinHIndex(minH,hArr);
      oBoxs[i].style.position='absolute';
      oBoxs[i].style.top=minH+'px';
      oBoxs[i].style.left=index*oBoxW+'px';
      hArr[index]+=oBoxs[i].offsetHeight;
    }
  }
}

function getMinHIndex(val,arr){
  for (var i in arr) {
    if (arr[i]==val) {
      return i
    }
  }
}
