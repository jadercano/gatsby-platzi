/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve("src/templates/product.js")
  const result = await graphql(`
    query GET_PRODUCTS {
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
  `)

  if (result.errors) {
    throw result.errors
  }

  result.data.allStripePrice.edges.forEach(({ node }) => {
    createPage({
      path: `${node.product.id}`,
      component: productTemplate,
    })
  })
}
