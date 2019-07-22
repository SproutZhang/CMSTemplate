import * as types from '../../actionTypes';
import {post,get} from '../../../api/index';
import { message } from 'antd';
import apiUrl from '../../../api/urlConfig';

//获取二级分类商品
function getGSecond(data){
    return{
        type: types.GET_GOODS_SECOND,
        data
    }
}

const { sAddUrl, sGetUrl } = apiUrl.goods.category.second;

//获取二级商品类别
function getGSCategory(dispatch) {
    get(sGetUrl).then(d=>{
        if(d.code === 0){
            dispatch(getGSecond(d.msg))
        }else{
            message.error(d.msg);
            return false
        }
    })
}
export function getGoodsSecond() {
    return function (dispatch,getState) {
        getGSCategory(dispatch)
    }
}
//添加二级商品类别
export function addGoodsSecond(params) {
    return function (dispatch,getState) {
        get(sAddUrl+params).then(d=>{
            if(d.code === 0){
                message.success(d.msg);
                getGSCategory(dispatch)
            }else{
                message.error(d.msg);
                return false
            }
        })
    }
}