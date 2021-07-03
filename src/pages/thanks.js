import React from "react"
import Seo from "../components/seo"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

const Thanks = () => {
  return (
    <>
      <Seo title="Successful Buy" />
      <Purchase>
        <h2>Successful buy</h2>
        <p>We hope you enjoy your Swag!</p>
        <p>Waiting for you to back soon! Never stop learning!</p>
        <span rol="img" aria-label="emoji">
          ❤
        </span>
        <Link>
          <Button>Back Home</Button>
        </Link>
      </Purchase>
    </>
  )
}

export default Thanks
