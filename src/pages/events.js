import React from 'react'
import { withPrefix } from 'gatsby-link'
import styles from './events.module.css'
import Link from 'gatsby-link'
import { Shadow, Grid, Heading, Image, Paragraph, Card, Arrow } from 'reakit'
            

const EventsPage = ({ data }) => {
  document.body.style.background = "url(https://image.ibb.co/hQk0QK/fondo_web_02.jpg)";
  <div>
    <h1>GAMES & EVENTS</h1>
    
  </div>
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
            <div className={styles.eventCards}>
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

              <Paragraph className={styles.eventpara}>{short}</Paragraph>
              <div className={styles.eventlinkdiv}>
                <Link className={styles.eventlink} to={path}>MORE INFO</Link>
              </div>
              
            </div>
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
