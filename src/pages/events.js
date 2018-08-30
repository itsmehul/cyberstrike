import React from 'react'
import { withPrefix } from 'gatsby-link'
import styles from './events.module.css'
import Link from 'gatsby-link'
import { Shadow, Grid, Heading, Image, Paragraph, Card, Arrow } from 'reakit'

const EventsPage = ({ data }) => {
  document.body.style.background="#000000";

  return (
    <div className={styles.grid}>
      {data.allMarkdownRemark.edges.map(post => {
        const {
          src,
          title,
          short,
          fee,
          teamSize,
          type,
          path,
        } = post.node.frontmatter
        return (
          <div>
            <Card className={styles.eventCard}>
              <Heading
              className={styles.title}
              >{title}</Heading>
              <Card.Fit
                as={Image}
                src={src}
                alt="Kitten"
                width="100%"
                height="auto"
              />

              <Paragraph>{short}</Paragraph>
              <Link to={path}
              style={{textDecoration:"none", color: "black"}}
              >More Info</Link>
            </Card>
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
