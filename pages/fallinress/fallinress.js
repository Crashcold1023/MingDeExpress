// pages/address/address.js
// var app = getApp()
let {
    getress,
} = require('../../api/address.js')
let {
    orderlist,
    // getorderId
} = require('../../api/order.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // globalData: {
        //     getcontent: "", //定义全局变量
        // },
        memberId: 40039,
        name: '',
        phone: '',
        area: '',
        city: '',
        code: '',
        country: '',
        id: '',
        //创建传参
        provenance: '中国',
        destination: '英国',
        // memberId: '',
        orderType: '',
        shelfer: '明德转运仓',
        shelfPhone: '13612362023',
        shelfAddress: '深圳市龙岗区康桥花园2期24栋805室',
        recipient: '',
        recipientPhone: '',
        recipientCountry: '',
        recipientCode: '',
        recipientAddress: '',
        recipientCity: '',
        
    },



    chooseress() {
        wx.navigateTo({
            url: '/pages/myaddress/myaddress',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        wx.request({
          url: 'http://103.24.177.147:8084//api/member/address/get?memberId=40039&status=1&type=1',
          method:'GET'
        })
        // wx.getStorage('qudaoId')
        let {
            id,
            status
        } = options
        this.setData({
            id: options.id
        })
        console.log(this.data.id);
        let memberId = wx.getStorageSync('id')
        let result = await getress(this.data.id, memberId)
        console.log(result);
        this.setData({
            name: result.data.name,
            phone: result.data.phone,
            area: result.data.area,
            city: result.data.city,
            code: result.data.code,
            country: result.data.country,
        })
        wx.getStorageSync('qudaoId')
        this.setData({
            orderType:wx.getStorageSync('qudaoId')
        })
    },

    async tookOrder(e) {
        var provenance = this.data.provenance;
        var destination = this.data.destination;
        var memberId = this.data.memberId;
        var orderType = this.data.orderType;
        var shelfer = this.data.shelfer;
        var shelfPhone = this.data.shelfPhone;
        var shelfAddress = this.data.shelfAddress;
        var recipient = this.data.name;
        var recipientPhone = this.data.phone;
        var recipientCountry = this.data.country;
        var recipientCode = this.data.code;
        var recipientAddress = this.data.area;
        var recipientCity = this.data.city;
        var objs = {
            provenance,
            destination,
            memberId,
            orderType,
            shelfer,
            shelfPhone,
            shelfAddress,
            recipient,
            recipientPhone,
            recipientCountry,
            recipientCode,
            recipientAddress,
            recipientCity
        }
        console.log(objs);
        var result = await orderlist(objs)
        console.log(result);
        // var orderId = await getorderId(this.data.orderId)
        // console.log(orderId);
        wx.switchTab({
          url: '/pages/order/order',
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