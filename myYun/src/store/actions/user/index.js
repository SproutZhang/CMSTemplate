import * as types from '../../actionTypes';
import {post,get} from '../../../api/index';
import { message } from 'antd';
import apiUrl from '../../../api/urlConfig';


//获取用户信息
function getUser(data){
    return{
        type: types.GET_USER_INFO,
        data
    }
}


/*
* 用户
* */
const { loginUrl, cookieUrl, userUrl, userEdit, userDel } = apiUrl.user;

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
function getMyUsers(dispatch) {
    get(userUrl).then(d=>{
        if(d.code === 0){
            dispatch(getUser(d.msg))
        }else{
            message.error(d.msg);
            return false
        }
    })
}
export function getUserInfo(){
    return function(dispatch,getState){
        getMyUsers(dispatch)
    }
}
//通过id获取用户信息
export function getThisUser(params){
    return function(dispatch,getState){
        get(userUrl+params).then(d=>{
            if(d.code === 0){
                dispatch({
                    type: types.CUR_USER_INFO,
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
export function editUser(params) {
    return function (dispatch,getState) {
        get(userEdit+params).then(d=>{
            if(d.code === 0){
                message.success(d.msg);
                getMyUsers(dispatch)
            }else{
                message.error(d.msg);
                return false
            }
        })
    }
}
//删除用户
export function delUser(params) {
    return function (dispatch,getState) {
        get(userDel+params).then(d=>{
            if(d.code === 0){
                message.success(d.msg);
                getMyUsers(dispatch)
            }else{
                message.error(d.msg);
                return false
            }
        })
    }
}