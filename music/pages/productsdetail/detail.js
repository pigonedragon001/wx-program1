// pages/productsdetail/detail.js

 const cart=require('../../utils/cart.js');
 const eventbus=require('../../utils/eventbus.js');


Page({
    product_id:null,
  /**
   * 页面的初始数据
   */
  data: {
      detail:null,
      itemcount:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options);
      this.product_id=options.pid;
    let thispage = this;
    wx.request({
      url: 'http://localhost:3000/api/getdetail?pid=' + options.pid,
      dataType: 'json',
      success(res) {
        console.log(res.data)
        thispage.setData({
          detail: res.data.productDetail,
          itemcount: cart.getItemcount()
        })
      }
    })

     this.handler=eventbus.on('recount',(data)=>{
          this.setData({
            itemcount:cart.getItemcount()
          })
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
  addtocar(){
      console.log(this.product_id);
      const pname=this.data.detail.name;
      const price=this.data.detail.price;
      cart.addcart(this.product_id,pname,price);
     this.setData({
       itemcount: cart.getItemcount()
     })
  
  },


  mycar(){
      wx.navigateTo({
        url: '../shoppingcar/shoppingcar',
      })
    
  },


})