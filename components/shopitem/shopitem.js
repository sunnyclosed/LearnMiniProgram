// components/shopItem/shopItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    shop: {
      type: Object,
      value: {}
    },
    dis: {
      type: String,
      value: ""
    },
  },
  methods: {
    showMapClick() {
      let shop = this.data.shop
      wx.navigateTo({
        url: '/pages/others/mapdetail/mapdetail?lat=' + shop.lat + "&lon=" + shop.lon + "&name=" + shop.name,
      })
    }
  }
})
