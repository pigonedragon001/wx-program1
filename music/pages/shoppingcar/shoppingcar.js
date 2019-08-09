// pages/shoppingcar/shoppingcar.js
   const cart=require('../../utils/cart.js');
   const eventbus=require('../../utils/eventbus.js');
    
Page({

  /**
   * 页面的初始数据
   */
  data: {
       cartItems:[],
       total:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(cart.getCartItems())
      this.setData({
        cartItems: cart.getCartItems(),
        total: cart.getTotal()
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

  },
  addcount(event){
      console.log(event);
      cart.addcount(event.currentTarget.dataset.pid);
      eventbus.emit('recount')
      this.setData({
        cartItems:cart.getCartItems(),
        total: cart.getTotal()
      })
  },

  deccount(event){
    cart.deccount(event.currentTarget.dataset.pid);
    eventbus.emit('recount')
    this.setData({
      cartItems: cart.getCartItems(),
      total: cart.getTotal()
    })
  },

  pay(){
      let cartItems=cart.getCartItems();
      let cartItemsStr=JSON.stringify(cartItems);
      wx.navigateTo({
        url: '../mycar/mycar?cartItems=' + cartItemsStr,
      })
  }
})