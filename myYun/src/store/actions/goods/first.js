import * as types from '../../actionTypes';
import {post,get} from '../../../api/index';
import { message } from 'antd';
import apiUrl from '../../../api/urlConfig';

//获取一级分类商品
function getGFirst(data){
    return{
        type: types.GET_GOODS_FIRST,
        data
    }
}

const { fAddUrl, fGetUrl,fEditUrl, fDelUrl } = apiUrl.goods.category.first;

//获取一级商品类别
function getGCategory(dispatch) {
    get(fGetUrl).then(d=>{
        if(d.code === 0){
            dispatch(getGFirst(d.msg))
        }else{
            message.error(d.msg);
            return false
        }
    })
}
export function getGoodsFirst() {
    return function (dispatch,getState) {
        getGCategory(dispatch)
    }
}
//通过id获取一级商品名称
export function getGFirstCname(params) {
    return function(dispatch,getState){
        get(fGetUrl+params).then(d=>{
            if(d.code === 0){
                dispatch({
                    type: types.CUR_GOODS_FIRST,
                    data: d.data
                })
            }else{
                message.error(d.msg);
                return false
            }
        })
    }

}
//修改一级商品类别
export function editGoodsFirst(params) {
    return function (dispatch,getState) {
        get(fEditUrl+params).then(d=>{
            if(d.code === 0){
                message.success(d.msg);
                getGCategory(dispatch)
            }else{
                message.error(d.msg);
                return false
            }
        })
    }
}
//添加一级商品类别
export function addGoodsFirst(params) {
    return function (dispatch,getState) {
        get(fAddUrl+params).then(d=>{
            if(d.code === 0){
                message.success(d.msg);
                getGCategory(dispatch)
            }else{
                message.error(d.msg);
                return false
            }
        })
    }
}
//删除一级商品类别
export function delGoodsFirst(params) {
    return function (dispatch,getState) {
        get(fDelUrl+params).then(d=>{
            if(d.code === 0){
                message.success(d.msg);
                getGCategory(dispatch)
            }else{
                message.error(d.msg);
                return false
            }
        })
    }
}