// pages/orderdetail/orderdetail.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';

let {
    getorderId,
    postexpressnum,
    cancelorder //取消订单
} = require('../../api/order.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {

        //订单ID
        orderId: '',
        detaildList: {},
        goods: [{
                id: 0,
                name: '电子产品'
            },
            {
                id: 1,
                name: '液体粉末'
            },
            {
                id: 2,
                name: '内地EMS'
            },
            {
                id: 3,
                name: '广东EMS'
            },
            {
                id: 4,
                name: '普通货物'
            },
        ],
        statuss: [{
                id: 0,
                name: '待支付'
            },
            {
                id: 1,
                name: '已支付'
            },
        ],
        expressNum:'',
        show: false,
        lists: [],
        // orderstatus:[

        // ]
    },
    add(event) {
        this.addList(event.detail.value, false)
    },
    addList: function (detail, judgment) {
        console.log(judgment)
        if (judgment == false) {
            this.setData({
                lists: Array(Number(detail)).fill({})
            })
        } else {
            this.setData({
                show: true
            })
            Dialog.confirm({
                    title: '是否补充快递单号',
                    message: '补充后请确认单号无误',
                })
                .then(() => {
                    this.setData({
                        lists: Array(Number(this.data.lists.length + 1)).fill({}),
                        num: this.data.lists.length + 1
                    })
                })
                .catch(() => {});
        }
    },

    async close() {
        let result = await cancelorder(this.data.orderId)
        console.log(this.data.orderId, 'idid');
        console.log(result);
        Dialog.confirm({
                title: '是否取消订单',
                message: '取消订单后订单将不能进行后续的操作',
            })
            .then(() => {
                wx.navigateBack({
                    delta: 1,
                })
            })
            .catch(() => {
                // on cancel
            });
    },
    delList: function () {
        var lists = this.data.lists;
        lists.pop(); //实质是删除lists数组内容，使for循环少一次
        this.setData({
            lists: lists,
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        // options
        console.log(options.jojo);
        let result = await getorderId(options.jojo)
        console.log(result);
        this.setData({
            orderId: options.jojo,
            detaildList: result.data
        })
        console.log(this.data.detaildList, '数据');
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