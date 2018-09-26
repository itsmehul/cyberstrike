import React from 'react'
import team from '../data/contacts.json'
import styles from './post.module.css'
import PageTransition from 'gatsby-plugin-page-transitions'

export default function Template({ data }) {

  const { markdownRemark: post } = data
  const {
    title,
    short,
    maindesc,
    fee,
    teamSize,
    Type,
    Date,
    widescreen,
    game,
  } = post.frontmatter
  const head = team.support.filter(team => team.head === game)
  console.log(teamSize)
  return (
    <PageTransition
    defaultStyle={{
      transition: 'left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
      left: '100%',
      position: 'absolute',
      padding: '2em',
      width: '100%',
    }}
    transitionStyles={{
      entering: { left: '0%' },
      entered: { left: '0%' },
      exiting: { left: '100%' },
    }}
    transitionTime={500}
  >
    <div>
      <div className={styles.grid}>
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
      <div className={styles.p}>
      <h1 className={styles.maineventhead}>{title}</h1></div>
      <div className={styles.m}>
      <h3>{short}</h3>
      <h1>{maindesc}</h1>
      </div>
      <div className={styles.pr}>
      <p>Price: {fee}</p>
      {teamSize!==""&&
      <p>Team Size: {teamSize}</p>}</div>
      <div className={styles.ty}>
      <p>Type: {Type}</p></div>
      <div className={styles.dt}>
      <p className={styles.maineventdate}>{Date}</p></div>
      {/*<p>Invigilator</p>
        <ContactCard name={head[0].name} head={head[0].head} contact={head[0].contact}/> */}
    </div>
    <button onClick={()=>(popup('cyberstrike'))} class="tsbutton" className={styles.regbtn}>Register Here!</button>
    </div>
    </PageTransition>
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
        maindesc
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
