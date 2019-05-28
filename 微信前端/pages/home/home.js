// pages/home/home.js
const app = getApp()
const {
  $Toast
} = require('../../assets/dist/base/index');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: app.globalData.nickName,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    orderList: [{
      name: 'salavtore',
      phone: '预留电话',
      time: '星期一',
      recyclerName: 'Damon',
      recyclerPhone: 'test',
      address: 'testAdd'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initUserInfo();
    this.initOrderList();
  },

  //初始化订单列表
  initOrderList: function() {
    var that = this;
    wx.request({
      url: app.globalData.url+'getOrderListByName', //请求地址
      data: {
        name: that.data.name,
      },
      header: {
        "Content-Type": "applciation/json"
      },
      method: "GET", //后段不需要用@RequestBody就能接收bean
      success: function(res) {
        console.log(res.data);
        that.setData({
          orderList: res.data
        })
      },
      fail: function(err) {}, //请求失败
      complete: function() {} //请求完成后执行的函数
    })
  },

  // 初始化用户信息
  initUserInfo: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        name: app.globalData.nickName,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          name: res.userInfo.nickName,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            name: res.userInfo.nickName,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.onLoad();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  handleUpdate: function(detail) {
    let id = detail.currentTarget.dataset.id;
    let name = detail.currentTarget.dataset.name;
    wx.navigateTo({
      url: '/pages/orderUpdate/orderUpdate?orderId=' + id + '&name=' + name
    })
  },

  // 删除订单
  deleteOrder: function(orderId) {
    var that = this;
    wx.request({
      url: app.globalData.url+'deleteOrder', //请求地址
      data: {
        id: orderId,
      },
      header: {
        "Content-Type": "applciation/json"
      },
      method: "GET", //后段不需要用@RequestBody就能接收bean
      success: function(res) {
        console.log(res.data);
        that.onLoad();
      },
      fail: function(err) {}, //请求失败
      complete: function() {} //请求完成后执行的函数
    })
  },

  handleCancle: function(detail) {
    console.log(detail);
    let id = detail.currentTarget.dataset.id;
    var that = this;
    wx.showModal({
      content: '确定删除？',
      success: function(res) {
        if (res.confirm) {
          that.deleteOrder(id);
        }
      }
    });

  }
})