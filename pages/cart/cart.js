import { getDistancen } from "../../tools/jstools.js"
Page({
  data: {
    latitude: 0,
    longitude: 0,
    hislatitude: 30.706277,
    hislongitude: 111.316233,
    mylatitude: 0,
    mylongitude: 0,
    scale: 18,
    markers: [
      {
        latitude: 30.706277,
        longitude: 111.316233,
        iconPath: "/assets/images/map/icon.png",
        width: 30,
        height: 30,
        callout: {
          content: "目标位置",
          color: "red",
          fontSize: 16,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#0000ff",
          padding: 2,
          display: "ALWAYS"
        }
      },
    ]
  },
  navClick() {
    let _this = this
    wx.openLocation({
      latitude: _this.data.hislatitude,
      longitude: _this.data.hislongitude,
      scale: 18
    })
  },
  pathClick() {
    let _this = this
    let plugin = requirePlugin('routePlan');
    let key = 'LFJBZ-SARKV-CO6PK-UPZ5C-PXAM5-M5BFS';  //使用在腾讯位置服务申请的key
    let referer = '晒衣服miniprogram';   //调用插件的小程序的名称
    let startPoint = JSON.stringify({  //起点
      'name': '我的位置',
      'latitude': _this.data.mylatitude,
      'longitude': _this.data.mylongitude
    });
    let endPoint = JSON.stringify({  //终点
      'name': '水悦城',
      'latitude': _this.data.hislatitude,
      'longitude': _this.data.hislongitude
    });
    wx.navigateTo({
      url: 'plugin://routePlan/route-plan?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    });
  },
  distanceClick() {
    let _this = this.data
    let d = getDistancen(_this.mylatitude, _this.mylongitude, _this.hislatitude, _this.hislongitude)
    console.log(d)
  },
  showAllPoints() {
    let _this = this
    let mapCtx = wx.createMapContext('my-map')
    // 使用 wx.createMapContext 获取 map 上下文
    mapCtx.includePoints({
      paading: [100, 20, 300, 20],
      points: [
        {
          latitude: _this.data.mylatitude,
          longitude: _this.data.mylongitude,
        },
        {
          latitude: _this.data.hislatitude,
          longitude: _this.data.hislongitude
        }
      ]
    })
  },
  onLoad: function () {
    let _this = this
    _this.setData({
      latitude: _this.data.hislatitude,
      longitude: _this.data.hislongitude
    })
  },
  onReady: function (e) {
    let _this = this
    // 获取当前位置
    wx.getLocation({
      type: "gcj02",
      success: function (res) {
        _this.setData({
          mylatitude: res.latitude,
          mylongitude: res.longitude,
        })
      }
    })
  }
})