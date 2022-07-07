// pages/orderdetail/orderdetail.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        show: false,
        lists: [{}, {}],
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