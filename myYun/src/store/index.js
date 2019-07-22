import { createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';

import reducer_user from './reducer/reducer_user'
import reducer_goods from './reducer/reducer_goods'
import reducer_orders from './reducer/reducer_order'

//合并多个reducer
const reducers = combineReducers({
    reducer_user,  //用户的
    reducer_goods,  //商品的
    reducer_orders  //商品的
})

const store = createStore(reducers,applyMiddleware(thunk));

export default store;