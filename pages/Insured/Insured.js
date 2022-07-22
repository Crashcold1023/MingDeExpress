// pages/Insured/Insured.js
let {
    getorderId,
    insured
} = require('../../api/order.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        checked: false,
        checked1: false,
        id: '',
        input: '',
        money: 0,
        much:0,
        orderId:''
    },
    onChange({
        detail
    }) {
        this.setData({
            checked: detail
        })
        if (detail == true) {
            // this.setData({
            //     money: this.data.input * 0.03
            // })
            this.setData({
                money:this.data.input * 0.03
            })
        } else {
            // this.setdata({
            //     money: 0
            // })
            this.setData({
                money:0
            })
        }

    },

    onChange1({
        detail
    }) {
        this.setData({
            checked1: detail
        })
        if (detail == true) {
            this.setData({
                much: this.data.input * 0.02
            })
        } else {
            this.setData({
                much: 0
            })
        }

    },
    async onChange2(){
        let id = this.data.id
        let logisticsValue = this.data.input
        let lossRisk = this.data.money
        let tariffsRisk = this.data.much
        console.log(id,logisticsValue,lossRisk,tariffsRisk);
        let result = await insured(id,logisticsValue,lossRisk,tariffsRisk)
        console.log(result);
       wx.navigateTo({
         url: `../payorderdetail/payorderdetail?id=`+this.data.id,
       })
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        console.log(options);
        let id = options.id
        let result = await getorderId(id)
        this.setData({
            id: options.id
        })
        console.log(this.data.id);
        console.log(result);
    },

    input(event) {
        console.log(event.detail);
        this.setData({
            input: event.detail
        })
        console.log(this.data.input, 'hhsg');
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