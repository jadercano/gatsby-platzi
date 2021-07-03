import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Jumbo from "../components/jumbo"

export const query = graphql`
  query GET_SITEMETADATA {
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
  }
`

const IndexPage = ({ data }) => (
  <>
    <Seo title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </>
)

export default IndexPage
