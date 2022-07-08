
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 新建地址时的一个默认值
        address: {
            id: 0,
            name: '',
            mobile: '',
            city: '',
            street: '',
            isDefault: false,
            checked: false,
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function ({address}) {
        let obj = JSON.parse(address)
        this.setData({
            address:obj
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
    // 验证地址信息方法
    checkAddress() {
        var address = this.data.address;
        var tipStr = "";
        if (address.name.length == 0) {
            tipStr = "请填写收货人姓名";
        } else if (address.mobile.length == 0) {
            tipStr = "请填写收货人手机号";
        } else if (address.city.length == 0) {
            tipStr = "请选择所在地址";
        } else if (address.street.length == 0) {
            tipStr = "请填写详细地址";
        }
        if (tipStr.length == 0) {
            return true;
        } else {
            wx.showToast({
                icon: 'none',
                title: tipStr,
            })
            return false;
        }
    },
    inputName(e) {
        this.data.address.name = e.detail.value;
        this.setData({
            address: this.data.address
        })
    },
    inputMobile(e) {
        this.data.address.mobile = e.detail.value;
        this.setData({
            address: this.data.address
        })
    },
    inputStreet(e) {
        this.data.address.street = e.detail.value;
        this.setData({
            address: this.data.address
        })
    },
    // 选择所在地址
    bindRegionChange(e) {
        var city = e.detail.value;
        this.data.address.city = city.join(" ");
        this.setData({
            address: this.data.address
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
    clickAdd() {
        if (!this.checkAddress()) {
            return
        }
        var addressList = wx.getStorageSync('addressList');
        var address = this.data.address;
        var isAdd = false; // 是否为添加地址
        var addressListNew = [];
        var indexDefault = -1; // 默认选中地址的索引
        var indexCurrent = -1; // 如果是编辑地址，获取当前编辑地址在地址列表中索引

        if (address.id == 0) {
            isAdd = true;
            address.id = Math.floor(Math.random() * 1000 + 1);
            if (addressList) {
                addressList.forEach(function (v, index) {
                    if (v.isDefault) {
                        indexDefault = index;
                    }
                    // 如果当前编辑的地址为默认选中地址，将其他所有地址选中状态清除
                    if (address.isDefault) {
                        v.isDefault = false;
                    }
                })
            }
            addressListNew = [address, ...addressList];
            indexCurrent = 0;
        } else {
            // 编辑地址
            addressList.forEach(function (v, index) {
                if (v.isDefault) {
                    indexDefault = index;
                }
                // 如果当前编辑的地址为默认选中地址，将其他所有地址选中状态清除
                if (address.isDefault) {
                    v.isDefault = false;
                }
                // 如果是同一个地址，给旧的地址赋值新地址
                if (address.id == v.id) {
                    v.name = address.name;
                    v.mobile = address.mobile;
                    v.city = address.city;
                    v.street = address.street;
                    v.isDefault = address.isDefault;
                    indexCurrent = index;
                }
            })
            addressListNew = addressList;
        }
        // 如果新的地址列表中没有默认选中地址，将当前地址设置为默认选中地址
        if (indexDefault == -1) {
            addressListNew[indexCurrent].isDefault = true;
        } else {
            // 如果是编辑地址，并且有选中默认地址，并且默认选中地址和当前编辑地址是同一个，那么将当前地址设置为默认选中
            if (indexDefault == indexCurrent && !isAdd) {
                addressListNew[indexCurrent].isDefault = true;
            }
        }
        wx.setStorageSync('addressList', addressListNew);
        wx.showToast({
            icon: 'success',
            title: '保存成功！',
            success() {
                wx.navigateBack({
                    delta: 0,
                })
            }
        })
    },
    clickLocation() {
        // 点击选择位置
        wx.authorize({
            scope: 'scope.userLocation',
            success(e) {
                wx.getLocation({
                    type: 'gcj02',
                    success(location) {
                        wx.chooseLocation({
                            success(res) {
                                var address_info = res.address;
                                that.data.address.city = address_info;
                                that.setData({
                                    address: that.data.address
                                })
                            }
                        })
                    }
                })
            }
        })
    },
})