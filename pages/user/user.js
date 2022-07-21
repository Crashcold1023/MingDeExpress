// pages/user/user.js
let {
    WxApiLogin
} = require('../../api/login');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        // userInfo:{}

    },


    async loginBtn() {
        let that = this
        wx.getUserProfile({
            desc: '登录获得更多有用的信息资料',
            success(res) {
                that.setData({
                    userInfo: res.userInfo
                })
                wx.login({
                    async success(res) {
                        let {
                            code
                        } = res
                        let {
                            nickName,
                            avatarUrl,
                        } = that.data.userInfo
                        if (res.code) {
                            let result = await WxApiLogin(code, nickName, avatarUrl)
                            // console.log(res,'res');
                            // let nickName = that.data.userInfo.nickName
                            // let avatar = that.data.userInfo.avatarUrl
                            // wx.setStorageSync('userInfo', {
                            //     result.data.avatarUrl
                            //     nickName,
                            //     id
                            // })
                            wx.setStorageSync("id",result.data.id)
                            wx.setStorageSync("avatarUrl",result.data.avatar)
                            wx.setStorageSync("nickName",result.data.nickName)

                            // setTimeout(function () {
                            //     //要延时执行的代码
                            // }, 3000) //延迟时
                            wx.navigateBack({
                                delta: 1,
                            })
                            wx.showToast({
                                title: '登录成功',
                            })
                            // wx.request({
                            //     method: 'POST',
                            //     url: `${API_URL}/api/member/v2/login`,
                            //     data: {
                            //         code: res.code,
                            //         nickName: nickName,
                            //         avatarUrl: avatarUrl,

                            //     },
                            //     success(res) {
                            //         // console.log(res.data.data.id);
                            //         
                            //     }
                            // })
                        }
                    }
                })

            }
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