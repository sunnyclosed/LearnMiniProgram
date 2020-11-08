// pages/hisworks/hisworks.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hisdata: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 拿取数据
    const app = getApp()
    this.setData({
      hisdata: app.globalData.hisdata
    })
  },
})