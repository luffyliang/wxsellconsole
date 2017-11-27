
//获取应用实例  
var app = getApp()
Page({
  data: {
    toastHidden: true,
    category_name: '',
  },
  onLoad: function () {
    that = this;
    wx.request({
      url: "http://localhost:8080/seller/1",
      header: {
        "content-Type": "application/x-www-form-urlencoded"
      },
      method: "get",
      //data: { cityname: "上海", key: "1430ec127e097e1113259c5e1be1ba70" },  
      data:{} ,
      complete: function (res) {
        console.log(res.data)
        that.setData({
          toastHidden: false,
         

          category_name: res.data.categoryName,
          
        });
        if (res == null || res.data == null) {
          console.error('网络请求失败');
          return;
        }
      }
    })
  },
  onToastChanged: function () {
    that.setData({ toastHidden: true });
  }
})
var that;  