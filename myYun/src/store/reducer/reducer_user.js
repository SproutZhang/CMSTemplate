import * as types from '../actionTypes';

let name = document.cookie.split('=')[1]

let initState={
    user:{
        name: name,
        avatar:'',
    },
    isLogin: name?true:false,
    userData:{}
}

export default function reducer_user(state=initState, action){
    let o = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.LOGIN:
            o.user.name = action.data.name;
            o.user.avatar = action.data.avatar;
            o.isLogin = true;
           // console.log(o)
            return o

        case types.GET_USER_INFO:
            o.userData = action.data;
            return o

        default:
            return state


    }
    return state;
}