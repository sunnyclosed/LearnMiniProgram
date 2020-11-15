// pages/others/mapdetail/mapdetail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    hisLat: 0,
    hisLon: 0,
    myLat: 0,
    myLon: 0,
    scale: 18,
    markers: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this

    // 设置目标位置和markers
    this.setData({
      name: options.name,
      hisLat: options.lat,
      hisLon: options.lon,
    })
    // 设置markers
    let _markers = [
      {
        latitude: _this.data.hisLat,
        longitude: _this.data.hisLon,
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
      }
    ]
    console.log("his:", this.data.hisLat, this.data.hisLon)
    // 获取我的位置
    wx.getLocation({
      type: "gcj02",
      success: (res) => {
        this.setData({
          myLat: res.latitude,
          myLon: res.longitude,
          markers: _markers,
        })
        console.log("my:", this.data.myLat, this.data.myLon)
      }
    })
  },

  /**
   * 事件函数
   */
  pathClick() {
    let _this = this
    let plugin = requirePlugin('routePlan');
    let key = 'LFJBZ-SARKV-CO6PK-UPZ5C-PXAM5-M5BFS';  //使用在腾讯位置服务申请的key
    let referer = '晒衣服miniprogram';   //调用插件的小程序的名称
    let startPoint = JSON.stringify({  //起点
      'name': '我的位置',
      'latitude': _this.data.myLat,
      'longitude': _this.data.myLon
    });
    let endPoint = JSON.stringify({  //终点
      'name': _this.data.name,
      'latitude': _this.data.hisLat,
      'longitude': _this.data.hisLon
    });
    wx.navigateTo({
      url: 'plugin://routePlan/route-plan?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    });
  },
  navClick() {
    let _this = this.data
    let lat = Number(_this.hisLat)
    let lon = Number(_this.hisLon)
    wx.openLocation({
      latitude: lat,
      longitude: lon,
      scale: 18
    })
  },
})