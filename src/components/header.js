import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'
import Headroom from 'react-headroom'
import { withPrefix } from 'gatsby-link'


const Header = ({ siteTitle }) => {
  if (typeof window !== `undefined`) {
  var isHomepage = location.pathname === withPrefix('/')
  var isContacts = location.pathname === withPrefix('/contacts')
  var isAboutus = location.pathname === withPrefix('/aboutus')
  }
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
    }
  ]
  function getStyle() {
    
      return 'white'
  }
  function getBackground() {
    if (isHomepage) {
      return 'transparent'
    } else {
      return '#000000c4'
    }
  }
  return (
    <Headroom
      style={{
        
        background: getBackground(),
        marginBottom: '1.45rem',
        
      }}
    >
      <div
        style={{
          paddingLeft: '50px',
          textAlign:'center',
          margin: '0 auto',
          maxWidth: 1500,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <h1 style={{ margin: 0 ,textAlign:'center'}}>
          {links.map(link => (
            <Link  className={styles.fontfam}
              to={link.path}
              style={{
                
                color: getStyle(),
                textDecoration: 'none',
                marginRight:30,
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
