// pages/copyress/copyress.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    copy() {
        // var that = this;
        wx.setClipboardData({
            data: "明德转运仓 汕头市潮南区峡山街道鲤鱼门1103号KK数码 13612362023 KK51500",
            success: function (res) {
                wx.showModal({
                    title: '提示',
                    content: '复制成功',
                    success: function (res) {
                        if (res.confirm) {
                            console.log('确定')
                        } else if (res.cancel) {
                            console.log('取消')
                        }
                    }
                })
            }
        });
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