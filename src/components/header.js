import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'
import Headroom from 'react-headroom'
import { withPrefix } from 'gatsby-link'


const Header = ({ siteTitle }) => {
  // const isHomepage = location.pathname === withPrefix('/')
  const isContacts = location.pathname === withPrefix('/contacts')
  const isAboutus = location.pathname === withPrefix('/aboutus')
  const links = [
    {
      page: 'HOME',
      path: '/',
    },
    {
      page: 'EVENTS',
      path: '/events',
    },
    {
      page: 'CONTACT US',
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
        background: 'rgba(0, 0, 0, 0.0)',
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
            <Link  className={styles.fontfam}
              to={link.path}
              style={{
                color: getStyle(),
                textDecoration: 'none',
<<<<<<< HEAD
                marginRight: '50px',
=======
                marginRight: '20px',
                display: 'inline-block'
>>>>>>> be6c67d13ac38ce6b70076c4226f4efff3a667e5
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
