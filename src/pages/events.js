import React from 'react'
import { withPrefix } from 'gatsby-link'
import styles from "./events.module.css";

const EventsPage = ({ data }) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(post => {
        const {src, title, short, fee, teamSize, type}=post.node.frontmatter
        return (
          <div>
            <div>
              <img src={withPrefix(src)} />
            </div>
            <div className={styles.title}>{title}</div>
            <div>{short}</div>
          </div>
        )
      })}
    </div>
  )
}

export const pageQuery = graphql`
  query EventsQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            src
            short
          }
        }
      }
    }
  }
`

export default EventsPage
