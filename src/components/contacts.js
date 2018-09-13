import React from 'react';
import styles from './contacts.module.css'



const ContactCard = ({name, contact, head, email}) => {
  return (
    <div>
      
      <h1 style={{fontFamily:'Product Sans',fontWeight: '100', fontSize: '1.5rem', textAlign: 'center', color: '#ffffff',}}><b>{name}</b></h1>
      <h2 style={{fontFamily:'Product Sans',fontWeight: '100', fontSize: '1.5rem', textAlign: 'center', color: '#ffffff',}}>{head}</h2>
      <h3 style={{fontFamily:'Product Sans',fontWeight: '100', fontSize: '1.5rem', textAlign: 'center', color: '#ffffff',}}>{contact}</h3>
      <h3>{email}</h3>
    </div>
  );
}

export default ContactCard;