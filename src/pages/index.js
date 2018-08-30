import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'

const IndexPage = ({ data }) => (
  <div className={styles.splash}>
    <video className={styles.bgvid} autoplay="true">
      <source src="static/vidhome.mp4" type="video/mp4" />
    </video>
  </div>
)

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
