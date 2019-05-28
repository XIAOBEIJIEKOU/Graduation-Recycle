// pages/recycle/recycle.js
const { $Message } = require('../../assets/dist/base/index');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recyclers: [
      {
        name: "",
        photo: "",
        phone:"",
        description: ""
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAllRecyclers();
  },

  // 请求所有回收员渲染页面
  getAllRecyclers:function(){
    var that = this;
    wx.request({
      url: app.globalData.url+'getAllRecyclers',
      data: {},
      header: {
        "Content-Type": "applciation/json"
      },
      method: "GET",
      success: function (res) {
        console.log(res.data);
        that.setData({
          recyclers: res.data
        })
      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    });
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

  handleOrder:function(event){
    console.log(event);
    wx.navigateTo({
      url: '/pages/order/order?name=' + event.currentTarget.dataset.name + '&phone=' + event.currentTarget.dataset.phone + '&photo=' + event.currentTarget.dataset.photo
    })
  }
})