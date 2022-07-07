// pages/my/my.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        getlunbo: [],
        show: false,
        popup1text1: [
                "普通货物","普通货物","电子产品","特色美食","中国美妆","广东ESM"
        ]
    },
    // 获取萝卜兔数据
    getSwiperList() {
        wx.request({
            url: 'https://www.escook.cn/slides',
            method: 'GET',
            success: (res) => {
                console.log(res)
                this.setData({
                    getlunbo: res.data
                })
            }
        })
    },
    // tomoney: function(event) {
    //     navigator:"/pages/carmoney/carmoney"
    //   },

    // getUserInfo(event) {
    // console.log(event.detail);
    // this.setData({
    //             show: true
    //         });
    // },

    popup1: function (e) {
        console.log(e)
        this.setData({
            colorIndex: e.currentTarget.dataset.index
        });
    },
    // onClose() {
    //     this.setData({
    //         show: false
    //     });
    // },

    showPopup: function () {
        this.setData({
            show: true
        });
    },
    // onClose() {
    //     this.setData({
    //         show: false
    //     });
    // },
    toaddress() {
        wx.navigateTo({
            url: '/pages/address/address',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getSwiperList()
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