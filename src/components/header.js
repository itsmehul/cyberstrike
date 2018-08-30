import React from 'react'
import Link from 'gatsby-link'
import Headroom from 'react-headroom'
import { withPrefix } from 'gatsby-link'

const Header = ({ siteTitle }) => {
  const isHomepage = location.pathname === withPrefix('/')
  if (!isHomepage) {
    return (
      <Headroom
        style={{
          background: 'rgb(3, 21, 51)',
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '20px',
              }}
            >
              Home
            </Link>
            <Link
              to="/events"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Events
            </Link>
          </h1>
        </div>
      </Headroom>
    )
  } else {
    return (
      <Headroom
        style={{
          background: 'transparent',
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '20px',
              }}
            >
              Home
            </Link>
            <Link
              to="/events"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Events
            </Link>
          </h1>
        </div>
      </Headroom>
    )
  }
}

export default Header
