import * as types from '../actionTypes';
import Cookies from 'js-cookie'

let name = Cookies.get("username")
let avatar = Cookies.get("avatar")

let initState={
    user:{
        name: name,
        avatar:avatar,
    },
    isLogin: name?true:false,
    userData:{},
    curUserData:[]
}

export default function reducer_user(state=initState, action){
    let o = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.LOGIN:
            o.user.name = action.data.name;
            o.user.avatar = action.data.avatar;
            o.isLogin = true;
            return o

        case types.GET_USER_INFO:
            o.userData = action.data;
            return o

        case types.CUR_USER_INFO:
            o.curUserData = action.data;
            return o

        default:
            return state


    }
    return state;
}