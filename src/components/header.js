import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'
import Headroom from 'react-headroom'
import { withPrefix } from 'gatsby-link'


const Header = ({ siteTitle }) => {
  const isHomepage = location.pathname === withPrefix('/')
  const isContacts = location.pathname === withPrefix('/contacts')
  if (isHomepage) {
    return (
      <Headroom
        style={{
          
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
                marginRight: '20px',
              }}
            >
              Events
            </Link>
            <Link
              to="/contacts"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Contacts
            </Link>
          </h1>
        </div>
      </Headroom>
    )
  } else if(isContacts){
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
                color: 'black',
                textDecoration: 'none',
                marginRight: '20px',
                marginRight: '20px',
              }}
            >
              HOME
            </Link>
            <Link
              to="/events"
              style={{
                color: 'black',
                textDecoration: 'none',
                marginRight: '20px',
              }}
            >
              EVENTS
            </Link>
            <Link
              to="/contacts"
              style={{
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Contacts
            </Link>
          </h1>
        </div>
      </Headroom>
    )
  }else{
        return (
      <Headroom
        style={{
          
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
          <h1 className={styles.fontfam} style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                
                color: 'white',
                textDecoration: 'none',
                marginRight: '20px',
              }}
            >
              HOME
            </Link>
            <Link
              to="/events"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '20px',
              }}
            >
              EVENTS
            </Link>
            <Link
              to="/contacts"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              CONTACTS
            </Link>
          </h1>
        </div>
      </Headroom>
    )
  }
}

export default Header
