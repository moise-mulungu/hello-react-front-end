import { combineReducer } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "./greet";

const reducer = combineReducer ({
    helloReducer,
})

const store = configureStore ({
    reducer,
})

export default store;