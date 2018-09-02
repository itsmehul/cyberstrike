import React from 'react'
import Contact from '../components/contacts'
import contactsData from '../data/contacts.json'
import styles from './contacts.module.css'

const contactUs = ({ data }) => {
  document.body.style.background = "white";

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

export default contactUs
