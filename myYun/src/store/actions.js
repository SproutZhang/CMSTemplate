import * as types from './actionTypes';
import {post,get} from '../api/index';
import { message } from 'antd';
import apiUrl from '../api/urlConfig';


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



/*
* 用户
* */
const { loginUrl, cookieUrl, userUrl } = apiUrl.user;

//登录
export function login(params){
    return function(dispatch,getState){
        post(loginUrl,params).then(d=>{
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
export function getCookie() {
    return function (dispatch,getState) {
        get(cookieUrl).then(d=>{
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
export function getUserInfo(){
    return function(dispatch,getState){
        get(userUrl).then(d=>{
            if(d.code === 0){ 
                dispatch(getUser(d.msg))
            }else{
                message.error(d.msg);
                return false
            }
        })
    }
}

/*
* 商品
* */

const { addUrl, getUrl } = apiUrl.goods.category.first;

//获取一级商品类别
function getGCategory(dispatch) {
    get(getUrl).then(d=>{
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
//添加一级商品类别
export function addGoodsFirst(params) {
    return function (dispatch,getState) {
        get(addUrl+params).then(d=>{
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



