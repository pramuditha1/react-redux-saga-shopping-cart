import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart, emptyCart } from '../redux/action'
import { getProductList } from '../redux/productActions'
import { useSelector } from 'react-redux';

function Main() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productList)
  console.log("################################# ",productData)
  const product = {
    name: 'iPhone',
    category: 'mobile',
    price: 1000,
    color: 'red'
  }
  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
      <button onClick={() => dispatch(removeFromCart(product))}>Remove from cart</button>
      <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
      <br/>
      <button onClick={() => {dispatch(getProductList())}}>Product list</button>
    </div>
  );
}

export default Main;
