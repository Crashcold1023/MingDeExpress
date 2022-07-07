// pages/my/my.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setUserInfoStorageTime();
    },
    getUserProfile() {
        var that = this;
        wx.showModal({
            title: "提示",
            content: "是否允许获取微信昵称和头像？",
            success(res) {
                if (res.confirm) {
                    wx.getUserProfile({
                        desc: "用于完善用户资料",
                        success: (res) => {
                            //   app.globalData.userInfo = res.userInfo; //这个我有时候获取不到，所以没管它，但先写着
                            that.setData({
                                userInfo: res.userInfo
                            });
                            wx.setStorageSync("userInfo", res.userInfo);
                            let setNowTime = Date.now() + 3600 * 1000 * 24 * 1; // 设置授权有效期
                            wx.setStorageSync("userInfoStorageTime", setNowTime);
                        },
                        fail: function (err) {
                            console.log(err);
                        },
                    });
                }
            },
        });
    },
    //设置微信用户存储信息的事件 
    setUserInfoStorageTime() {
        var that = this;
        let nowTime = Date.now();
        let oldTime = wx.getStorageSync("userInfoStorageTime");
        let userInfo = wx.getStorageSync("userInfo");
        if (userInfo.nickName != undefined && userInfo.nickName != null && userInfo.nickName != "") {
            if (oldTime && nowTime < oldTime) {
                that.setData({
                    userInfo: userInfo
                })
                return;
            } else {
                that.getUserProfile();
            }
        } else {
            that.getUserProfile();
        }
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