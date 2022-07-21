const request = require('./request.js')
const API_URL = 'http://103.24.177.147:8084';
// 添加地址
exports.getaddnewress = function (obj) {
    let {
        memberId,
        name,
        phone,
        area,
        city,
        code,
        country,
        status,
        type
    } = obj
    return request({
        method: "POST",
        url: `${API_URL}/api/member/address/save`,
        data: {
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
    })
}

// 列表地址
exports.getaddresslist = function (memberId) {
    return request({
        method: 'GET',
        url: `${API_URL}/api/member/address/list`,
        data: {
            memberId
        }
    })
}

//删除地址ID
exports.deleteressId = function(id){
    return request({
        method:'POST',
        url:`${API_URL}/api/member/address/delete`,
        data:{
            id
        }
    })
}

//获取地址
exports.getress = function(id,memberId){
    return request({
        method:'GET',
        url:`${API_URL}/api/member/address/get`,
        data:{
            id,
            memberId,
        }
    })
}

//编辑地址
exports.updateress = function(obj){
    let {
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
    } = obj
    return request({
        method:'POST',
        url:`${API_URL}/api/member/address/update`,
        data:{
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
    })
}

//设置默认地址
exports.defaultress = function(id){
    return request({
        method:'POST',
        url:`${API_URL}/api/member/address/setDefault`,
        data:{
            id
        }
    })
}