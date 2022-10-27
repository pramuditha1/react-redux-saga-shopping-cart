import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart, emptyCart } from '../redux/action'

function Main() {
  const dispatch = useDispatch();
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
    </div>
  );
}

export default Main;
