import React, { Component } from 'react';
import './App.css';
import { list } from 'postcss';
import Form from './components/Form'
import List from './components/List'

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
          <Form createContact={this.createContact}/>
          <hr/>
          <List {...this.state}/>
      </div>
    )
  }
}

export default App;
