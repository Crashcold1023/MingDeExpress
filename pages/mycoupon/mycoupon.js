const app = getApp()

Page({
    data: {
        height: app.globalData.height,
        nvabarData: {
            showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
            title: '我的优惠券', //导航栏 中间的标题
        },
        currentData: 0,
        coupon: [{
                price: 4200,
                unit: '元',
                describe: '满600元可用',
                name: '新品优惠券',
                date: '2018.10.20-2020.09.0',
                apply: '适用范围：所有产品可用'
            },
            {
                price: 4200,
                unit: '元',
                describe: '满600元可用',
                name: '新品优惠券',
                date: '2018.10.20-2020.09.0',
                apply: '适用范围：所有产品可用'
            },
            {
                price: '兑换券',
                describe: '无门槛',
                name: '新品优惠券',
                date: '2018.10.20-2020.09.0',
                apply: '适用范围：所有产品可用'
            },
        ],
        coupon_invalid: [{
                price: 4200,
                unit: '元',
                describe: '满600元可用',
                name: '新品优惠券',
                date: '2018.10.20-2020.09.09',
                apply: '适用范围：所有产品可用',
                invalid: 1
            },
            {
                price: 4200,
                unit: '元',
                describe: '满600元可用',
                name: '新品优惠券',
                date: '2018.10.20-2020.09.09',
                apply: '适用范围：所有产品可用',
                invalid: 2
            },
        ],
    },
    onLoad: function () {
        
    },
    //获取当前滑块的index
    bindchange: function (e) {
        const that = this;
        that.setData({
            currentData: e.detail.current
        })
    },
    //点击切换，滑块index赋值
    checkCurrent: function (e) {
        const that = this;

        if (that.data.currentData === e.target.dataset.current) {
            return false;
        } else {

            that.setData({
                currentData: e.target.dataset.current
            })
        }
    }
})