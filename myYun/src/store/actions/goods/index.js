import * as types from '../../actionTypes';
import {post,get} from '../../../api/index';
import { message } from 'antd';
import apiUrl from '../../../api/urlConfig';

const { getGoodsUrl, addGoodsUrl, editGoodsUrl, delGoodsUrl } = apiUrl.goods;


function getDGoods(data){
    return{
        type: types.GET_GOODS,
        data
    }
}

// 获取商品
function getGoods(dispatch) {
    get(getGoodsUrl).then(d=>{
        if(d.code === 0){
            dispatch(getDGoods(d.msg))
        }else{
            message.error(d.msg);
            return false
        }
    })
}
export function getGoodsAll() {
    return function (dispatch,getState) {
        getGoods(dispatch)
    }
}
//通过id获取商品信息
export function getGoodsInfo(params) {
    return function(dispatch,getState){
        get(getGoodsUrl+params).then(d=>{
            if(d.code === 0){
                dispatch({
                    type: types.CUR_GOODS,
                    data: d.data
                })
            }else{
                message.error(d.msg);
                return false
            }
        })
    }

}
//修改商品
export function editGoods(params) {
    return function (dispatch,getState) {
        get(editGoodsUrl+params).then(d=>{
            if(d.code === 0){
                message.success(d.msg);
                getGoods(dispatch)
            }else{
                message.error(d.msg);
                return false
            }
        })
    }
}
//添加商品
export function addGoods(params) {
    return function (dispatch,getState) {
        get(addGoodsUrl+params).then(d=>{
            if(d.code === 0){
                message.success(d.msg);
                getGoods(dispatch)
            }else{
                message.error(d.msg);
                return false
            }
        })
    }
}

//删除商品
export function delGoods(params) {
    return function (dispatch,getState) {
        get(delGoodsUrl+params).then(d=>{
            if(d.code === 0){
                message.success(d.msg);
                getGoods(dispatch)
            }else{
                message.error(d.msg);
                return false
            }
        })
    }
}


