// pages/orderdetail/orderdetail.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
let {
    getorderId,
    getorderIdpage,
    postexpressnum,
    addexpress,
    okok
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

        expressNo: '',

        show: false,
        lists: [],
        num: ''
        // orderstatus:[

        // ]
    },
    async add(event) {
        this.addList(event.detail.value, false)
    },
    async addList(detail, judgment) {
        let result = await postexpressnum(detail, this.data.detaildList.id)
        console.log(result);
        console.log(detail)
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
                    console.log(this.data.lists);
                })

                .catch(() => {});
        }
    },
    async getinput(e) {
        console.log(e.detail.value);
        // let id =  this.data.detaildList.id
        // let expressNo =  this.data.expressNo
        console.log(this.data.detaildList.id);
        console.log(this.data.expressNo);
        this.setData({
            expressNo: e.detail.value
        })
        let result = await addexpress(this.data.detaildList.id, this.data.expressNo)

        console.log(result);
    },



    async close() {
        let result = await okok(this.data.detaildList.id)
        console.log(result);
        Dialog.confirm({
                title: '是否确认打包所有的快递包裹',
                message: '确认订单后 订单将会进入拣货状态 快递包裹会进行打包称重',
            })
            .then(() => {
                wx.navigateTo({
                    url: `../waitpayorderdetail/waitpayorderdetail?id=`+this.data.detaildList.id,
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
            num: lists.length
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