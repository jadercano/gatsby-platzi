import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const Image = ({ name }) => {
  const GET_IMAGE = graphql`
    query GET_IMAGE {
      icon: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          gatsbyImageData(formats: [AUTO, WEBP])
        }
      }
    }
  `
  const data = useStaticQuery(GET_IMAGE)

  const image = getImage(data[name])

  return <GatsbyImage image={image} alt={name}></GatsbyImage>
}

export default Image
