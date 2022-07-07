Page({

    /**
     * 页面的初始数据
     */
    data: {
        currtab: 1,
        swipertab: [{
                id: 0,
                name: '全部'
            },
            {
                id: 1,
                name: '待付款'
            },
            {
                id: 2,
                name: '已付款'
            },
            {
                id: 3,
                name: "已完成"
            },
            // {
            //     id: 4,
            //     name: '待评价'
            // }
        ]


    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /*选项卡点击切换
     */
    tabSwitch: function (e) {
        var that = this
        if (this.data.currtab === e.target.dataset.current) {
            return false
        } else {
            that.setData({
                currtab: e.target.dataset.current
            })
        }
    },

    tabChange: function (e) {
        this.setData({
            currtab: e.detail.current
        })
        this.orderShow()
    },
    orderShow: function () {
        let _this = this;
        switch (this.data.currtab) {
            case 0:
                _this.alreadyShow()
                break
            case 1:
                _this.waitPayShow()
                break
            case 2:
                _this.lostShow()
            case 3:
                _this.waitShow()
                // case 4:
                //     _this.evaluatedShow()
        }
    },
    alreadyShow: function () {
        this.setData({
            alreadyOrder: [{
                name: "订单号:201525561687865654866",
                state: "交易成功",
                city: "中国",
                image: "/assets/index_img/fly.svg",
                tocity: "米国",
            }, {
                name: "订单号:201525561687865654866",
                state: "交易成功",
                city: "中国",
                image: "/assets/index_img/fly.svg",
                tocity: "米国",
            }]
        })
    },

    waitPayShow: function () {
        this.setData({
            waitPayOrder: [{
                    name: "订单号:201525561687865654866",
                    state: "待付款",
                    city: "中国",
                    image: "/assets/index_img/fly.svg",
                    tocity: "米国",
                },
            ],
        })
    },

    lostShow: function () {
        this.setData({
            lostOrder: [{
                name: "订单号:201525561687865654866",
                state: "已付款",
                city: "中国",
                image: "/assets/index_img/fly.svg",
                tocity: "米国",
            }],
        })
    },
    waitShow: function () {
        this.setData({
            lostOrder: [{
                name: "订单号:201525561687865654866",
                state: "已完成",
                city: "中国",
                image: "/assets/index_img/fly.svg",
                tocity: "米国",
            }],
        })
    },
    // evaluatedShow: function () {
    //     this.setData({
    //         lostOrder: [{
    //             name: "跃动体育运动俱乐部(圆明园店)",
    //             state: "待评价",
    //             time: "2018-10-4 10:00-12:00",
    //             status: "待评价",
    //             url: "../../../img/shangpin.jpg",
    //             money: "122"
    //         }],
    //     })
    // },
    warn(){
        wx.showToast({
          title: '提醒成功',
          success:'success'
        })
    },
    getOrderDetails(){
        wx.navigateTo({
          url: '/pages/orderdetail/orderdetail',
        })
    },
    gopay(){
        wx.navigateTo({
            url: '/pages/okorderdetail/okorderdetail',
          })
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
    
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})