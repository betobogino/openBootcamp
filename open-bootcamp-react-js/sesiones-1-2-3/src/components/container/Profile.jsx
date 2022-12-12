import React from 'react'
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/Contact';

function Profile() {

  const defaulContact = new Contact('Alberto', 'Bogino', 'beto.bogino@gmail.com', true);

  return (
    <div>
      <ContactComponent contact={defaulContact}/>
    </div>
  )
}

export default Profile;