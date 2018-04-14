import React, {Component} from 'react'

const List = (props) => (
    <ul>
              {
                props.contacts.map(
                  (contact, index) => (<li key={index}>{contact.name} - {contact.address}</li>)
                )
              }
    </ul>
)

export default List