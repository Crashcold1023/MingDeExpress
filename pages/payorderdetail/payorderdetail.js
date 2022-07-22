// pages/payorderdetail/payorderdetail.js
let {
    getorderId,
    gotoinsured
} = require('../../api/order.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        show: false,
        show1: false,
        id: '',
        detaildList: {},
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
            }
        ],
        nonceStr: '',
        package: '',
        paySign: '',
        signType: '',
        timeStamp: '',
    },
    onClose() {
        this.setData({
            show: true
        });
    },
    onClose1() {
        this.setData({
            show1: true
        });
    },
    fee() {
        this.setData({
            show: false
        });
    },
    fee1() {
        this.setData({
            show1: false
        });
    },
    close() {
        this.setData({
            show1: false
        });
    },
    async onClickButton() {
        let result = await gotoinsured(this.data.id)
        console.log(result);
        this.setData({
            nonceStr: result.data.nonceStr,
            package: result.data.package,
            paySign: result.data.paySign,
            signType: result.data.signType,
            timeStamp: result.data.timeStamp,
        })
        wx.requestPayment({
            nonceStr: result.data.nonceStr,
            package: result.data.package,
            paySign: result.data.paySign,
            signType: result.data.signType,
            timeStamp: result.data.timeStamp,
            success(res) {
                console.log(res,'支付成功');
            },
            fail(res) {}
        })
        // wx.navigateTo({
        //     url: '/pages/paysucces/paysucces',
        // })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        console.log(options.id, 'ididi');
        let id = options.id
        this.setData({
            id: options.id
        })
        let result = await getorderId(id)
        console.log(result);
        this.setData({
            detaildList: result.data
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})