// pages/my/my.js
let {getqudao} = require('../../api/order.js')
Page({
    /**
     * 页面的初始数据
     */
    data: {
        getlunbo: [],
        show: false,
        popup1text1: []
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
        console.log(e.currentTarget.dataset.index)
        wx.setStorageSync('qudaoId', e.currentTarget.dataset.index)
        this.setData({
            colorIndex: e.currentTarget.dataset.index
        });
    },
    // onClose() {
    //     this.setData({
    //         show: false
    //     });
    // },

    async showPopup(e) {
        this.setData({
            show: true
        });
        let result = await getqudao()
        // console.log(result.data[0].id);
        this.setData({
            popup1text1:result.data
        })
        // console.log(this.data.popup1text1,'hsahfasg');
    },
    // onClose() {
    //     this.setData({
    //         show: false
    //     });
    // },
    toaddress() {
        wx.navigateTo({
            url: '/pages/fallinress/fallinress',
        })
    },
    showPopup1(){
        wx.navigateTo({
          url: '/pages/stress/stress',
        })
    },
    tocopyress(){
        wx.navigateTo({
          url: '/pages/copyress/copyress',
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