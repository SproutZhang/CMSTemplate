import * as types from '../../actionTypes';
import {post,get} from '../../../api/index';
import { message } from 'antd';
import apiUrl from '../../../api/urlConfig';

const { allOrders, deliveryOrders, refundOrders,sendOrder,agreeOrder,refuseOrder} = apiUrl.orders;

function getAll(data){
    return{
        type: types.GET_ALL_ORDER,
        data
    }
}
function getDelivery(data){
    return{
        type: types.GET_DELIVERY_ORDER,
        data
    }
}
function getRefund(data) {
    return{
        type: types.GET_REFUND_ORDER,
        data
    }
}

//获取全部订单
export function getAllOrders() {
    return function (dispatch,getState) {
        get(allOrders).then(d=>{
            if(d.code === 0){
                dispatch(getAll(d.msg))
            }else{
                message.error(d.msg);
                return false
            }
        })
    }
}
//获取全部发货订单
function getDOrders(dispatch,params) {
    get(deliveryOrders + params).then(d => {
        if (d.code === 0) {
            dispatch(getDelivery(d.msg))
        } else {
            message.error(d.msg);
            return false
        }
    })
}
//获取发货订单
export function getDeliveryOrders(params) {
    return function (dispatch,getState) {
        getDOrders(dispatch,params)
    }
}
//发货
export function sendDeliveryOrders(params) {
    return function (dispatch,getState) {
        get(sendOrder + params).then(d => {
            if (d.code === 0) {
                message.success(d.msg);
                getDOrders(dispatch,'?status=0')
            } else {
                message.error(d.msg);
                return false
            }
        })
    }
}
//获取退款订单
function getFOrders(dispatch) {
    get(refundOrders).then(d=>{
        if(d.code === 0){
            dispatch(getRefund(d.msg))
        }else{
            message.error(d.msg);
            return false
        }
    })
}
//获取退款订单
export function getRefundOrders() {
    return function (dispatch,getState) {
        getFOrders(dispatch)
    }
}
//同意退款
export function agreeOrders(params) {
    return function (dispatch,getState) {
        get(agreeOrder + params).then(d => {
            if (d.code === 0) {
                message.success(d.msg);
                getFOrders(dispatch)
            } else {
                message.error(d.msg);
                return false
            }
        })
    }
}

//拒绝退款
export function refuseOrders(params) {
    return function (dispatch,getState) {
        get(refuseOrder + params).then(d => {
            if (d.code === 0) {
                message.success(d.msg);
                getFOrders(dispatch)
            } else {
                message.error(d.msg);
                return false
            }
        })
    }
}


