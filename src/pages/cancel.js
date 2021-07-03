import React from "react"
import Seo from "../components/seo"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

const Cancel = () => {
  return (
    <>
      <Seo title="Successful Buy" />
      <Purchase>
        <h2>Buy cancelled</h2>
        <p>We are sorry you cancelled your buy!</p>
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

export default Cancel
