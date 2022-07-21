// pages/order/order.ts
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    plain:'../../assets/index_img/fly.svg',
    orderstatus:app.globalData.orderState,
    more:'确认打包',
    getmoney:'去支付',
    write:'待填写',
    news:'物流消息',
    what:'详情',
    overs:'订单详情',
    much:[
    ]
  },
//最后完成
  overs(e){
    let id = e.currentTarget.dataset.id.id
    wx.navigateTo({
      url:`../waitpayorderdetail/waitpayorderdetail?id=` + id
    })
  },

  details(e){
    console.log(e.currentTarget.dataset.id.id);
    wx.navigateTo({
      url:`../orderdetail/orderdetail?jojo=`+e.currentTarget.dataset.id.id
    })
  },
  
  butt(e){
   console.log(e.currentTarget.dataset.id.id);
    wx.navigateTo({
      url:`../okorderdetail/okorderdetail?jojo=`+e.currentTarget.dataset.id.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {
  //  const imd = wx.getStorageSync('imd')
  //   console.log(imd);
    
    wx.request({
      url:'http://103.24.177.147:8084//api/order/get',
      method:'GET',
      data:{
          id: wx.getStorageSync('imd')
      },
      success:(res)=>{
        // console.log(res.data.data.paymentStatus);
        
        // console.log(res.data.status,'res数据');
        
      }
    })
  this.showtime()
  },

  showtime(){
    wx.request({
      url:'http://103.24.177.147:8084//api/order/page',
      method:'GET',
      data:{
        memberId:wx.getStorageSync('id'),
        page:'1',
        limit:'50'
      },
      success:(res)=>{
        console.log(res.data.data);
        this.setData({
          much:res.data.data
        })
      }
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