import React from 'react'
import Contact from '../components/contacts'
import contactsData from '../data/contacts.json'
import styles from './contacts.module.css'

const contactUs = ({ data }) => {
  document.body.style.background = "white";
  return (
    <div> 
      <h1 className={styles.contacthead}>Happy to Help!</h1>
      <br />
      <h1 className={styles.contactlisthead}>Heads</h1>
      <div className={styles.contactlist+' '+styles.grid}>
      {contactsData.team.map(member=>
      <Contact name={member.name} head={member.head} contact={member.contact} />
      )}
      </div> 
      <h1 className={styles.contactlisthead}>Support</h1>
      <div className={styles.grid} >
      {contactsData.support.map(member=>
      <Contact name={member.name} head={member.head} contact={member.contact} />
      )}
      </div>
    </div>
  )
}

export default contactUs
