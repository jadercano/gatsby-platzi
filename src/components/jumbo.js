import React from "react"
import { StyledJumbo } from "../styles/components"
import Image from "./image"

const Jumbo = ({ description }) => {
  return (
    <StyledJumbo>
      <div>
        <h2>Get the best and exclusive Platzi Swag</h2>
        <small>{description}</small>
      </div>
      <Image name="icon" />
    </StyledJumbo>
  )
}

export default Jumbo
