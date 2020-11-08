// pages/myfans/myfans.js
Page({
  data: {
    fanslist: []
  },
  onLoad: function (options) {
    const app = getApp()
    this.setData({
      fanslist: app.globalData.mydata.myfans
    })
  },
})