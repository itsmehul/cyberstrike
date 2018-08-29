import React from 'react'
import { withPrefix } from 'gatsby-link'
import styles from './events.module.css'
import Link from 'gatsby-link'
import { Shadow, Grid, Heading, Image, Paragraph, Card } from 'reakit'

const EventsPage = ({ data }) => {

  return (
    <Grid columns="repeat(2, 1fr)" autoRows="auto" gap="3vw">
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
          <Grid.Item>
            <Card>
            <Shadow depth={9} />
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
          </Grid.Item>
        )
      })}
    </Grid>
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
