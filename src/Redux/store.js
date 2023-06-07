import {applyMiddleware} from 'redux';
import appReducer from './reducer';
import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit'

const middleware = [thunk];

const store = configureStore({reducer: appReducer},applyMiddleware(...middleware));
export default store;
