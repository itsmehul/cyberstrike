import React from 'react'
import { withPrefix } from 'gatsby-link'
import styles from './events.module.css'
import Link from 'gatsby-link'
import { Heading, Image, Card } from 'reakit'

const EventsPage = ({ data }) => {
  document.body.style.background =
    'url(https://image.ibb.co/hQk0QK/fondo_web_02.jpg)'

  return (
    <div>
      <div className={styles.eventhead}>GAMES & EVENTS</div>

      <div className={styles.grid}>
        {data.allMarkdownRemark.edges.map(post => {
          const {
            src,
            title,
            short,
            path
          } = post.node.frontmatter
          return (
            <div>
              <div className={styles.eventCards}>
                <h1 className={styles.title}>{title}</h1>
                <div
                  style={{ height: '200px', width: '100%', overflow: 'hidden' }}
                >
                  <img src={src} style={{ height: 'auto', width: '100%' }} />
                </div>

                <p className={styles.eventpara}>{short}</p>

                <div className={styles.eventlinkdiv}>
                  <Link className={styles.eventlink} to={path}>
                    MORE INFO
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
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
