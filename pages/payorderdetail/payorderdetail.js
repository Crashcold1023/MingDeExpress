// pages/payorderdetail/payorderdetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        show:false,
        show1:false,
    },
    onClose() {
        this.setData({ show: true });
      },
    onClose1() {
        this.setData({ show1: true });
      },
      fee(){
        this.setData({ show: false });
      },
      fee1(){
        this.setData({ show1: false });
      },
      close(){
        this.setData({ show1: false });
      },
      onClickButton(){
        wx.navigateTo({
          url: '/pages/paysucces/paysucces',
        })
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