import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import { withPrefix } from 'gatsby-link'
import styles from './index.module.css'

const Layout = ({ children, data }) => {
  const isHomepage = location.pathname === withPrefix('/')
  const isEvents = location.pathname === withPrefix('/events')
  const isAboutus = location.pathname === withPrefix('/aboutus')

  return (
    <div>
      {isEvents && (
        <img
          src="https://image.ibb.co/hQk0QK/fondo_web_02.jpg"
          className={styles.wide}
        />
      )}
      {isHomepage && (
        // <video height="200%" width="200%" autoPlay muted loop className={styles.wide}>
        //   <source src="static/vidhome.mp4" type="video/mp4" />
        // </video>
        <video autoPlay muted loop className={styles.myVideo}>
          <source src="static/vidhome.mp4" type="video/mp4" />
        </video>
      )}
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
          marginTop: -5,
          maxWidth: 960,
          padding: '0px',
          paddingTop: 0,
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
