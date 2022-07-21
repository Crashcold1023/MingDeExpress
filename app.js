// app.js
App({
    onLaunch() {
        // 展示本地存储能力
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
                // console.log(res)

            }
        })
    },
    globalData: {
        // userInfo: null
        orderState: [{
                state: 0,
                message: "待处理"
            },
            {
                state: 1,
                message: "待入仓"
            },
            {
                state: 2,
                message: "待拣货"
            },
            {
                state: 3,
                message: "待打包",
                ifPayment: false
            },
            {
                state: 4,
                message: "待出仓",
                ifPayment: true
            },
            {
                state: 5,
                message: "已出仓",
                ifPayment: true,
                ifFinish: true
            }
        ],
        goods: [{
                id: 0,
                name: '电子产品'
            },
            {
                id: 1,
                name: '液体粉末'
            },
            {
                id: 2,
                name: '内地EMS'
            },
            {
                id: 3,
                name: '广东EMS'
            },
            {
                id: 4,
                name: '普通货物'
            },
        ],
    }
})