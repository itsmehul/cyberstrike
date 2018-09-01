import React from 'react'
import Link from 'gatsby-link'
import Contact from '../components/contacts'
import contactsData from '../data/contacts.json'
import styles from './contacts.module.css'

const contactUs = ({ data }) => {
  console.log(Object.values(contactsData))
  return (
    <div>
      <h1>Meet the team</h1>
      <br />
      <h1>Heads</h1>
      <div className={styles.grid}>
      {contactsData.team.map(member=>
      <Contact name={member.name} head={member.head} contact={member.contact} />
      )}
      </div>
      <h1>Support</h1>
      <div className={styles.grid}>
      {contactsData.support.map(member=>
      <Contact name={member.name} head={member.head} contact={member.contact} />
      )}
      </div>
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
