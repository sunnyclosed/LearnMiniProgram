// components/fansData/fansData.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num_obj: {
      type: Object,
      value: {}
    },
    is_click: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    fansClick() {
      wx.navigateTo({
        url: '/pages/others/myfans/myfans',
      })
    },
    focusClick() {
      wx.navigateTo({
        url: '/pages/others/myfocus/myfocus',
      })
    }
  }
})
