import React from 'react'
import team from '../data/contacts.json'
import ContactCard from '../components/contacts'
import styles from './post.module.css'

export default function Template({ data }) {

  const { markdownRemark: post } = data
  const {
    title,
    short,
    fee,
    teamSize,
    Type,
    Date,
    widescreen,
    game,
  } = post.frontmatter
  const head = team.support.filter(team => team.head === game)
  console.log(head[0].name)
  return (
    <div>
      <div style={{ height: '290px', width: '100%', overflow: 'hidden' }}>
        <img
          src={widescreen}
          style={{
            height: 'auto',
            width: '100%',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0, 0, 4, 0.6)',
          }}
        />
      </div>
      <h1 className={styles.maineventhead}>{title}</h1>
      <h3 className={styles.maineventdescription}>{short}</h3>
      {/* <p>{fee}</p>
      <p>{teamSize}</p>
  <p>{Type}</p>*/}
      <p className={styles.maineventdate}>{Date}</p>
      {/*<p>Invigilator</p>
        <ContactCard name={head[0].name} head={head[0].head} contact={head[0].contact}/> */}
    </div>
  )
}

export const postQuery = graphql`
  query GetEventData($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        short
        fee
        teamSize
        Type
        Date
        widescreen
        game
      }
    }
  }
`
