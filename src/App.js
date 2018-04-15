import React, { Component } from 'react';
import './App.css';
// import Form from './components/Form'
// import List from './components/List'

import { Form, List } from './components'

class App extends Component {
  state = {
    contacts: [
      {name: 'Pitipon P', address: 'Thailand'},
      {name: 'Pitipon P', address: 'Thailand'}
    ]
  }

  createContact = (contact) => {
    this.setState({
      contacts: [...this.state.contacts, contact]
    })
  }

  render() {
    return (
      <div className="container">
          <h2>Address Form</h2>
          <Form onSubmit={this.createContact}/>
          <hr/>
          <List {...this.state}/>
      </div>
    )
  }
}

export default App;
