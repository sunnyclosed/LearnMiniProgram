import { getDistance } from "../../tools/jstools.js"
Page({
  data: {
    mylatitude: 0,
    mylongitude: 0,
    shopData: [],
    distance: [],
  },
  onLoad: function () {
    let _this = this
    // 获取数据
    const app = getApp()
    this.setData({
      shopData: app.globalData.shopdata
    })
    let shopData = _this.data.shopData
    let dis = []

    // 获取当前位置
    wx.getLocation({
      type: "gcj02",
      success: function (res) {
        _this.setData({
          mylatitude: res.latitude,
          mylongitude: res.longitude,
        })
        // 计算直线距离
        let mylat = _this.data.mylatitude
        let mylon = _this.data.mylongitude
        for (let i = 0; i < shopData.length; i++) {
          let d = getDistance(mylat, mylon, shopData[i].lat, shopData[i].lon)
          if (d > 1) {
            d = d.toFixed(1) + "km"
          } else {
            d = (d * 1000).toFixed(0) + "m"
          }
          dis.push(d)
        }
        _this.setData({
          distance: dis
        })
      }
    })


  }

})