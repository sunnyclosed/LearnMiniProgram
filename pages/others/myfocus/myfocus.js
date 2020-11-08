Page({
  data: {
    focuslist: []
  },
  onLoad: function (options) {
    const app = getApp()
    this.setData({
      focuslist: app.globalData.mydata.myfocus
    })
  },
})