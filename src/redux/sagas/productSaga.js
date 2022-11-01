import { takeEvery, put } from 'redux-saga/effects'
import { FILTER_PRODUCTS, PRODUCT_LIST, SET_PRODUCT_LIST } from '../constants'
//worker saga
function* getProductList() {
    let data = yield fetch("http://localhost:3500/products")
    data = yield data.json()
    yield put({type: SET_PRODUCT_LIST, data})
}

//this worker saga receives both action and searchText as arguments when action return both. see action filterProductList
function* filterProductList(data) {
    let result = yield fetch(`http://localhost:3500/products?q=${data.searchText}`)
    result = yield result.json()
    yield put({type: SET_PRODUCT_LIST, data: result})
}

//watcher saga
function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProductList)
    yield takeEvery(FILTER_PRODUCTS, filterProductList)
}

export default productSaga