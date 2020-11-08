// components/iconbar/iconbar.js
Component({
  methods: {
    dlHistoryClick() {
      wx.navigateTo({
        url: '/pages/others/mydownload/mydownload',
      })
    }
  }
})
