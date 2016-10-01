import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-user-active';
import ReducerCounter from './reducer-counter';
import PopupReducer from './reducer-popup';
import NewsReducer from './reducer_news';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    counter: ReducerCounter,
    popup: PopupReducer,
    news: NewsReducer,
    routing: routerReducer
});

export default allReducers;