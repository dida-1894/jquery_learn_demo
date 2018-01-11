(function() {
  var date = new Date();
  console.log(date.valueOf());
  $.ajax({
    type: 'get',
    url: 'https://api.tuchong.com/feed-app',
    dataType: 'JSONP',
    success: function(data) {
      // var data = data;
      // var jsonText = JSON.stringify(data, null, 4);
      // p.html(jsonText);
      console.log(data);
    },
    error: function() {
      var html_error = '<span style="color:red;font-family:sans-serif;">这个例子遇到网络错误，没法给你演示喽~先去玩点别的吧~~</span>';
      // p.html(html_error);
    }
  });
})()
