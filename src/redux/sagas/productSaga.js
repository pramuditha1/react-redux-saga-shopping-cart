import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from '../constants'
//worker saga
function* getProductList() {
    let data = yield fetch("http://localhost:3500/products")
    data = yield data.json()
    yield put({type: SET_PRODUCT_LIST, data})
}
//watcher saga
function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProductList)
}

export default productSaga