import React from "react"
import ProductDetail from "../components/productDetail"

const Product = ({ pageContext }) => {
  return <ProductDetail {...pageContext} />
}

export default Product
