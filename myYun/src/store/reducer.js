import * as types from './actionTypes';

let islogin = document.cookie.split('=')[1]

let initState={
    islogin: islogin,
    userData:{}
}

export default function reducer(state=initState,action){
    let o = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.LOGIN:
            return {...state,islogin:true}
        case types.GET_USER_INFO:
            
             
            o.userData = action.data;
            return o


    }
    return state;
}