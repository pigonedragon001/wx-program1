// pages/mycar/mycar.js

  const eventbus=require('../../utils/eventbus.js');
  const cart=require('../../utils/cart.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    place: wx.getStorageSync('currentPlace') || null,
    catItems:null,
    total:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const cartItems = JSON.parse(options.cartItems)
      this.setData({
        cartItems: cartItems,
        total: cart.getTotal()
      })
    
     eventbus.on('choicePlace',(place)=>{
           this.setData({
             place:place
           })
     })
    wx.setStorageSync('currentPlace', event.currentTarget.dataset.place)
  },

  place(){
      wx.navigateTo({
        url: '../myplace/myplace',
      })
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

  }
})