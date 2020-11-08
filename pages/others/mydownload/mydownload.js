// pages/mydownload/mydownload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historydl: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const app = getApp()
    this.setData({
      historydl: app.globalData.historydl
    })
  },
})