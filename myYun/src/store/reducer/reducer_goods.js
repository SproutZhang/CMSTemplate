import * as types from '../actionTypes';



let initState={

    goodsInfo:{},
    goodsFirst:{}
}

export default function reducer_goods(state=initState, action){
    let o = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.GET_GOODS_FIRST:
            o.goodsFirst = action.data;
            return o;

        default:
            return state


    }
    return state;
}