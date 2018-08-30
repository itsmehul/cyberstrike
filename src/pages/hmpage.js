import React from 'react'
import Link from 'gatsby-link'

const hmPage = ({ data }) => (
  <div>
    <h1>CYBERSTRIKE</h1>
    <br/>
    <h2>5th AND 6th DECEMBER 2018</h2>
    
  </div>
)

export const pageQuery = graphql`
  query hmPage {
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

export default hmPage
