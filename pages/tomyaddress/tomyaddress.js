let {
    getaddnewress,
    getress,
    updateress
} = require('../../api/address.js')


Page({

    /**
     * 页面的初始数据
     */
    data: {
        showress:false,
        yuyu:true,
        // 新建地址时的一个默认值
        memberId: '40039',
        name: '',
        phone: '',
        area: '',
        city: '',
        code: '',
        country: '',
        status: 0,
        type: 1,
        id: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        console.log(options);
        let {
            id,
            status
        } = options

        if(!options.id == ''){
            this.setData({
                showress:true,
                yuyu:false
            })
        }else{
                yuyu:true
        }

        this.setData({
            id: options.id
        })
        console.log(this.data.id);
        let memberId = wx.getStorageSync('id')
        let result = await getress(this.data.id, this.data.memberId)
        console.log(result);
        this.setData({
            name: result.data.name,
            phone: result.data.phone,
            area: result.data.area,
            city: result.data.city,
            code: result.data.code,
            country: result.data.country,
        })
    },

    // showtime(){
    //     wx.request({
    //         url:`http://103.24.177.147:8084//api/member/address/get`,
    //         method:'GET',
    //         data:{
    //             id:this.data.id,
    //             memberId:this.data.memberId
    //         },
    //         success:(res)=>{
    //             console.log(res);
    //         }
    //     })
    // },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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

    },

    inputName(e) {
        // this.data.address.name = e.detail.value;
        // console.log(e);
        this.setData({
            name: e.detail.value
        })
        // console.log(this.data.name,'name');
    },
    inputMobile(e) {
        this.setData({
            phone: e.detail.value
        })
    },
    inputStreet(e) {
        this.setData({
            code: e.detail.value
        })
    },
    inputCountry(e) {
        this.setData({
            country: e.detail.value
        })
    },
    // 选择所在地址
    bindRegionChange(e) {
        this.setData({
            area: e.detail.value
        })
    },
    bindcity(e) {
        this.setData({
            city: e.detail.value
        })
    },
    clickDefault() {
        if (this.data.address.isDefault) {
            this.data.address.isDefault = false;
        } else {
            this.data.address.isDefault = true;
        }
        this.setData({
            address: this.data.address
        })
    },

 

    async showtime(e) {
        var id = this.data.id
        var name = this.data.name;
        var phone = this.data.phone;
        var area = this.data.area;
        var city = this.data.city;
        var code = this.data.code;
        var country = this.data.country;
        var memberId = this.data.memberId
        console.log(name,'123');
        var type = 1;
        var status = 0
        console.log(memberId);
        var obj = {
            id,
            memberId,
            name,
            phone,
            area,
            city,
            code,
            country,
            status,
            type
        }
        var result = await updateress(obj)
        wx.navigateBack({
            delta: 1
        })
        console.log(result)
    },


    async submit(e) {
        var name = this.data.name;
        var phone = this.data.phone;
        var area = this.data.area;
        var city = this.data.city;
        var code = this.data.code;
        var country = this.data.country;
        var memberId = this.data.memberId
        var type = 1;
        var status = 0
        console.log(memberId);
        var obj = {
            memberId,
            name,
            phone,
            area,
            city,
            code,
            country,
            status,
            type
        }
        var result = await getaddnewress(obj)
        wx.navigateBack({
            delta: 1
        })
        console.log(result)
    },

    onShow() {
        this.setData({
            memberId: wx.getStorageSync('id')
        })
    }
})