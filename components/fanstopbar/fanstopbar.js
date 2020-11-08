// components/fanstopbar/fanstopbar.js
Component({
  properties: {
    title: {
      type: String,
      value: ""
    }
  },

  methods: {
    backClick() {
      wx.switchTab({
        url: '/pages/me/me',
      })
    },
  }
})
