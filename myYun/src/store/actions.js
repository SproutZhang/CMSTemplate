import * as types from './actionTypes';
import {post,get} from '../api/index';


//登录
export function log(){
    return{
        type: types.LOGIN
    }
}

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
                document.cookie="islog=true";
                dispatch(log())
                window.location.href="/"
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
