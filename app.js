const TOKEN = 'token'
App({
  globalData: {
    workList: [
      { id: 0, img: "https://picsum.photos/360/520?random=1", title: "黑镜", info: "该剧第一季于2011年12月播出，第二季于2013年2月13日播出，圣诞特辑于2014年12月6日在英国首播。第三季于2016年10月21日开播", num: "667" },
      { id: 1, img: "https://picsum.photos/360/360?random=1", title: "咖啡生活", info: "《咖啡生活》是2004年 中国妇女出版社出版的图书，作者是柯明川", num: "998" },
      { id: 2, img: "https://picsum.photos/360/540?random=1", title: "舒适", info: "上海沦陷后，舒适参加了青鸟剧社，曾演出话剧《雷雨》《日出》、《不夜城》及《大雷雨》等。正式演出时，借用父亲的笔名“舒适”", num: "667" },
      { id: 3, img: "https://picsum.photos/360/400?random=1", title: "城市", info: "城市也叫城市聚落，一般包括了住宅区、工业区和商业区并且具备行政管辖功能。城市的行政管辖功能可能涉及较其本身更广泛的区域，其中有居民区、街道、医院、学校、公共绿地、写字楼、商业卖场、广场、公园等公共设施", num: "4667" },
      { id: 4, img: "https://picsum.photos/360/540?random=1", title: "大选", info: "一些国家在总统或内阁选举年竞选总统、国会议员的活动", num: "1122" },
      { id: 5, img: "https://picsum.photos/360/420?random=1", title: "奋斗", info: "该剧已于2007年5月16日在上海电视剧频道首播", num: "77" },
      { id: 6, img: "https://picsum.photos/360/500?random=1", title: "三字经", info: "人之初，性本善。性相近，习相远", num: "9" },
      { id: 7, img: "https://picsum.photos/360/400?random=1", title: "无厘头", info: "无厘头，原是广东广州等地的一句俗话", num: "12" },
      { id: 8, img: "https://picsum.photos/360/400?random=1", title: "诗与远方", info: "《诗与远方》为黑岩阅读网签约作者“笑笑苏”原创作品，首发、独家签约于黑岩阅读网", num: "10667" },
      { id: 9, img: "https://picsum.photos/360/530?random=1", title: "夕阳西下", info: "元·马致远《天净沙·秋思》：“夕阳西下，断肠人在天涯", num: "42" },
      { id: 10, img: "https://picsum.photos/360/600?random=1", title: "断肠人", info: "断肠人是电视剧《终极一班》中的人物", num: "860" },
      { id: 11, img: "https://picsum.photos/360/450?random=1", title: "新农村", info: "中国新农村就是建设改善农民衣食住行，主要包括基础设施建设，比如通电，自来水，通车的宽敞的马路，大又舒适的住宅楼等，其他就是农民的生活保障机制，全民纳入社保实现城乡一体化等", num: "1860" },
    ],
    detailList: [
      { id: 0, icon: "https://picsum.photos/30/30?random=1", name: "轻舞飞扬", title: "生活需要一杯美好", info: "该剧第一季于2011年12月播出，第二季于2013年2月13日播出，圣诞特辑于2014年12月6日在英国首播。第三季于2016年10月21日开播", dlNum: "667", loveNum: 65, shareNum: 119 },
      { id: 1, icon: "https://picsum.photos/30/30?random=1", name: "指尖萦绕", title: "除了苟且还有远方", info: "《咖啡生活》是2004年 中国妇女出版社出版的图书，作者是柯明川", dlNum: "998", loveNum: 165, shareNum: 2119 },
      { id: 2, icon: "https://picsum.photos/30/30?random=1", name: "宝宝情已伤", title: "岂因祸福避趋之", info: "上海沦陷后，舒适参加了青鸟剧社，曾演出话剧《雷雨》《日出》、《不夜城》及《大雷雨》等。正式演出时，借用父亲的笔名“舒适”", num: "667", loveNum: 365, shareNum: 3119 },
      { id: 3, icon: "https://picsum.photos/30/30?random=1", name: "找寻飞翔翅膀", title: "社会主义核心价值观", info: "城市也叫城市聚落，一般包括了住宅区、工业区和商业区并且具备行政管辖功能。城市的行政管辖功能可能涉及较其本身更广泛的区域，其中有居民区、街道、医院、学校、公共绿地、写字楼、商业卖场、广场、公园等公共设施", num: "4667", loveNum: 465, shareNum: 1419 },
      { id: 4, icon: "https://picsum.photos/30/30?random=1", name: "老秦人", title: "在沉默中爆发", info: "一些国家在总统或内阁选举年竞选总统、国会议员的活动", num: "1122", loveNum: 655, shareNum: 1519 },
      { id: 5, icon: "https://picsum.photos/30/30?random=1", name: "铁拐李", title: "生活需要仪式感", info: "该剧已于2007年5月16日在上海电视剧频道首播", num: "77", loveNum: 665, shareNum: 1169 },
      { id: 6, icon: "https://picsum.photos/30/30?random=1", name: "花开不败", title: "浅谈早恋危害", info: "人之初，性本善。性相近，习相远", num: "9", loveNum: 675, shareNum: 117 },
      { id: 7, icon: "https://picsum.photos/30/30?random=1", name: "庄小骗", title: "一帆风顺", info: "无厘头，原是广东广州等地的一句俗话", num: "12", loveNum: 68, shareNum: 1189 },
      { id: 8, icon: "https://picsum.photos/30/30?random=1", name: "太阳花", title: "得过且过", info: "《诗与远方》为黑岩阅读网签约作者“笑笑苏”原创作品，首发、独家签约于黑岩阅读网", num: "10667", loveNum: 695, shareNum: 1199 },
      { id: 9, icon: "https://picsum.photos/30/30?random=1", name: "upupup", title: "香港废青", info: "元·马致远《天净沙·秋思》：“夕阳西下，断肠人在天涯", num: "42", loveNum: 650, shareNum: 1109 },
      { id: 10, icon: "https://picsum.photos/30/30?random=1", name: "挥拳而立", title: "一米阳光", info: "断肠人是电视剧《终极一班》中的人物", num: "860", loveNum: 165, shareNum: 1119 },
      { id: 11, icon: "https://picsum.photos/30/30?random=1", name: "新人类", title: "午夜惊魂", info: "中国新农村就是建设改善农民衣食住行，主要包括基础设施建设，比如通电，自来水，通车的宽敞的马路，大又舒适的住宅楼等，其他就是农民的生活保障机制，全民纳入社保实现城乡一体化等", num: "1860", loveNum: 625, shareNum: 1192 },
    ],
    userInfo: ''
  },
  // 小程序启动之后 触发
  onLaunch: function () {
    wx.getUserInfo({
      success: (res) => {
        this.globalData.userInfo = res.userInfo
      }
    })
  }
})