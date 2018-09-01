import React from 'react'
import { withPrefix } from 'gatsby-link'
import styles from './testevents.module.css'
import Link from 'gatsby-link'
import { Shadow, Grid, Heading, Image, Paragraph, Card, Arrow } from 'reakit'

const TestEventsPage = ({ data }) => {
  document.body.style.background = "rgb(1, 1, 1)";

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
            <Card className={styles.eventCardscss}>
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

              <Paragraph className={styles.paraevents}>{short}</Paragraph>
              <Link to={path}
              style={{textDecoration:"none", color: "white"}}
              >More Info</Link>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export const pageQuery = graphql`
  query TestEventsQuery {
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

export default TestEventsPage
