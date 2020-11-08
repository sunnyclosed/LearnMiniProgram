Page({
  /* 
  事件函数
  */
  detailMoveClick(time) {
    if (time) {
      time = 1000
    }
    let ani_move = wx.createAnimation({
      delay: 0,
      duration: time,
      timingFunction: 'ease',
    });
    if (this.data.isDetailOpen) {
      ani_move.bottom(-this.data.detailMoveHeight).step()
      this.setData({
        detail_move: ani_move.export(),
        isDetailOpen: false
      })
      console.log("关闭")
    } else {
      ani_move.bottom(0).step()
      this.setData({
        detail_move: ani_move.export(),
        isDetailOpen: true
      })
      console.log("打开")
    }
  },
  loveClick() {
    if (!this.data.isFans) {
      this.setData({
        isFans: true
      })
    }
  },
  hisWorkClick(){
    wx.navigateTo({
      url: '/pages/others/hisworks/hisworks',
    })
  },
  /* 
  原生函数
   */
  data: {
    id: 0,
    detailList: [],
    // detail是否已展开
    isDetailOpen: true,
    detailMoveHeight: 0,
    // 是否已粉
    isFans: false,
  },
  onLoad: function (options) {
    // 获取初始数据
    this.initData(options.id)
    // 初始化detail_info收缩的距离
    this.getMoveHeight()
  },

  /* 
  工具函数
  */
  initData(param) {
    if (param) {
      this.setData({
        id: param
      })
    }
    // 模拟获取数据
    setTimeout(() => {
      const appDetailList = getApp().globalData.detailList;
      this.setData({
        detailList: appDetailList[this.data.id]
      })
    }, 1000);
  },
  getMoveHeight() {
    const obj = wx.createSelectorQuery();
    let _this = this
    obj.select('.detail_info').boundingClientRect();
    obj.select('.detail_info_btn_box').boundingClientRect();
    obj.exec(function (rect) {
      _this.setData({
        detailMoveHeight: (rect[0].height - rect[1].height).toFixed(0)
      })
    });
  }
})