import React from 'react'
import Link from 'gatsby-link'
import Contact from '../components/contacts'
import contactsData from '../data/contacts.json'
import styles from './contacts.module.css'

const contactUs = ({ data }) => {
  document.body.style.background = "white";



  console.log(Object.values(contactsData))
  return (
    <div id="map">
      <div style={{padding:'10px'}}> 
        <h1 className={styles.contacthead}>Contact Us</h1>
        <h2 className={styles.contactsubhead}>Here to help!</h2>
        <br />

        <div className={styles.grid}>
        {contactsData.support.map(member=>
        <Contact className={styles.contactlist}  name={member.name} head={member.head} contact={member.contact} />
        )}
        </div> <br />
        <h1 className={styles.contactlisthead}>Heads of Events</h1>
        <div className={styles.grid} >
        {contactsData.team.map(member=>
        <Contact name={member.name} head={member.head} contact={member.contact} />
        )}
        </div>
      </div>
        
        <br />
        
    </div>
  )
}
export const pageQuery = graphql`
  query contactUs {
    markdownRemark(frontmatter: { path: { eq: "/contacts" } }) {
      html
      frontmatter {
        path
        title
        src
        short
        fee
        teamSize
        Type
        Date
      }
    }
  }
`

export default contactUs
