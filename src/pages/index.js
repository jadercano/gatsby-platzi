import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Jumbo from "../components/jumbo"
import Products from "../components/products"

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    }
    allStripePrice {
      edges {
        node {
          currency
          unit_amount
          product {
            id
            name
            metadata {
              description
              img
              wear
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <Seo title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <Products products={data.allStripePrice.edges} />
  </>
)

export default IndexPage
