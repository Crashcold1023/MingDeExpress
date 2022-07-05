// pages/my/my.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderstatus: [
            {
            "imageURL": "/assets/icon/待付款.png",
            "title": "待付款"
            }, 
            {
            "imageURL": "/assets/icon/待收货.png",
            "title": "待收货"
            }, 
            {
            "imageURL": "/assets/icon/待发货.png",
            "title": "待发货"
            }, 
            {
            "imageURL": "/assets/icon/待评价 2.0.png",
            "title": "待评价"
            }, 
    ],
    orderinfo:[
        {
            "title":"我的地址",
            // "jiantou":">"
        },
        {
            "title":"我的优惠券",
            // "jiantou":">"
        },
        {
            "title":"活动中心",
            // "jiantou":">"
        },
        {
            "title":"客服中心",
            "jiantou":">"
        },
        {
            "title":"转运流程",
            // "jiantou":">"
        },
        {
            "title":"转运须知",
            // "jiantou":">"
        },
        {
            "title":"关于我们",
            // "jiantou":">"
        },
    ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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