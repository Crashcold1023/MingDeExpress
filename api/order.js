const request = require('./request.js')
const API_URL = 'http://103.24.177.147:8084';

//选择渠道
exports.getqudao = function () {
    return request({
        method: 'GET',
        url: `${API_URL}/api/property/list`,
    })
}

exports.orderlist = function (objs) {
    let {
        provenance,
        destination,
        memberId,
        orderType,
        shelfer,
        shelfPhone,
        shelfAddress,
        recipient,
        recipientPhone,
        recipientCode,
        recipientAddress,
        recipientCity,
        recipientCountry,
    } = objs
    return request({
        method: 'POST',
        url: `${API_URL}/api/order/create`,
        data: {
            provenance,
            destination,
            memberId,
            orderType,
            shelfer,
            shelfPhone,
            shelfAddress,
            recipient,
            recipientPhone,
            recipientCode,
            recipientAddress,
            recipientCity,
            recipientCountry
        }
    })
}
//查看订单 参数id
exports.getorderId = function (id) {
    return request({
        method: 'GET',
        url: `${API_URL}/api/order/get`,
        data: {
            id
        }
    })
}


//查看订单列表 参数id
exports.getorderIdpage = function (memberId, page, limit) {
    return request({
        method: 'GET',
        url: `${API_URL}/api/order/page`,
        data: {
            memberId,
            page,
            limit
        }
    })
}

//订单快递数量+
exports.postexpressnum = function (expressNum, id) {
    return request({
        method: 'POST',
        url: `${API_URL}/api/order/setExpressNum`,
        data: {
            expressNum,
            id
        }
    })
}
//取消订单
exports.cancelorder = function (id) {
    return request({
        method: 'POST',
        url: `${API_URL}/api/order/cancel`,
        data: {
            id
        }
    })
}
//确定订单快递单号
exports.addexpress = function (id, expressNo) {
    return request({
        method: 'POST',
        url: `${API_URL}/api/order/addExpress`,
        data: {
            id,
            expressNo
        }
    })
}
//确定打包
exports.okok = function (id) {
    return request({
        method: 'POST',
        url: `${API_URL}/api/order/confirmPacking`,
        data: {
            id,
        }
    })
}
//保单
exports.insured = function (id,logisticsValue,lossRisk,tariffsRisk) {
    return request({
        method: 'POST',
        url: `${API_URL}/api/order/setSafe`,
        data: {
            id,
            logisticsValue,
            lossRisk,
            tariffsRisk
        }
    })
}
//提交订单信息
exports.gotoinsured = function (id) {
    return request({
        method: 'POST',
        url: `${API_URL}/api/order/payOrder`,
        data: {
            id,
        }
    })
}