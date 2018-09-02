import React from 'react'
import Link from 'gatsby-link'
import Headroom from 'react-headroom'
import { withPrefix } from 'gatsby-link'

const Header = ({ siteTitle }) => {
  // const isHomepage = location.pathname === withPrefix('/')
  const isContacts = location.pathname === withPrefix('/contacts')
  const isAboutus = location.pathname === withPrefix('/aboutus')
  const links = [
    {
      page: 'Home',
      path: '/',
    },
    {
      page: 'Events',
      path: '/events',
    },
    {
      page: 'Contacts',
      path: '/contacts',
    },
    {
      page: 'AboutUs',
      path: '/aboutus',
    },
  ]
  function getStyle() {
    if (isContacts || isAboutus) {
      return 'black'
    } else {
      return 'white'
    }
  }
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
          {links.map(link => (
            <Link
              to={link.path}
              style={{
                color: getStyle(),
                textDecoration: 'none',
                marginRight: '20px',
                display: 'inline-block'
              }}
            >
              {link.page}
            </Link>
          ))}
        </h1>
      </div>
    </Headroom>
  )
  
}

export default Header
