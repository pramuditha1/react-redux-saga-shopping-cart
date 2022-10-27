import { useDispatch } from 'react-redux'
import { addToCart } from './redux/action'

function App() {
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
    </div>
  );
}

export default App;
