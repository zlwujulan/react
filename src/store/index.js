import {createStore, combineReducers} from 'redux';
import * as userinfo from './userinfo';
import * as store from './store';
export default createStore(
    combineReducers(
        userinfo,
        store
    )
);
