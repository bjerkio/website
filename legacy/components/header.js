import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import logo from './logo.svg';
import Navigation from './Navigation/navigation';

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `70vw`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        <img src={logo} style={{
          width: `6rem`
        }} alt="Logo" />
        </Link>
      </h1>
      <Navigation />
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
