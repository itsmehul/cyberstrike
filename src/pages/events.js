import React from 'react'
import { withPrefix } from 'gatsby-link'
import styles from './events.module.css'
import Link from 'gatsby-link'
import { Shadow, Grid, Heading, Image, Paragraph, Card, Arrow } from 'reakit'

const EventsPage = ({ data }) => {

  return (
    <Grid columns="repeat(auto-fill, minmax(250px,350px))" autoRows="auto" gap="3vw" style={{margin: "0px auto"}}>
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
          <Grid.Item align-self="center">
            <Card >
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
