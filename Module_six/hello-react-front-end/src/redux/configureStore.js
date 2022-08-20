import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './hello';

const reducer = combineReducers({
  greetingReducer,
});

const store = configureStore({
  reducer,
});

export default store;
