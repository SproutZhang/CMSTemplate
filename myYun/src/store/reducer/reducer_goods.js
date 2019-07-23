import * as types from '../actionTypes';



let initState={
    goodsInfo:{},
    goodsFirst:{},
    curFirstData: [],
    goodsSecond:{},
    curSecondData: [],
}

export default function reducer_goods(state=initState, action){
    let o = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.GET_GOODS_FIRST:
            o.goodsFirst = action.data;
            return o;

        case types.GET_GOODS_SECOND:
            o.goodsSecond = action.data;
            return o;

        case types.CUR_GOODS_FIRST:
            o.curFirstData = action.data;
            return o;

        case types.CUR_GOODS_SECOND:
            o.curSecondData = action.data;
            return o;
        default:
            return state


    }
    return state;
}