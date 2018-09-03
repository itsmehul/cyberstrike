import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'

const IndexPage = ({ data }) => {
  
  return (
    <div className={styles.overlayblack}>
      <div className={styles.testsplash}>
        <img className={styles.logo1} src="static/assets/dcclogo.png" width="65vw" height="65vw"></img>
        <img className={styles.logo2} src="static/assets/jhclogo.png" width="65vw" height="75vw"></img>
        <h1 className={styles.testtext}>CYBERSTRIKE</h1>
        <h1 className={styles.testdatetext}>5th AND 6th DECEMBER 2018</h1>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            src
            fee
          }
        }
      }
    }
  }
`

export default IndexPage
