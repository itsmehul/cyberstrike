import React from 'react'
import team from '../data/contacts.json'
import ContactCard from '../components/contacts';
import styles from './post.module.css'


export default function Template({ data }) {
   document.body.style.background =
     'url(https://image.ibb.co/hQk0QK/fondo_web_02.jpg)'
  const { markdownRemark: post } = data
  const {
    title,
    short,
    fee,
    teamSize,
    Type,
    Date,
    widescreen,
    game
  } = post.frontmatter
  const head=team.support.filter(
    team=>team.head===game
  )
  console.log(head[0].name)
  return (
    <div>
      <div style={{height:'200px', width:'100%', overflow:'hidden',borderRadius:'10px'}}>
        <img src={widescreen} style={{height:'auto',width:'100%', borderRadius:'10px',boxShadow: '0 2px 5px rgba(0, 0, 4, 0.6)'}}/>
      </div><br />
      <h1 className={styles.maineventhead}>{title}</h1><br />
      <h3 className={styles.maineventdescription}>{short}</h3><br />
      <p className={styles.maineventdate}>{Date}</p>
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
