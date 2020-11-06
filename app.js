const TOKEN = 'token'
App({
  globalData: {
    token: ''
  },
  onLaunch: function () {
    // 1.先从缓存中取出token,这里是同步的，当然也可以用异步
    const token = wx.getStorageSync(TOKEN)
    // 2.判断token是否有值
    if (token && token.length !== 0) {
      // 3.向自己服务器验证token是否过期
      this.check_token(token)
    } else {
      // 3.没有token就进行登录
      this.login()
    }
  },

  // 验证token系列操作
  check_token(token) {
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        if (!res.data.errCode) {
          // 验证有效则保存在全局
          this.globalData.token = token;
        }else{
          // 验证无效则进行登录
          this.login()
        }
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },

  // 登录系列操作
  login() {
    wx.login({
      success: (res) => {
        // 1.获取code
        const code = res.code;

        // 2.将code发送给自己的服务器
        wx.request({
          url: "http://123.207.32.32:3000/login",
          method: 'post',
          data: {
            // 增强写法，即 code: code
            code
          },
          success: (res) => {
            console.log(res)
            // 3.取出token
            const token = res.data.token
            // 4.存储到全局变量中,注意这里要用箭头函数
            // 否则this指向会变成undefined
            this.globalData.token = token
            // 5.存储到storage中，这是异步的
            wx.setStorage({
              key: TOKEN,
              data: token,
              success: function (res) {
                console.log(res)
              }
            })
          }
        })
      }
    })
  }
})