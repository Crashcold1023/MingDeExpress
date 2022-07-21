let {
    getaddresslist,
    deleteressId,
    defaultress
} = require('../../api/address.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        addressList: [],
        type: 1,
        memberId: 1234,
        ressId: '',
        status: 0,
        checked: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady(options) {
    },
    //获取地址列表
    async getresslist() {
        this.setData({
            memberId: wx.getStorageSync('id')
        })
        let memberId = this.data.memberId
        let result = await getaddresslist(memberId)
        console.log(result)
        this.setData({
            addressList: result.data
        })
    },
    // 默认地址选中点击事件
    async clickDefault(e) {
        var id = e.currentTarget.dataset.index
        this.setData({
            ressId: id
        })
        let result = await defaultress(this.data.ressId)
        var list = this.data.addressList.map(item => {
            console.log(item);
            if (item.id == id) {
                item.status = 1
            } else {
                item.status = 0
            }
            return item
        })
        this.setData({
            addressList: list
        })
    },
    // 删除点击事件
    async clickDelete(e) {
        const id = e.currentTarget.dataset.index
        console.log(e.currentTarget);
        this.setData({
            ressId: id
        })
        let result = await deleteressId(this.data.ressId)
        console.log(result.status)
        if (result.status == 200) {
            wx.showToast({
              title: '已删除',
            })
            this.onShow()
          }
    },
    // 编辑点击事件
    clickEdit(e) {
        // console.log(e);
        let id = e.target.dataset.index
        let status = e.target.dataset.checked
        console.log(id);
        console.log(status);
        wx.navigateTo({
            url: `../tomyaddress/tomyaddress?id=${id}&&status=${status}`,
        })
    },
    // 传到立即转运的地址
    getress(e) {
        console.log(e.currentTarget.dataset.index);
        const itemid = e.currentTarget.dataset.index
        console.log(itemid, 'id');
        wx.navigateTo({
            url: '/pages/fallinress/fallinress?id=' + itemid,
        })
    },
    // 添加点击事件
    clickAdd(e) {
        wx.navigateTo({
            url: '/pages/tomyaddress/tomyaddress',
        })
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.getresslist()
        this.clickDelete()
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

    },

})