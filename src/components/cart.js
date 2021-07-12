import { Link } from "gatsby"
import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../context"
import { Button, StyledCart } from "../styles/components"
import priceFormat from "../utils/priceFormat"

const Cart = () => {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  const getTotal = () => {
    if (cart && cart.length > 0) {
      setTotal(
        cart.reduce((acc, current) => acc + current.price * current.quantity, 0)
      )
    }
  }

  useEffect(() => {
    getTotal()
  }, [])

  return (
    <StyledCart>
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.metadata.img} alt={product.name} />{" "}
                {product.name}{" "}
              </td>
              <td>{`${product.currency} ${priceFormat(product.price)}`}</td>
              <td>{product.quantity}</td>
              <td>{priceFormat(product.quantity * product.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal: </h3>
          <small>
            {cart.length > 0 ? `${cart[0].currency} ${priceFormat(total)}` : ""}
          </small>
        </div>
        <div>
          <Link to="/">
            <Button type="outline">Go back</Button>
          </Link>
          <Button>Buy</Button>
        </div>
      </nav>
    </StyledCart>
  )
}

export default Cart
