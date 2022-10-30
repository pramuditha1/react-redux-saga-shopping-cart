// import { createStore } from "redux";
// createStore should replace with configureStore provided by redux/toolkit
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from "./rootReducer";

const store = configureStore({reducer: rootReducer})

export default store;