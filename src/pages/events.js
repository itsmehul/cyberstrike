import React from 'react'
import { withPrefix } from 'gatsby-link'
import styles from "./events.module.css";
import Link from "gatsby-link";

const EventsPage = ({ data }) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(post => {
        const {src, title, short, fee, teamSize, type, path}=post.node.frontmatter
        return (
          <div style={{
            borderStyle: "solid",
            borderWidth:"5px",
            margin: "5px"
            }}>
            <div>
              <img src={src} />
            </div>
            <div className={styles.title}>{title}</div>
            <div>{short}</div>
            <Link to={path}>More Info</Link>
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
