import React from 'react'
import Link from 'gatsby-link'

const hmPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>This is a cfdf </p>

    <h1>Index</h1>
    
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
