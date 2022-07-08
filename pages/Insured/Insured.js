// pages/Insured/Insured.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        checked: false,
        checked1: false
    },
    onChange({
        detail
    }) {
        wx.showModal({
            title: '提示',
            content: '是否购买丢失保险?确定后不可作更改',
            success: (res) => {
                if (res.confirm) {
                    this.setData({
                        checked: true
                    });
                }
            },
        });
    },
    onChange1(res) {
        if (res.confirm) {
            this.data.checked1 === false
        } else {
            wx.showModal({
                title: '风险告知书',
                content: '系统没有检测到您购买保险 注意保险单的提示 请知悉',
            }).then(() => {
                // on close
                wx.navigateTo({
                  url: '',
                })
              });
        }

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