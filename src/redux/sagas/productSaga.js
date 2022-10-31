import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from '../constants'

function* getProductList() {
    let data = yield fetch("http://localhost:3500/products")
    data = yield data.json()
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProductList)
}

export default productSaga