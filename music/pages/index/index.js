//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
     songs:[],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
  },
  //事件处理函数
  
// getmisics(){
//     let that=this;
//     wx.request({
//       url: 'https://tingapi.ting.baidu.com/v1/restserver/ting?    method=baidu.ting.billboard.billList&type=1&size=10&offset=0',
//       dataType:'json',
//       success(res){
//         console.log(res.data)
//         that.setData({
//           songs:res.data.song_list
//         })
//       }
//     })
// },


  onLoad: function () {
    let that = this;
    wx.request({
      url: 'https://tingapi.ting.baidu.com/v1/restserver/ting?    method=baidu.ting.billboard.billList&type=1&size=10&offset=0',
      dataType: 'json',
      success(res) {
        console.log(res.data)
        that.setData({
          songs: res.data.song_list
        })
      }
    })
  },
  
})
