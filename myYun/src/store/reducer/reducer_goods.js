import * as types from '../actionTypes';



let initState={

    goodsInfo:{}
}

export default function reducer_goods(state=initState, action){
    let o = JSON.parse(JSON.stringify(state))
    switch(action.type){


        default:
            return state


    }
    //return state;
}