import React from 'react'
import styles from './events.module.css'
import Link from 'gatsby-link'

const EventsPage = ({ data }) => {
  document.body.style.background =
    'url(https://image.ibb.co/hQk0QK/fondo_web_02.jpg)'

    const games = data.allMarkdownRemark.edges.filter(game=>game.node.frontmatter.genre==='game')
    const events = data.allMarkdownRemark.edges.filter(event=>event.node.frontmatter.genre==='event')

  return (
    <div>
      <div className={styles.eventhead}>GAMES & EVENTS</div><br />
      <h2 className={styles.eventsubhead}>Games</h2>
    
      <div><div><div>
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
      <h1 className={styles.eventhead}>Games</h1>
      <div className={styles.grid}>
        {games.map(post => {
          const { src, title, short, path } = post.node.frontmatter
          return (
            <div>
              <div className={styles.eventCards}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.eventimages}
                  style={{ height: '300px', width: '100%', overflow: 'hidden'}}
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
            genre
          }
        }
      }
    }
  }
`

export default EventsPage
