module.exports = function request(options) {

    return new Promise((resolve, reject) => {
        wx.showLoading({
            title: 'loading',
        })

        let requestObj = {
            ...options,
            success(res) {
                resolve(res.data)
            },
            fail(err) {
                reject(err)
            },
            complete(res) {
                wx.hideLoading()
                // let {msg,code,status} = res.data
                // if(code === -200){
                //     wx.showToast({
                //       title: msg,
                //     })
                //     wx.navigateTo({
                //       url: '/pages/login/login',
                //     })
                // }

            }
        }

        // // 获取token，携带到请求头authorization中
        // let token = wx.getStorageSync('token')
        // if(token){
        //     requestObj.header = {
        //         authorization:token
        //     }
        // }

        wx.request(requestObj)
    })
}