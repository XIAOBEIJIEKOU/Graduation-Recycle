//index.js
//获取应用实例
const app = getApp()
const { $Toast } = require('../../assets/dist/base/index');

Page({
  data: {
    kind: '可回收',
    inputShowed: false,
    inputVal: "",
    articles: [{
      title: "",
      extra: "",
      content: "",
      tunmb: ""
    }]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getAllArticles();
  },

  // 请求所有文章
  getAllArticles: function () {
    var that = this;   // 这个地方非常重要，重置data{}里数据时候setData方法的this应为以及函数的this, 如果在下方的sucess直接写this就变成了wx.request()的this了
    wx.request({
      url: app.globalData.url+'getAllArticles',//请求地址
      data: {//发送给后台的数据
        name: "damon",
      },
      header: {//请求头
        "Content-Type": "applciation/json"
      },
      method: "GET",//get为默认方法/POST
      success: function (res) {
        console.log(res.data);//res.data相当于ajax里面的data,为后台返回的数据
        that.setData({//如果在sucess直接写this就变成了wx.request()的this了.必须为getdata函数的this,不然无法重置调用函数
          articles: res.data
        })
      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    })
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },

  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },

  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

  // 搜索回收分类请求
  inputSearch: function () {
    console.log(this.data.inputVal);
    var that = this;
    wx.request({
      url: app.globalData.url+'getKindByName',//请求地址
      data: {
        name: that.data.inputVal,
      },
      header: {
        "Content-Type": "applciation/json"
      },
      method: "GET",
      success: function (res) {
        console.log(res.data);
        $Toast({
          content: "分类：" + res.data
        });
      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    })
  },

  showWholeArticle: function (event) {
    console.log(event);
    wx.navigateTo({
      url: '/pages/article/article?title=' + event.currentTarget.dataset.title + '&content=' + event.currentTarget.dataset.content
    })
  }
})
