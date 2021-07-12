import React, { useContext, useState } from "react"
import Stars from "./stars"
import priceFormat from "../utils/priceFormat"
import {
  Tag,
  SizeButton,
  SizeSelect,
  QtyButton,
  QtySelect,
  StyledProductDetail,
  Button,
} from "../styles/components"
import SEO from "./seo"
import { CartContext } from "../context"

const ProductDetail = ({ unit_amount, currency, product }) => {
  const price = priceFormat(unit_amount)
  const [size, setSize] = useState(3)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useContext(CartContext)

  const handleSubmit = () => {
    addToCart({ ...product, currency, price: unit_amount, quantity })
  }

  return (
    <StyledProductDetail>
      <SEO title={product.name} />
      <img src={product.metadata.img} alt={product.name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{product.name}</h2>
        <b>{`${currency} ${price}`}</b>
        <Stars />
        {product.metadata.wear && <h3>Color: Original</h3>}
        <small>{product.metadata.description}</small>
        {product.metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
            <SizeButton onClick={() => setSize(5)}>XL</SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad</p>
        <QtySelect>
          <QtyButton
            onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : null)}
          >
            -
          </QtyButton>
          <input type="text" disabled value={quantity} />
          <QtyButton onClick={() => setQuantity(quantity + 1)}>+</QtyButton>
        </QtySelect>
        <Button onClick={handleSubmit}>Add to cart</Button>
      </div>
    </StyledProductDetail>
  )
}

export default ProductDetail
