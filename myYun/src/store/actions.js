import * as types from './actionTypes';
import {post,get} from '../api/index';



export function getUser(data){
    return{
        type: types.GET_USER_INFO,
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
                alert(d.msg)
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
                alert(d.msg)
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
                alert(d.msg)
                return false
            }
        })
    }
}
