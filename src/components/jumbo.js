import React from "react"
import { StyledJumbo } from "../styles/components"

const Jumbo = ({ description }) => {
  return (
    <StyledJumbo>
      <div>
        <h2>Get the best and exclusive Platzi Swag</h2>
        <small>{description}</small>
      </div>
    </StyledJumbo>
  )
}

export default Jumbo
