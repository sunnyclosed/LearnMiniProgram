// pages/start/start.js
Page({
  startClick() {
    console.log('跳转')
    wx.navigateTo({
      url: '/pages/login/login'
    })
  }
})