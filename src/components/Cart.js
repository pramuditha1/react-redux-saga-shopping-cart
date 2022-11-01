import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const cartData = useSelector((state) => state.cartData)
  return (
    <div>
        {
            cartData.map(
                (cartItem) => (
                    <p>{JSON.stringify(cartItem)}</p>
                )
            )
        }
    </div>
  )
}

export default Cart