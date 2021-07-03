import * as React from "react"
import { Link } from "gatsby"
import { MenuItem, StyledHeader } from "../styles/components"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to="/">
      <img src="https://i.postimg.cc/6q3pg48v/Logo.png" alt="Logo" />
    </Link>
    <nav>
      <ul>
        <MenuItem margin>
          <Link to="Products">Products</Link>
        </MenuItem>
        <MenuItem margin>
          <a href="https://www.platzi.com">Platzi</a>
        </MenuItem>
        <MenuItem>
          <Link to="Cart">
            <span>
              <img src="https://i.postimg.cc/L6wpMxLt/cart.png" alt="Cart" />
            </span>
          </Link>
        </MenuItem>
      </ul>
    </nav>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </StyledHeader>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
