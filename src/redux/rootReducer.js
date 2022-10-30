import { combineReducers } from "redux";
import { cartData } from './reducer'
import { productList} from './productReducer'

export default combineReducers({
    cartData,
    productList
})