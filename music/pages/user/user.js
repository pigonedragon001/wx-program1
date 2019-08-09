// pages/user/user.js
const ajx=require('../../utils/require.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
        login:false,
        userName:'',
        login_name:'',
        password:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      login: wx.getStorageSync('token') ? true : false,
      userName: wx.getStorageSync('username')
    })
  },

  login(){
      const that=this;
      wx.request({
        url: 'http://localhost:3000/api/login',
        data: {
          loginName: this.data.login_name,
          password: this.data.password
        },
        method: 'POST',
        dataType: 'json',
        success(res){
          if (res.data.status===10000){
            that.setData({
              login:true,
              userName:res.data.data.userName,
            })

            wx.setStorageSync('userid', res.data.data.userID);
            wx.setStorageSync('token', res.data.data.token);
            wx.setStorageSync('username', res.data.data.userName);
          }
          console.log(res.data)
        }
      })
  },

  changeName(event){
    console.log(event)
       this.setData({
         login_name:event.detail.value
       })
  },

  changePassword(event){
         this.setData({
           password:event.detail.value
         })
  },

  outlogin(){
       wx.removeStorageSync('userid');
       wx.removeStorageSync('username');
       wx.removeStorageSync('token');
       this.setData({
         login:false,
         userName: '',
         login_name: '',
         password: '',
       });

  },

  getmessage(){
    ajx.request({
      url: 'http://localhost:3000/api/getmessage?userId=' + wx.getStorageSync('userid'),
      dataType: 'json',
      success(res) {
        console.log(res.data)
        wx.showToast({
          title: '成功',
          duration: 2000
        })
      }
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