import * as types from './actionTypes';
import {post,get} from '../api/index';
import { message } from 'antd'


//获取用户信息
function getUser(data){
    return{
        type: types.GET_USER_INFO,
        data
    }
}

//获取一级分类商品
function getGFirst(data){
    return{
        type: types.GET_GOODS_FIRST,
        data
    }
}



//给组件调用的
export function login(url,params){
    return function(dispatch,getState){
        post(url,params).then(d=>{
            if(d.code === 0){
                // document.cookie="username="+d.data.name;
                dispatch({
                    type: types.LOGIN,
                    data: d.data
                })
            }else{
                message.error(d.msg);
                return false
            }
        })
    }
}

//获取cookie
export function getCookie(url) {
    return function (dispatch,getState) {
        get(url).then(d=>{
            if(d.code === 0){
                dispatch({
                    type: types.LOGIN,
                    data: d
                })
            }else{
                message.error(d.msg);
                return false
            }
        })
    }
}

//获取用户信息
export function getUserInfo(url){
    return function(dispatch,getState){
        get(url).then(d=>{
            if(d.code === 0){ 
                dispatch(getUser(d.msg))
            }else{
                message.error(d.msg);
                return false
            }
        })
    }
}

//获取一级商品分类
export function getGoodsFirst(url) {
    return function (dispatch,getState) {
        get(url).then(d=>{
            if(d.code === 0){
                dispatch(getGFirst(d.msg))
            }else{
                message.error(d.msg);
                return false
            }
        })
    }
}
//添加
export function addGoodsFirst(url) {
    return function (dispatch,getState) {
        get(url).then(d=>{
            if(d.code === 0){
                return d.msg
            }else{
                message.error(d.msg);
                return false
            }
        })
    }
}



