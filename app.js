const TOKEN = 'token'
App({
  globalData: {
    workList: [
      { id: 0, img: "https://picsum.photos/360/520?random=0", title: "黑镜", info: "该剧第一季于2011年12月播出，第二季于2013年2月13日播出，圣诞特辑于2014年12月6日在英国首播。第三季于2016年10月21日开播", num: "667" },
      { id: 1, img: "https://picsum.photos/360/360?random=1", title: "咖啡生活", info: "《咖啡生活》是2004年 中国妇女出版社出版的图书，作者是柯明川", num: "998" },
      { id: 2, img: "https://picsum.photos/360/540?random=2", title: "舒适", info: "上海沦陷后，舒适参加了青鸟剧社，曾演出话剧《雷雨》《日出》、《不夜城》及《大雷雨》等。正式演出时，借用父亲的笔名“舒适”", num: "667" },
      { id: 3, img: "https://picsum.photos/360/400?random=3", title: "城市", info: "城市也叫城市聚落，一般包括了住宅区、工业区和商业区并且具备行政管辖功能。城市的行政管辖功能可能涉及较其本身更广泛的区域，其中有居民区、街道、医院、学校、公共绿地、写字楼、商业卖场、广场、公园等公共设施", num: "4667" },
      { id: 4, img: "https://picsum.photos/360/540?random=4", title: "大选", info: "一些国家在总统或内阁选举年竞选总统、国会议员的活动", num: "1122" },
      { id: 5, img: "https://picsum.photos/360/420?random=5", title: "奋斗", info: "该剧已于2007年5月16日在上海电视剧频道首播", num: "77" },
      { id: 6, img: "https://picsum.photos/360/500?random=6", title: "三字经", info: "人之初，性本善。性相近，习相远", num: "9" },
      { id: 7, img: "https://picsum.photos/360/400?random=7", title: "无厘头", info: "无厘头，原是广东广州等地的一句俗话", num: "12" },
      { id: 8, img: "https://picsum.photos/360/400?random=8", title: "诗与远方", info: "《诗与远方》为黑岩阅读网签约作者“笑笑苏”原创作品，首发、独家签约于黑岩阅读网", num: "10667" },
      { id: 9, img: "https://picsum.photos/360/530?random=9", title: "夕阳西下", info: "元·马致远《天净沙·秋思》：“夕阳西下，断肠人在天涯", num: "42" },
      { id: 10, img: "https://picsum.photos/360/600?random=0", title: "断肠人", info: "断肠人是电视剧《终极一班》中的人物", num: "860" },
      { id: 11, img: "https://picsum.photos/360/450?random=11", title: "新农村", info: "中国新农村就是建设改善农民衣食住行，主要包括基础设施建设，比如通电，自来水，通车的宽敞的马路，大又舒适的住宅楼等，其他就是农民的生活保障机制，全民纳入社保实现城乡一体化等", num: "1860" },
    ],
    detailList: [
      { id: 0, icon: "https://picsum.photos/60/60?random=1", name: "轻舞飞扬", title: "生活需要一杯美好", info: "该剧第一季于2011年12月播出，第二季于2013年2月13日播出，圣诞特辑于2014年12月6日在英国首播。第三季于2016年10月21日开播", dlNum: "667", loveNum: 65, shareNum: 119 },
      { id: 1, icon: "https://picsum.photos/60/60?random=2", name: "指尖萦绕", title: "除了苟且还有远方", info: "《咖啡生活》是2004年 中国妇女出版社出版的图书，作者是柯明川", dlNum: "998", loveNum: 165, shareNum: 2119 },
      { id: 2, icon: "https://picsum.photos/60/60?random=3", name: "宝宝情已伤", title: "岂因祸福避趋之", info: "上海沦陷后，舒适参加了青鸟剧社，曾演出话剧《雷雨》《日出》、《不夜城》及《大雷雨》等。正式演出时，借用父亲的笔名“舒适”", dlnum: "667", loveNum: 365, shareNum: 3119 },
      { id: 3, icon: "https://picsum.photos/60/60?random=4", name: "找寻飞翔翅膀", title: "社会主义核心价值观", info: "城市也叫城市聚落，一般包括了住宅区、工业区和商业区并且具备行政管辖功能。城市的行政管辖功能可能涉及较其本身更广泛的区域，其中有居民区、街道、医院、学校、公共绿地、写字楼、商业卖场、广场、公园等公共设施", num: "4667", loveNum: 465, shareNum: 1419 },
      { id: 4, icon: "https://picsum.photos/60/60?random=5", name: "老秦人", title: "在沉默中爆发", info: "一些国家在总统或内阁选举年竞选总统、国会议员的活动", dlnum: "1122", loveNum: 655, shareNum: 1519 },
      { id: 5, icon: "https://picsum.photos/60/60?random=6", name: "铁拐李", title: "生活需要仪式感", info: "该剧已于2007年5月16日在上海电视剧频道首播", dlnum: "77", loveNum: 665, shareNum: 1169 },
      { id: 6, icon: "https://picsum.photos/60/60?random=7", name: "花开不败", title: "浅谈早恋危害", info: "人之初，性本善。性相近，习相远", dlnum: "9", loveNum: 675, shareNum: 117 },
      { id: 7, icon: "https://picsum.photos/60/60?random=8", name: "庄小骗", title: "一帆风顺", info: "无厘头，原是广东广州等地的一句俗话", dlnum: "12", loveNum: 68, shareNum: 1189 },
      { id: 8, icon: "https://picsum.photos/60/60?random=9", name: "太阳花", title: "得过且过", info: "《诗与远方》为黑岩阅读网签约作者“笑笑苏”原创作品，首发、独家签约于黑岩阅读网", dlnum: "10667", loveNum: 695, shareNum: 1199 },
      { id: 9, icon: "https://picsum.photos/60/60?random=10", name: "upupup", title: "香港废青", info: "元·马致远《天净沙·秋思》：“夕阳西下，断肠人在天涯", dlnum: "42", loveNum: 650, shareNum: 1109 },
      { id: 10, icon: "https://picsum.photos/60/60?random=11", name: "挥拳而立", title: "一米阳光", info: "断肠人是电视剧《终极一班》中的人物", dlnum: "860", loveNum: 165, shareNum: 1119 },
      { id: 11, icon: "https://picsum.photos/60/60?random=12", name: "新人类", title: "午夜惊魂", info: "中国新农村就是建设改善农民衣食住行，主要包括基础设施建设，比如通电，自来水，通车的宽敞的马路，大又舒适的住宅楼等，其他就是农民的生活保障机制，全民纳入社保实现城乡一体化等", dlnum: "1860", loveNum: 625, shareNum: 1192 },
    ],
    mydata: {
      info: {
        icon: "https://picsum.photos/60/60?random=111",
        name: "倾听她的事",
        des: "仰天长啸出门去，吾辈岂是蓬蒿人",
        num_obj: {
          popular_num: 9,
          fans_num: 45,
          focus_num: 780
        },
      },
      album: [
        {
          pid: 0,
          photos: ["https://picsum.photos/360/460?random=1", "https://picsum.photos/360/360?random=1", "https://picsum.photos/360/560?random=1", "https://picsum.photos/460/360?random=1"],
          title: "夜景",
          des: "指夜晚的景色。夜 ：天黑的时间，与“日”或“昼”相对，夜晚；景 ：环境的风光，景色",
        },
        {
          pid: 1,
          photos: ["https://picsum.photos/360/460?random=2", "https://picsum.photos/360/360?random=2", "https://picsum.photos/360/560?random=2", "https://picsum.photos/460/360?random=2"],
          title: "茅台",
          des: "茅台酒是中国的传统特产酒。与苏格兰威士忌、法国科涅克白兰地齐名的世界三大蒸馏名酒之一"
        },
        {
          pid: 2,
          photos: ["https://picsum.photos/360/460?random=3", "https://picsum.photos/360/360?random=3", "https://picsum.photos/360/560?random=3", "https://picsum.photos/460/360?random=3"],
          title: "魁拔",
          des: "TV版完整保留了电影的世界观、人物设定、故事内容和情节主线，但重制了片头曲。《魁拔妖侠传》是魁拔系列电影的前传"
        },
        {
          pid: 3,
          photos: ["https://picsum.photos/360/460?random=4", "https://picsum.photos/360/360?random=4", "https://picsum.photos/360/560?random=4", "https://picsum.photos/460/360?random=4"],
          title: "石佛",
          des: "李昌镐，1975年7月29日出生于韩国，围棋职业棋手，九段"
        },
        {
          pid: 4,
          photos: ["https://picsum.photos/360/460?random=5", "https://picsum.photos/360/360?random=5", "https://picsum.photos/360/560?random=5", "https://picsum.photos/460/360?random=5"],
          title: "雨夜惊魂",
          des: "不知情的她在18岁成人礼那天后，周围发生了各种诡异的事件，离奇的渗水、怪异的歌音、水鬼、鬼神君总是缠绕着她"
        }
      ],
      myfans: [
        { fansid: 0, icon: "https://picsum.photos/60/60?random=301", name: "太酷不给撩", date: "04/20 04:09" },
        { fansid: 1, icon: "https://picsum.photos/60/60?random=302", name: "我是钢铁侠", date: "04/21 04:09" },
        { fansid: 2, icon: "https://picsum.photos/60/60?random=303", name: "野猫梁上走", date: "04/22 04:09" },
        { fansid: 3, icon: "https://picsum.photos/60/60?random=304", name: "魅力本人", date: "04/23 04:09" },
        { fansid: 4, icon: "https://picsum.photos/60/60?random=305", name: "有杀气的萝莉", date: "04/24 04:09" },
        { fansid: 5, icon: "https://picsum.photos/60/60?random=306", name: "气质要硬", date: "04/25 04:09" },
        { fansid: 6, icon: "https://picsum.photos/60/60?random=307", name: "代号戒烟", date: "04/26 04:09" },
        { fansid: 7, icon: "https://picsum.photos/60/60?random=308", name: "晴天", date: "04/27 04:09" },
        { fansid: 8, icon: "https://picsum.photos/60/60?random=309", name: "一笑泯恩仇", date: "04/28 04:09" },
        { fansid: 9, icon: "https://picsum.photos/60/60?random=310", name: "好聚好散", date: "04/19 04:09" },
        { fansid: 10, icon: "https://picsum.photos/60/60?random=311", name: "单雄信", date: "04/10 04:09" }
      ],
      myfocus: [
        { focusid: 0, icon: "https://picsum.photos/60/60?random=401", name: "太酷不给撩", pnum: 123, fnum: 69801 },
        { focusid: 1, icon: "https://picsum.photos/60/60?random=402", name: "我是钢铁侠", pnum: 820, fnum: 6918 },
        { focusid: 2, icon: "https://picsum.photos/60/60?random=403", name: "野猫梁上走", pnum: 830, fnum: 68 },
        { focusid: 3, icon: "https://picsum.photos/60/60?random=404", name: "魅力本人", pnum: 991, fnum: 8 },
        { focusid: 4, icon: "https://picsum.photos/60/60?random=405", name: "有杀气的萝莉", pnum: 1023, fnum: 6981 },
        { focusid: 5, icon: "https://picsum.photos/60/60?random=406", name: "气质要硬", pnum: 666, fnum: 898 },
        { focusid: 6, icon: "https://picsum.photos/60/60?random=407", name: "代号戒烟", pnum: 801, fnum: 701 },
        { focusid: 7, icon: "https://picsum.photos/60/60?random=408", name: "晴天", pnum: 12, fnum: 88 },
        { focusid: 8, icon: "https://picsum.photos/60/60?random=409", name: "一笑泯恩仇", pnum: 7, fnum: 1698 },
        { focusid: 9, icon: "https://picsum.photos/60/60?random=410", name: "好聚好散", pnum: 90, fnum: 322698 },
        { focusid: 10, icon: "https://picsum.photos/60/60?random=411", name: "单雄信", pnum: 1180, fnum: 3334698 }
      ],
    },
    hisdata: {
      info: {
        icon: "https://picsum.photos/60/60?random=112",
        name: "唯以不咏怀",
        des: "找寻飞翔翅膀",
        isfans: false,
        num_obj: {
          popular_num: 19,
          fans_num: 405,
          focus_num: 70
        },
      },
      album: [
        {
          pid: 0,
          photos: ["https://picsum.photos/360/460?random=1", "https://picsum.photos/360/360?random=1", "https://picsum.photos/360/560?random=1", "https://picsum.photos/460/360?random=1"],
          title: "夜景",
          des: "指夜晚的景色。夜 ：天黑的时间，与“日”或“昼”相对，夜晚；景 ：环境的风光，景色",
        },
        {
          pid: 1,
          photos: ["https://picsum.photos/360/460?random=2", "https://picsum.photos/360/360?random=2", "https://picsum.photos/360/560?random=2", "https://picsum.photos/460/360?random=2"],
          title: "茅台",
          des: "茅台酒是中国的传统特产酒。与苏格兰威士忌、法国科涅克白兰地齐名的世界三大蒸馏名酒之一"
        },
        {
          pid: 2,
          photos: ["https://picsum.photos/360/460?random=3", "https://picsum.photos/360/360?random=3", "https://picsum.photos/360/560?random=3", "https://picsum.photos/460/360?random=3"],
          title: "魁拔",
          des: "TV版完整保留了电影的世界观、人物设定、故事内容和情节主线，但重制了片头曲。《魁拔妖侠传》是魁拔系列电影的前传"
        },
        {
          pid: 3,
          photos: ["https://picsum.photos/360/460?random=4", "https://picsum.photos/360/360?random=4", "https://picsum.photos/360/560?random=4", "https://picsum.photos/460/360?random=4"],
          title: "石佛",
          des: "李昌镐，1975年7月29日出生于韩国，围棋职业棋手，九段"
        },
        {
          pid: 4,
          photos: ["https://picsum.photos/360/460?random=5", "https://picsum.photos/360/360?random=5", "https://picsum.photos/360/560?random=5", "https://picsum.photos/460/360?random=5"],
          title: "雨夜惊魂",
          des: "不知情的她在18岁成人礼那天后，周围发生了各种诡异的事件，离奇的渗水、怪异的歌音、水鬼、鬼神君总是缠绕着她"
        }
      ],
    },
    historydl: [
      { hdid: 0, icon: "https://picsum.photos/60/60?random=201", title: "昏暗的阳光", date: "04/21 15:01" },
      { hdid: 1, icon: "https://picsum.photos/60/60?random=202", title: "纸醉金迷", date: "04/21 15:01" },
      { hdid: 2, icon: "https://picsum.photos/60/60?random=203", title: "淡定", date: "04/21 15:01" },
      { hdid: 3, icon: "https://picsum.photos/60/60?random=204", title: "红色高跟鞋", date: "04/21 15:01" },
      { hdid: 4, icon: "https://picsum.photos/60/60?random=205", title: "童话镇", date: "04/21 15:01" },
      { hdid: 5, icon: "https://picsum.photos/60/60?random=206", title: "别董大", date: "04/21 15:01" },
      { hdid: 6, icon: "https://picsum.photos/60/60?random=207", title: "伤仲永", date: "04/21 15:01" },
      { hdid: 7, icon: "https://picsum.photos/60/60?random=208", title: "天下谁人不识君", date: "04/21 15:01" },
      { hdid: 8, icon: "https://picsum.photos/60/60?random=209", title: "黄河之水", date: "04/21 15:01" },
      { hdid: 9, icon: "https://picsum.photos/60/60?random=210", title: "午夜阳光", date: "04/21 15:01" },
      { hdid: 10, icon: "https://picsum.photos/60/60?random=211", title: "魔法师", date: "04/21 15:01" },
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