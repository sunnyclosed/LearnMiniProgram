// components/waterfall/waterfall.js
Component({
  properties: {
    list: {
      type: Array,
      value: []
    }
  },
  methods: {
    cardClick(e) {
      const id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/others/detail/detail?id=' + id,
      })
    },
  }
})
