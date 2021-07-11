import React from "react"
import { Link } from "gatsby"
import priceFormat from "../utils/priceFormat"
import { StyledProducts } from "../styles/components"

const Products = ({ products }) => {
  return (
    <StyledProducts>
      <h2>Products</h2>
      <section>
        {products.map(({ node }) => {
          const price = priceFormat(node.unit_amount)
          return (
            <article key={node.product.id}>
              <img src={node.product.metadata.img} alt={node.product.name} />
              <p>{node.product.name}</p>
              <small>{`${node.currency} ${price}`}</small>
              <Link to={`/${node.product.id}`}>Buy now</Link>
            </article>
          )
        })}
      </section>
    </StyledProducts>
  )
}

export default Products
