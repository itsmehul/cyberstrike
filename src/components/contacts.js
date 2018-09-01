import React from 'react';

const ContactCard = ({name, contact, head}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{head}</h2>
      <h3>{contact}</h3>
    </div>
  );
}

export default ContactCard;