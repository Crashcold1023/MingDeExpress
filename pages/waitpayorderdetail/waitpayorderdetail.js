// pages/orderdetail/orderdetail.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
let {
    getorderId
} = require('../../api/order.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
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
        idstatus: [{
                id: 0,
                name: '待入仓'
            },
            {
                id: 1,
                name: '已入仓'
            },
        ],
        border: false,
        image: [], //称重图片
        //订单ID
        orderId: '',
        detaildList: {},

        show: false,
        lists: [],
        // orderstatus:[

        // ]
    },
    addList: function () {
        var lists = this.data.lists;
        var newData = {};
        lists.push(newData); //实质是添加lists数组内容，使for循环多一次
        // this.setData({
        //     lists: lists,
        // })
        this.setData({
            show: true
        })
        Dialog.confirm({
                title: '是否补充快递单号',
                message: '补充后请确认单号无误',
            })
            .then(() => {
                // on confirm
                this.setData({
                    lists: lists,

                })
                console.log(lists)
            })
            .catch(() => {
                // on cancel
            });

        // wx.showToast({
        //   title: '请确认单号无误',
        //   duration:3000,
        //   icon:"error"
        // })
    },
    // close() {
    //     Dialog.confirm({
    //         title: '是否确认打包所有的快递包裹',
    //         message: '确认订单后 订单将会进入拣货状态 快递包裹会进行打包称重',
    //     })
    //     .then(() => {
    //         // on confirm
    //     //    wx.navigateBack({
    //     //        delta:1
    //     //    })
    //     wx.navigateTo({
    //       url: '/pages/waitorderdetail/waitorderdetail',
    //     })
    //     })
    //     .catch(() => {
    //         // on cancel
    //     });
    // },
    delList: function () {
        var lists = this.data.lists;
        lists.pop(); //实质是删除lists数组内容，使for循环少一次
        this.setData({
            lists: lists,
        })
    },
    pay() {
        console.log(this.data.orderId,'111');
        wx.navigateTo({
          url: `../Insured/Insured?id=`+this.data.orderId,
        })
        // Dialog.confirm({
        //         title: '请确认你的收货地址',
        //         message: '如果收货地址有误请联系客服更改',
        //     })
        //     .then(() => {
        //         // on confirm
        //         // this.setData({
        //         //     lists: lists,
        //         // })
        //         // console.log(lists)
        //         wx.navigateTo({
        //             url: '/pages/Insured/Insured',
        //         })
        //     })
        //     .catch(() => {
        //         // on cancel
        //     });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        // options
        console.log('11', options);
        let id = options.id
        let result = await getorderId(id)
        console.log(result, 'shdas');
        this.setData({
            orderId:result.data.id
        })
        console.log(this.data.orderId);
        result.data.packageItems.forEach(element => {
            this.setData({
                image: element.images
            })
        })
        // console.log(this.data);
        this.setData({
            detaildList: result.data
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