
Page({

    /**
     * 页面的初始数据
     */
    data: {
      addressList:[]
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      /**
       * 地址的数据结构
       * id 
       * name 收货人姓名
       * mobile 电话号
       * address 地址 省市县
       * street 详细店址 详细到街道门牌号
       * isDefault 默认选中
       * checked 选中哪个地址
       */
      for(var i=0; i<3; i++){
        var address = {};
        address.id = "" + (1+i);
        address.name = "郑" + (1+i);
        address.mobile = "1361236202" + (1+i);
        address.city = "汕头市峡山街道";
        address.street = "鲤鱼门 11" + (1+i) + "号 KK数码";
        address.isDefault = false;
        address.checked = false;
        if(i==0){
          address.isDefault = true;
        }
        this.data.addressList.push(address);
      }
      this.setData({
        addressList: this.data.addressList
      })
    },
  
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
  
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    // onShow: function () {
    //   var addressList = wx.getStorageSync('addressList');
    //   var address = null; // 获取默认选中地址
    //   if(addressList && addressList.length>0){
    //     addressList.forEach(function(v, index){
    //       if(v.isDefault){
    //         address = addressList.splice(index, 1)[0];
    //       }
    //     })
    //     this.setData({
    //       addressList: [address, ...addressList]
    //     })
    //   } else {
    //     this.setData({
    //       addressList: []
    //     })
    //   }
    // },
  
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
    // 默认地址选中点击事件
    clickDefault(e){
      var index = e.currentTarget.dataset.index;
      this.data.addressList.forEach(function(v){
        v.isDefault = false;
      })
      this.data.addressList[index].isDefault = true;
      // 将默认选中的地址 放到第一个位置
      var address = this.data.addressList.splice(index, 1)[0];
      this.data.addressList = [address, ...this.data.addressList];
      // 正常地址中 应该有一个最后更新时间 按照时间排序，做到服务端的时候再说
      this.setData({
        addressList: this.data.addressList
      })
    },
    // 删除点击事件
    clickDelete(e){
      var index = e.currentTarget.dataset.index;
      this.data.addressList.splice(index, 1);
      this.setData({
        addressList: this.data.addressList
      })
    },
    // 编辑点击事件
    // clickEdit(e){
    //   var index = e.currentTarget.dataset.index;
    //   var address = this.data.addressList[index];
    //   wx.navigateTo({
    //     url: '../address/edit?address=' + JSON.stringify(address),
    //   })
    // },
    // 添加点击事件
    clickAdd(e){
      wx.navigateTo({
        url: '/pages/tomyaddress/tomyaddress',
      })
    },
  })