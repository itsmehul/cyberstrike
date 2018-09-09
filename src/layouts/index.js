import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import { withPrefix } from 'gatsby-link'
import styles from './index.module.css'

const Layout = ({ children, data }) => {
  if (typeof window !== `undefined`) {
  var isHomepage = location.pathname === withPrefix('/')
  var isEvents = location.pathname === withPrefix('/events')
  var isAboutus = location.pathname === withPrefix('/aboutus')
  var isContact = location.pathname === withPrefix('/contacts')
  }

  return (
    <div>
      {isEvents && (
        <img
          src="https://image.ibb.co/hQk0QK/fondo_web_02.jpg"
          className={styles.wide}
        />
      )}
      {isHomepage && (
        <video autoPlay muted loop className={styles.myVideo}>
          <source src="static/homevidtest.mp4" type="video/mp4" />
        </video>
      )}
      {
        !isHomepage && (
           <img
          src="https://image.ibb.co/hQk0QK/fondo_web_02.jpg"
          className={styles.wide}
        />
        )
      }

      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: '0 auto',
          marginTop:-5,
          maxWidth: 1366,
          padding: '20px',
          paddingTop:30,
        }}
      >
        {children()}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
