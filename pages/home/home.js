// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },
  cardClick(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/others/detail/detail?id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 模拟从服务器请求数据
    const app = getApp()
    setTimeout(() => {
      this.setData({
        list: app.globalData.workList
      })
    }, 1000)
  }
})