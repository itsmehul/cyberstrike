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
      <div>
      <div className={styles.sizevary} >
        <img
          src={widescreen}
          style={{
            height: 'auto',
            width: '100%',
            boxShadow: '0 2px 5px rgba(0, 0, 4, 0.6)',
            
          }}
        />
      </div>
      <h1 className={styles.maineventhead}>{title}</h1>
      <div className={styles.maineventdescription}>
      <h3>{short}</h3>
      <p>Price: {fee}</p>
      <p>Team Size: {teamSize}</p>
      <p>Type: {Type}</p>
      </div>
      <p className={styles.maineventdate}>{Date}</p>
      {/*<p>Invigilator</p>
        <ContactCard name={head[0].name} head={head[0].head} contact={head[0].contact}/> */}
    </div>
    <button onClick={()=>(popup('cyberstrike'))} class="tsbutton" className={styles.regbtn}>Register Here!</button>
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
