import React from 'react'
import Contact from '../components/contacts'
import contactsData from '../data/contacts.json'
import styles from './contacts.module.css'

const contactUs = ({ data }) => {

  return (
    <div>
      <div style={{padding:'10px'}}> 
        <h1 className={styles.contacthead}>CONTACT US</h1>
        <h2 className={styles.contactsubhead}>Here to help!</h2>
        <br />

        <h1 className={styles.contactlisthead}>Where to find us?</h1>
        <div className={styles.grid+' '+styles.contactaddr}>
          <div>
            <p><b>DOT COM CLUB</b><br />
            support@jhccyberstrike.com</p>
            </div>
          <div>
            <p><b>Address</b><br />Jai Hind College <br />
            "A" Road, Churchgate <br /> Mumbai, Maharashtra 400 020</p>
          </div>
        </div>
        <br />

        <h1 className={styles.contactlisthead}>For enquiries contact</h1>
        <div className={styles.grid+' '+styles.contactaddr} >
        {contactsData.team.map(member=>
        <Contact name={member.name} head={member.head} contact={member.contact} />
        )}
        </div>
      </div>
        
        <br />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.9295846753625!2d72.82302181446536!3d18.934510687169272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e71c2b104b%3A0x2b32a4be81621938!2sJai+Hind+College!5e0!3m2!1sen!2sin!4v1480503248783" width="100%" height="450" frameborder="0" style={{border:'0'}} allowfullscreen></iframe>

    </div>
  )
}

export default contactUs
