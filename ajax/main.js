window.onload = function(){
var btn = document.querySelector('#button');
console.log(btn);
btn.addEventListener('click',function(){
  var username = document.querySelector('#name').value;
  var password = document.querySelector('#pwd').value ;
  ajax({
    url: "http://127.0.0.1:8080",
    type: "POST",
    data:{name:username,password:password},
    dataType: 'json',
    success: function(response, xml) {
      console.log(response);
    },
    fail: function(stutas) {
      console.log("sorry" + stutas);
    }
  });
});
  function ajax(options) {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase(); //tUC 字符串转大写
    options.dataType = options.dataType || "json";
    var data = options.data;

    // chuang jian  (1)
    if (window.XMLHttpRequest) {
      var xhr = new XMLHttpRequest();
    } else {
      var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    // jie shou  (3)
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          options.success && options.success(xhr.responseText, xhr.responseXML)
        } else {
          options.fail && options.fail(xhr.status);
        }
      }
    }
    // lian jie && fa song (2)
    if (options.type == 'GET') {
      xhr.open("GET", options.url, true);
      xhr.send(null);
    } else if (options.type == 'POST') {
      xhr.open("POST", options.url, true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send(JSON.stringify(data));
    }
  }

}
