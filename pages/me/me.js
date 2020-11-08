// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mydata: {},
  },
  onLoad: function () {
    // 模拟从服务器请求数据
    const app = getApp()
    this.setData({
      mydata: app.globalData.mydata
    })
    console.log(this.data.mydata)
  }
})