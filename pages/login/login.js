// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNum: "",
    captcha: "",
    phoneNumTips: "",
    captchaTips: "",
    isHiddenPhoneNumTips: false,
    isHiddencaptchaTips: false,
    getCaptchaText: "获取验证",
    isAbleCaptchaClick: false,
  },
  // 手机号输入回调
  inputPhoneNum(event) {
    this.data.phoneNum = event.detail.value
    this.testPhoneNum(this.data.phoneNum)
  },
  // 验证手机号格式
  testPhoneNum(num) {
    if (num.length != 11) {
      this.setData({ isHiddenPhoneNumTips: false })
      this.setData({ phoneNumTips: "！手机号必须为11位" })
    } else if (!/^1[0-9]{10}$/.test(num)) {
      this.setData({ isHiddenPhoneNumTips: false })
      this.setData({ phoneNumTips: "！手机号不正确" })
    } else {
      this.setData({ isHiddenPhoneNumTips: true })
      this.setData({ phoneNumTips: "" })
    }
  },
  // 验证验输入回调
  inputCaptcha(event) {
    this.data.captcha = event.detail.value;
    this.testCaptcha(this.data.captcha);
  },
  // 验证验证码格式
  testCaptcha(captcha) {
    if (captcha.length != 6) {
      this.setData({ isHiddencaptchaTips: false })
      this.setData({ captchaTips: "！验证码必须为6位" })
    } else {
      this.setData({ isHiddencaptchaTips: true })
      this.setData({ captchaTips: "" })
    }
  },
  // 获取验证码
  getCaptchaClick() {
    wx.showToast({
      title: "已发送验证码",
      icon: 'success',
      success: () => {
        let num = 60;
        this.setData({ isAbleCaptchaClick: true })
        this.setData({ getCaptchaText: num })
        const timer = setInterval(() => {
          num--
          this.setData({ getCaptchaText: num })
        }, 1000)
        setTimeout(() => {
          this.setData({ isAbleCaptchaClick: false })
          clearInterval(timer)
        }, 60000)
      }
    })
  },
  // 登录
  loginClick() {
    this.testPhoneNum(this.data.phoneNum)
    this.testCaptcha(this.data.captcha)
    if (this.data.isHiddencaptchaTips && this.data.isHiddenPhoneNumTips) {
      wx.navigateTo({
        url: '/pages/home/home',
      })
    }
  }
})