import React, { useState } from "react"
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

const ProductDetail = ({
  unit_amount,
  currency,
  product: { id, name, metadata },
}) => {
  const price = priceFormat(unit_amount)
  const [size, setSize] = useState(3)
  const [quantity, setQuantity] = useState(1)
  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>{`${currency} ${price}`}</b>
        <Stars />
        {metadata.wear && <h3>Color: Original</h3>}
        <small>{metadata.description}</small>
        {metadata.wear && (
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
          <button
            onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : null)}
          >
            -
          </button>
          <input type="text" disabled value={quantity} />
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </QtySelect>
        <Button>Add to cart</Button>
      </div>
    </StyledProductDetail>
  )
}

export default ProductDetail
