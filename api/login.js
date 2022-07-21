const request = require('./request.js')
const API_URL = 'http://103.24.177.147:8084';
// 微信登录
exports.WxApiLogin = function(code,nickName,avatarUrl){
    return request({
        method:"POST",
        url:`${API_URL}/api/member/v2/login`,
        data:{
            code,
            nickName,
            avatarUrl
        }
    })
}
