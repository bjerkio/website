import { Link } from 'gatsby'
import React from 'react'
import logo from './logo.svg'

const Footer = () => (
  <div
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `70vw`,
        paddingTop: `1.45rem`,
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
          <img
            src={logo}
            style={{
              width: `3rem`,
            }}
            alt="Logo"
          />
        </Link>
      </h1>
      <p>998 732 867 MVA</p>
      <p>
        Dronningens gate 8B
        <br />
        NO-0151 Oslo
        <br />
        Norway
      </p>
    </div>
  </div>
)

export default Footer