import * as types from '../actionTypes';



let initState={
    allOrders:{},
    deliveryOrders: {},
    refundOrders: {}
}

export default function reducer_orders(state=initState, action){
    let o = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.GET_ALL_ORDER:
            o.allOrders = action.data;
            return o;

        case types.GET_DELIVERY_ORDER:
            o.deliveryOrders = action.data;
            return o;

        case types.GET_REFUND_ORDER:
            o.refundOrders = action.data;
            return o;

        default:
            return state


    }
    return state;
}