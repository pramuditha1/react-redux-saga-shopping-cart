import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart, emptyCart } from '../redux/action'
import { getProductList } from '../redux/productActions'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
  let productData = useSelector((state) => state.productList)

  useEffect(() => {
    dispatch(getProductList())
  }, [dispatch])

  return (
    <div className="App">
      <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
      <div className='product-container'>
        {
          productData.map((product) => (
            <div key={product.id} className='product-item'>
              <img src={product.image} alt=""/>
              <div>{product.name}</div>
              <div>{product.brand}</div>
              <div>{product.color}</div>
              <div>{product.price}</div>

              <div>
              <button onClick={() => dispatch(addToCart(product))} >Add to Cart</button>
              <button onClick={() => dispatch(removeFromCart(product.id))}>Remove from cart</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Main;
