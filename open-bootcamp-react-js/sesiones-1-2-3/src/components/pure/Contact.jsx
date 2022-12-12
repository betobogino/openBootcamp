import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

function ContactComponent({ contact }) {
  return (
    <div>
        <h3>Nombre: {contact.name}</h3>
        <h3>Apellido: {contact.surname}</h3>
        <h3>Email: {contact.email}</h3>
        <h3>{contact.connected ? 'Contacto en Línea' : 'Contacto no disponible'}</h3>
    </div>
  )
}

ContactComponent.propTypes = {
  ContactComponent: PropTypes.instanceOf(Contact)
};

export default ContactComponent;
