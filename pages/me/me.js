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
    setTimeout(() => {
      this.setData({
        mydata: app.globalData.mydata
      })
    }, 100)
  }
})