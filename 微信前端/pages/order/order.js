// pages/order/order.js
const { $Toast } = require('../../assets/dist/base/index');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    phone: '',
    address: '',
    time: '',
    recyclerName: '',
    recyclerPhone: '',
    recyclerPhoto: ''
  },

  // name: function (e) {
  //   this.setData({
  //     name: e.detail.detail.value
  //   })
  // },

  phone: function (e) {
    this.setData({
      phone: e.detail.detail.value
    })
  },

  address: function (e) {
    this.setData({
      address: e.detail.detail.value
    })
  },

  time: function (e) {
    this.setData({
      time: e.detail.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      recyclerName: options.name,
      recyclerPhone: options.phone,
      recyclerPhoto: options.photo,
      name: app.globalData.nickName,
    })
    console.log(this.data);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 处理预定请求
  handleOrder: function () {
    console.log(this.data);
    this.order();
  },

order:function(){
  var that = this;
  wx.request({
    url: app.globalData.url+'handleorder',//请求地址
    data: {
      name: that.data.name,
      phone:that.data.phone,
      address:that.data.address,
      time:that.data.time,
      recyclerName:that.data.recyclerName,
      recyclerPhone:that.data.recyclerPhone,
      recyclerPhoto:that.data.recyclerPhoto
    },
    header: {
      "Content-Type": "applciation/json"
    },
    method: "GET",//后段不需要用@RequestBody就能接收bean
    success: function (res) {
      console.log(res.data);
      if (res.data == 1) {
        $Toast({
          content: "预约成功",
        });
        setTimeout(() => {
          wx.navigateBack({
            delta: 1
          });
        }, 1000);
      } else {
        $Toast({
          content: "预约失败"
        });
      }
    },
    fail: function (err) { },//请求失败
    complete: function () { }//请求完成后执行的函数
  })
},

  handleCancle: function () {
    wx.navigateBack({
      delta: 1
    });
  }
})