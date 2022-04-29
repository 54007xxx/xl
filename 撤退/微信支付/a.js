let a = {
    "pages": [
        {
          path: 'pages/index/index',
          style: {
            navigationBarTitleText: '示范区疫情防控',
            backgroundColor: '#fff',
            navigationStyle: 'default'
          }
        },
        {
          path: 'pages/siteRegister/siteRegister',
          style: { navigationBarTitleText: '龙康码' }
        },
        {
          path: 'pages/siteRegisterCode/siteRegisterCode',
          style: { navigationBarTitleText: '场所到访人信息登记码' }
        },
        {
          path: 'pages/codeScan/codeRecord',
          style: { navigationBarTitleText: '扫码登记记录' }
        },
        {
          path: 'pages/notice/detail/detail',
          style: { navigationBarTitleText: '公告详情' }
        },
        {
          path: 'pages/reportInfoBack/reportInfoBack',
          style: { navigationBarTitleText: '返濮上报', enablePullDownRefresh: false }
        },
        {
          path: 'pages/reportInfoBack/reportInfoNewBack',
          style: { navigationBarTitleText: '返濮上报', enablePullDownRefresh: false }
        },
        {
          path: 'pages/reportInfoDetail/reportInfoDetail',
          style: { navigationBarTitleText: '防疫登记上报', enablePullDownRefresh: false }
        },
        {
          path: 'pages/reportInfoDetail/reportInfoNewDetail',
          style: { navigationBarTitleText: '防疫登记上报', enablePullDownRefresh: false }
        },
        {
          path: 'pages/reportInfoDetail/login',
          style: { navigationBarTitleText: '防疫管理', enablePullDownRefresh: false }
        },
        {
          path: 'pages/fullReport/newstart',
          style: { navigationBarTitleText: '全员登记', enablePullDownRefresh: false }
        },
        {
          path: 'pages/fullReport/newend',
          style: { navigationBarTitleText: '全员登记', enablePullDownRefresh: false }
        },
        {
          path: 'pages/fullReport/newadd',
          style: { navigationBarTitleText: '全员登记', enablePullDownRefresh: false }
        },
        {
          path: 'pages/fullReport/newEdit',
          style: { navigationBarTitleText: '全员登记', enablePullDownRefresh: false }
        },
        {
          path: 'pages/reportInfoDetail/dragonCode',
          style: { navigationBarTitleText: '防疫登记上报', enablePullDownRefresh: false }
        },
        {
          path: 'pages/reportInfoDetail/end',
          style: { navigationBarTitleText: '防疫登记上报', enablePullDownRefresh: false }
        },
        {
          path: 'pages/reportInfoDetail/newqrcode',
          style: { navigationBarTitleText: '龙康码', enablePullDownRefresh: false }
        },
        {
          path: 'pages/reportInfoDetail/qrcode',
          style: { navigationBarTitleText: '龙康码', enablePullDownRefresh: false }
        },
        {
          path: 'pages/reportInfoDetail/qrcodeEnd',
          style: { navigationBarTitleText: '龙康码', enablePullDownRefresh: false }
        },
        {
          path: 'pages/reportInfoDetail/editperson',
          style: { navigationBarTitleText: '防疫登记上报', enablePullDownRefresh: false }
        },
        {
          path: 'pages/reportInfoDetail/end1',
          style: { navigationBarTitleText: '返濮上报', enablePullDownRefresh: false }
        },
        {
          path: 'pages/reportInfoDetail/start',
          style: { navigationBarTitleText: '防疫登记上报', enablePullDownRefresh: false }
        },
        {
          path: 'pages/reportInfoDetail/start1',
          style: { navigationBarTitleText: '返濮上报', enablePullDownRefresh: false }
        },
        { path: 'pages/repairList/detail/detail', style: {} },
        {
          path: 'pages/my/myHouseDetail',
          style: { navigationBarTitleText: '我的房屋明细' }
        },
        {
          path: 'pages/agreement/service',
          style: { navigationBarTitleText: '隐私策略' }
        },
        {
          path: 'pages/activitesDetail/activitesDetail',
          style: { navigationBarTitleText: '详情' }
        },
        {
          path: 'pages/activitesDetail/phone',
          style: { navigationBarTitleText: '详情' }
        },
        {
          path: 'pages/roomFeeListNew/roomFeeListWeb',
          style: { navigationBarTitleText: '物业费' }
        },
        {
          path: 'pages/register/registerSms',
          style: { navigationBarTitleText: '绑定业主' }
        },
        {
          path: 'pages/myRenovation/myRoomRenovationList',
          style: { navigationBarTitleText: '装修记录', enablePullDownRefresh: false }
        },
        {
          path: 'pages/myRenovation/myRoomRenovationDetail',
          style: { navigationBarTitleText: '装修详情', enablePullDownRefresh: false }
        },
        {
          path: 'pages/myApplyRoom/myApplyRoomList',
          style: { navigationBarTitleText: '空置房申请记录', enablePullDownRefresh: false }
        },
        {
          path: 'pages/myApplyRoom/myApplyRoomDetail',
          style: { navigationBarTitleText: '空置房申请详情', enablePullDownRefresh: false }
        },
        {
          path: 'pages/myApplyRoom/myApplyRoomRecord',
          style: { navigationBarTitleText: '跟踪记录', enablePullDownRefresh: false }
        },
        {
          path: 'pages/myApplyRoom/myApplyRoomRecordDetail',
          style: { navigationBarTitleText: '跟踪记录详情', enablePullDownRefresh: false }
        },
        {
          path: 'pages/myAccount/myAccountDetail',
          style: { navigationBarTitleText: '账户明细', enablePullDownRefresh: false }
        },
        {
          path: 'pages/my/myMenu',
          style: { navigationBarTitleText: '我', enablePullDownRefresh: false }
        },
        {
          path: 'pages/roomFee/ownerCoupon',
          style: { navigationBarTitleText: '优惠卷', enablePullDownRefresh: false }
        }
      ],
    // "tabBar": {
    // 	"color": "#272636",
    // 	"selectedColor": "#4A90E2",
    // 	"backgroundColor": "#fff",
    // 	"borderStyle": "black",
    // 	"list": [{
    // 			"pagePath": "pages/index/index",
    // 			"text": "首页",
    // 			"iconPath": "static/images/home.png",
    // 			"selectedIconPath": "static/images/home-selected.png"
    // 		},
    // 		// #ifdef H5
    // 		// {
    // 		// 	"pagePath": "pages/homemaking/homemaking",
    // 		// 	"text": "家政",
    // 		// 	"iconPath": "static/images/rent.png",
    // 		// 	"selectedIconPath": "static/images/rent-selected.png"
    // 		// },
    // 		// {
    // 		// 	"pagePath": "pages/mall/mall",
    // 		// 	"text": "商圈",
    // 		// 	"iconPath": "static/images/market.png",
    // 		// 	"selectedIconPath": "static/images/market-selected.png"
    // 		// },
    // 		// #endif
    // 		{
    // 			"pagePath": "pages/my/my",
    // 			"text": "我的",
    // 			"iconPath": "static/images/my.png",
    // 			"selectedIconPath": "static/images/mySelected.png"
    // 		}
    // 	]
    // },
    "networkTimeout": {
        "request": 10000
    },
    "permission": {
        "scope.userLocation": {
            "desc": "你的位置信息将用于小程序位置接口的效果展示"
        }
    },
    "globalStyle": {
        "navigationStyle": "default",
        "navigationBarTextStyle": "white",
        "navigationBarBackgroundColor": "#0056EC",
        "navigationBarTitleText": "数字社区家园",
        "usingComponents": { //这里为方便，全局引入了所有组件，也可以在某个page下单独引用某个组件
        },
        "onReachBottonDistance": 50
    },
    "condition": { //模式配置，仅开发期间生效
        "current": 0, //当前激活的模式(list 的索引项)
        "list": [{
            "name": "", //模式名称
            "path": "", //启动页面，必选
            "query": "" //启动参数，在页面的onLoad函数里面得到
        }]
    },
    "subPackages": []
}

module.exports = a.pages;
