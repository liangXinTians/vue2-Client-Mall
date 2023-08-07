let Mock = require("mockjs")
const Random = require('mockjs').Random;

/**获取用户信息 */
export let getUserInfo = Mock.mock(/\/user\/info/, "get", {
  'resultCode': 200,
  'message': "请求成功",
  "data": {
    "nickName": "火花",
    "loginName": "spark",
    "introduceSign": "万物之中，希望最美"
  }
})

const loginData = function (req) {
  const { loginName } = JSON.parse(req.body)
  if (loginName == 'spark') {
    return {
      resultCode: 200,
      data: {
        uid: Random.id(),
        type: 1,
        username: loginName,
        expire_in: "63666",
        token: Random.guid(),
        logintime: Random.now()
      }
    }
  } else {
    return {
      resultCode: 0,
      message: "登录失败",
      data: {
        type: 1,
        username: loginName,
        expire_in: "63666",
        logintime: Random.now()
      }
    }
  }
}
/**登录 */
export let postLogin = Mock.mock(/\/user\/login/, "post", loginData)


/**用户注册 */
export let postRegister = Mock.mock(/\/user\/register/, "post", {
  'resultCode': 200,
  'message': "成功",
  "data": {
    "nickName": "火花",
    "loginName": "spark",
    "introduceSign": "万物之中，希望最美"
  }
})

/**首页列表 */
export let getIndexInfos = Mock.mock(/\/index-infos/, "get", {
  'resultCode': 200,
  'message': "成功",
  "data": {
    "carousels": [
      {
        "carouselUrl": 'https://m15.360buyimg.com/mobilecms/jfs/t1/141687/14/6020/146609/5f3e6b52Eb6e02c32/eab526890d501f9f.jpg!cr_1125x449_0_166!q70.jpg',
        "redirectUrl": 'https://item.m.jd.com/product/31855398757.html?extension_id=eyJhZCI6IiIsImNoIjoiIiwic2hvcCI6IiIsInNrdSI6IiIsInRzIjoiIiwidW5pcWlkIjoie1wiY2xpY2tfaWRcIjpcImU3OGZhNjRkLTcwZDctNDAzYi05YTE5LWVmOGU2N2JjMDcxM1wiLFwibWF0ZXJpYWxfaWRcIjpcIjI4MTY2NjM5MzBcIixcInBvc19pZFwiOlwiMzYyM1wiLFwic2lkXCI6XCIyZjJmZGYxNC1hZjk5LTQ2MDUtYjAzYS1mNDVmMGQ2YTg0NDdcIn0ifQ==&jd_pop=e78fa64d-70d7-403b-9a19-ef8e67bc0713&abt=2'
      },
      {
        "carouselUrl": 'https://m15.360buyimg.com/mobilecms/jfs/t1/210622/18/18521/161787/621f2ab1Ebca74cc1/1f7c5092f873b1e2.jpg!cr_1053x420_4_0!q70.jpg',
        "redirectUrl": 'https://prodev.m.jd.com/mall/active/d5Feagnrab4Lr4pH2cAtutn6NsM/index.html?__jda=76161171.15906825197121312539969.1590682520.1646216200.1646233520.98'
      },
      {
        "carouselUrl": 'https://m15.360buyimg.com/mobilecms/jfs/t1/141687/14/6020/146609/5f3e6b52Eb6e02c32/eab526890d501f9f.jpg!cr_1125x449_0_166!q70.jpg',
        "redirectUrl": 'https://item.m.jd.com/product/31855398757.html?extension_id=eyJhZCI6IiIsImNoIjoiIiwic2hvcCI6IiIsInNrdSI6IiIsInRzIjoiIiwidW5pcWlkIjoie1wiY2xpY2tfaWRcIjpcImU3OGZhNjRkLTcwZDctNDAzYi05YTE5LWVmOGU2N2JjMDcxM1wiLFwibWF0ZXJpYWxfaWRcIjpcIjI4MTY2NjM5MzBcIixcInBvc19pZFwiOlwiMzYyM1wiLFwic2lkXCI6XCIyZjJmZGYxNC1hZjk5LTQ2MDUtYjAzYS1mNDVmMGQ2YTg0NDdcIn0ifQ==&jd_pop=e78fa64d-70d7-403b-9a19-ef8e67bc0713&abt=2'
      },
      {
        "carouselUrl": 'https://m15.360buyimg.com/mobilecms/jfs/t1/210622/18/18521/161787/621f2ab1Ebca74cc1/1f7c5092f873b1e2.jpg!cr_1053x420_4_0!q70.jpg',
        "redirectUrl": 'https://prodev.m.jd.com/mall/active/d5Feagnrab4Lr4pH2cAtutn6NsM/index.html?__jda=76161171.15906825197121312539969.1590682520.1646216200.1646233520.98'
      },
    ],
    'categoryList': [
      {
        name: '科院交友',
        imgUrl: '//s.yezgea02.com/1598679532890/jiaoyou.png',
        categoryId: 100001,
      },
      {
        name: '科院家政',
        imgUrl: '//s.yezgea02.com/1598679532890/jiazheng.png',
        categoryId: 100003,
      },
      {
        name: '科院水产',
        imgUrl: '//s.yezgea02.com/1598679734813/shuichan1.png',
        categoryId: 100002,
      },
      {
        name: '科院租车',
        imgUrl: '//s.yezgea02.com/1598679532890/zuche.png',
        categoryId: 100004,
      },
      {
        name: '科院招聘',
        imgUrl: '//s.yezgea02.com/1598679792590/pin.png',
        categoryId: 100005,
      },
      {
        name: '科院二手',
        imgUrl: '//s.yezgea02.com/1598679853415/ershou.png',
        categoryId: 100006,
      },
      {
        name: '科院宠物',
        imgUrl: '//s.yezgea02.com/1598679532890/chongwu.png',
        categoryId: 100007,
      },
      {
        name: '科院外卖',
        imgUrl: '//s.yezgea02.com/1598679905787/wm.png',
        categoryId: 100008,
      },
      {
        name: '科院电器',
        imgUrl: '//s.yezgea02.com/1598680199443/dianqi.png',
        categoryId: 100009,
      },
      {
        name: '科院充值',
        imgUrl: '//s.yezgea02.com/1598680264015/czcz.png',
        categoryId: 1000010,
      },
    ],
    'hots|5': [
      {
        "goodsId|+1": 1000,
        "goodsName": "@cword(7)",
        "goodsIntro": "@cword(20)",
        "sellingPrice|+15": 10,
        "goodsCoverImg": 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/200656/34/16169/96305/6194960cEa6447c40/a71ded455f38cf7a.jpg!q70.dpg.webp'
      }
    ],
    'newGoodses|3': [
      {
        "goodsId|+1": 1000,
        "goodsName": "@cword(7)",
        "goodsIntro": "@cword(20)",
        "sellingPrice|+15": 10,
        "goodsCoverImg": 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/200656/34/16169/96305/6194960cEa6447c40/a71ded455f38cf7a.jpg!q70.dpg.webp'
      }
    ],
    'recommends|6': [
      {
        "goodsId|+1": 1000,
        "goodsName": "@cword(7)",
        "goodsIntro": "@cword(20)",
        "sellingPrice|+15": 10,
        "goodsCoverImg": 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/200656/34/16169/96305/6194960cEa6447c40/a71ded455f38cf7a.jpg!q70.dpg.webp'
      }
    ],
  }
})
/**分类列表 */
export let getcategories = Mock.mock(/\/categories/, "get", {
  'resultCode': 200,
  'message': "成功",
  "data|10": [
    {
      "categoryId|+1": 100,
      "categoryName": "家电 数码 手机",
      "categoryLevel": 1,
      "secondLevelCategoryVOS|5": [
        {
          "categoryId|+1": 1000,
          "categoryName": "@cword(4)",
          "categoryLevel": 2,
          "thirdLevelCategoryVOS|6": [
            {
              "categoryId|+1": 2000,
              "categoryName": "@cword(4)",
              "categoryLevel": 3
            }
          ]
        }
      ]
    }

  ]
})

/**搜索列表 */
export let getProductList = Mock.mock(/\/search/, "get", {
  'resultCode': 200,
  'message': "成功",
  "data": {
    'list|10': [
      {
        "goodsName": "@cword(7)",
        "goodsIntro": "@cword(20)",
        "sellingPrice|+15": 100,
        "goodsCoverImg": 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/200656/34/16169/96305/6194960cEa6447c40/a71ded455f38cf7a.jpg!q70.dpg.webp'
      }
    ],
  }
})

/**搜索列表 */
export let getProductDetail = Mock.mock(/\/goods\/detail/, "get", {
  'resultCode': 200,
  'message': "成功",
  "data": {
    'goodsCarouselList|3': [
      'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/200656/34/16169/96305/6194960cEa6447c40/a71ded455f38cf7a.jpg!q70.dpg.webp'
    ],
    "goodsName": "@cword(7)",
    "goodsIntro": "@cword(20)",
    "sellingPrice|+15": 100,
    "goodsDetailContent": "<table><tbody><tr><th colspan=\"2\">主体参数</th></tr><tr><td>型号</td><td>WPD 40 ROA2</td></tr><tr><td>膜品牌</td><td>陶氏</td></tr><tr><td>国产/进口</td><td>国产</td></tr><tr><th colspan=\"2\">功能参数</th></tr><tr><td>安装方式</td><td>免安装</td></tr><tr><td>水压范围（Mpa）</td><td>0.1~0.4Mpa</td></tr><tr><td>水质要求</td><td>市政自来水</td></tr><tr><td>温度范围（℃）</td><td>5~38℃</td></tr><tr><td>用途(用水范围）</td><td>可直饮；饮用水</td></tr><tr><td>过滤原理</td><td>反渗透</td></tr><tr><td>滤芯级数</td><td>5级</td></tr><tr><td>额定净水量</td><td>2000L</td></tr><tr><td>出水温度</td><td>热水</td></tr><tr><td>流量</td><td>1L/分</td></tr><tr><td>膜规格</td><td>50加仑</td></tr><tr><td>是否有压力桶</td><td>没有压力桶</td></tr><tr><td>回收率/废水比</td><td>3:1</td></tr></tbody></table>"
  }
})


/**加入购物车 */
export let shopcart = Mock.mock(/\/shop-cart/, "post", {
  'resultCode': 200,
  'message': "成功",
  "data": {
    "introduceSign": "万物之中，希望最美"
  }
})

//获取购物车信息
export let getshopcart = Mock.mock(/\/shop-cart/, "get", {
  'resultCode': 200,
  'message': "成功",
  "data": [{
    "cartItemId|+1": 1000,
    "goodsCoverImg": 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/200656/34/16169/96305/6194960cEa6447c40/a71ded455f38cf7a.jpg!q70.dpg.webp',
    "goodsName": "@cword(7)",
    "goodsCount": 1,
    "sellingPrice|+15": 200,
  }, {
    "cartItemId|+1": 2000,
    "goodsCoverImg": 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/117401/30/22434/427651/6215a492E53723027/f4419c6b4d487b34.jpg!q70.dpg.webp',
    "goodsName": "@cword(7)",
    "goodsCount": 1,
    "sellingPrice|+15": 100,
  }]
})

//修改购物车信息，这里直接返回一个空状态即可
export let settle = Mock.mock(/\/shop-cart\/settle/, "get", {
  'resultCode': 200,
  'message': "成功",
  'data': [{
    "cartItemId|+1": 1000,
    "goodsCoverImg": 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/200656/34/16169/96305/6194960cEa6447c40/a71ded455f38cf7a.jpg!q70.dpg.webp',
    "goodsName": "@cword(7)",
    "goodsCount": 1,
    "sellingPrice|+15": 200,
  }, {
    "cartItemId|+1": 2000,
    "goodsCoverImg": 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/117401/30/22434/427651/6215a492E53723027/f4419c6b4d487b34.jpg!q70.dpg.webp',
    "goodsName": "@cword(7)",
    "goodsCount": 1,
    "sellingPrice|+15": 100,
  }]
})



/**获取默认地址 */
export let getAddressDetail = Mock.mock(/\/address\/detail/, "get", {
  'resultCode': 200,
  'message': "成功",
  "data": {
    "userName": "火花",
    "userPhone": 18790769897,
    "provinceName": "河南",
    "cityName": "滑县",
    "regionName": "赵营乡",
    "detailAddress": "杨庄村125号"
  }
})

/**获取地址列表 */
export let getAddressList = Mock.mock(/\/address/, "get", {
  'resultCode': 200,
  'message': "成功",
  "data": [
    {
      "userName": "火花",
      "userPhone": 18790769897,
      "provinceName": "河南",
      "cityName": "滑县",
      "regionName": "赵营乡",
      "detailAddress": "杨庄村125号"
    },
    {
      "userName": "星空",
      "userPhone": 15517231173,
      "provinceName": "河北",
      "cityName": "廊坊",
      "regionName": "高新区",
      "detailAddress": "青年小区127号"
    },
  ]
})

Mock.mock(/\/address/, "post", {
  'resultCode': 200,
  'message': "成功",
  'data': {}
})

Mock.mock(/\/address/, "put", {
  'resultCode': 200,
  'message': "成功",
  'data': {}
})
Mock.mock(/\/address/, "delete", {
  'resultCode': 200,
  'message': "成功",
  'data': {}
})

Mock.mock(/\/order/, "get", {
  'resultCode': 200,
  'message': "成功",
  'data': {
    "totalPage": 2,
    "list": [
    {
      "createTime": "2022.03.03 13:30:22",
      "orderStatusString": "运输中",
      "louMallOrderItemVOS": {
        "one": {
          "orderId": "15754124678",
          "goodsCount": 1,
          "sellingPrice": 345,
          "goodsName": "移动硬盘",
          "goodsCoverImg": "https://img14.360buyimg.com/n2/s270x270_jfs/t1/102904/5/23659/122791/62132408E59d1aad9/82997499215a92a6.jpg!q70.webp"
        }
      }
    },
    {
      "createTime": "2022.03.04 09:05:22",
      "orderStatusString": "已发货",
      "louMallOrderItemVOS": {
        "one": {
          "orderId": "15754124678",
          "goodsCount": 1,
          "sellingPrice": 120,
          "goodsName": "充电宝",
          "goodsCoverImg": "https://img14.360buyimg.com/n2/s270x270_jfs/t1/102904/5/23659/122791/62132408E59d1aad9/82997499215a92a6.jpg!q70.webp"
        }
      }
    }
  ]
}
})