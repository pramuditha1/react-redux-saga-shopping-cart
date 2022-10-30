// import { createStore } from "redux";
// createStore should replace with configureStore provided by redux/toolkit
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga"
import productSaga from './sagas/productSaga';

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
})

sagaMiddleware.run(productSaga)

export default store;