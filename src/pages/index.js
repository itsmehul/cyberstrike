import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'

const IndexPage = ({ data }) => {
  
  return (
    <div className={styles.overlayblack}>
      <div className={styles.testsplash}>
        <img className={styles.logo1} src="static/assets/dcclogocompressed.png" width="65vw" height="65vw"></img>
        <img className={styles.logo2} src="static/assets/jhclogocompressed.png" width="65vw" height="75vw"></img>
        <div className={styles.centeringdiv}>
          <img className={styles.logomain} src="static/assets/CYBERSTRIKELogoWHITE.png" width="790vw" height="240vw"></img>
          <h1 className={styles.testdatetext}>5<sup>TH</sup> & 6<sup>TH</sup> DECEMBER 2018</h1>
        </div>
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
