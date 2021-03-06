import React from 'react'
import styles from './events.module.css'
import Link from 'gatsby-link'

const EventsPage = ({ data }) => {

    const games = data.allMarkdownRemark.edges.filter(game=>game.node.frontmatter.genre==='game')
    const events = data.allMarkdownRemark.edges.filter(event=>event.node.frontmatter.genre==='event')

  return (
    <div>

      <h1 className={styles.eventhead}>GAMES & EVENTS</h1><br />
      <h1 className={styles.eventsubhead}>Games!</h1>
      <div className={styles.grid}>
        {games.map(post => {
          const { src, title, short, path } = post.node.frontmatter
          return (
            <div>
              <div className={styles.eventCards}>
              <Link className={styles.eventlinkcard} to={path}>
                <h1 className={styles.title}>{title}</h1>
                <div
                  style={{
                    height: '300px',
                    width: '100%',
                    overflow: 'hidden',
                    paddingRight: '2px',
                    paddingLeft: '2px',
                  }}
                >
                  <img src={src} style={{ height: 'auto', width: '100%' }} />
                </div><div style={{paddingBottom:'2px'}}></div>
                </Link>

                
              </div>
            </div>
          )
        })}
      </div>
      <br /><br />
      <h1 className={styles.eventsubhead}>Events!</h1>
      <div className={styles.grid}>
        {events.map(post => {
          const { src, title, short, path } = post.node.frontmatter
          return (
            <div>
              <div className={styles.eventCards}>
              < Link className = {
                styles.eventlinkcard
              }
              to = {
                path
              } >
                <h1 className={styles.title}>{title}</h1>
                <div
                  style={{
                    height: '300px',
                    width: '100%',
                    overflow: 'hidden',
                    paddingRight: '2px',
                    paddingLeft: '2px',
                  }}
                >
                  <img src={src} style={{ height: 'auto', width: '100%' }} />
                </div><div style={{paddingBottom:'2px'}}></div>
                  </Link>

               
              </div>
            </div>
          )
        })}
      </div>
        <button onClick={()=>(popup('cyberstrike'))} class="tsbutton" className={styles.regbtn}>Register Here!</button>
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