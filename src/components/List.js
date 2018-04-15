import React, {Component} from 'react'
import PropTypes from 'prop-types'

const List = (props) => (
    <ul>
              {
                props.contacts.map(
                  (contact, index) => (<li key={index}>{contact.name} - {contact.address}</li>)
                )
              }
    </ul>
)

List.defaultProps = {
    contacts: []
}

List.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired
        })
    )
}

export default List