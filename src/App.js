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

  render() {
    return (
      <div className="container">
          <h2>Address Form</h2>
          <Form/>
          <hr/>
          <List items={this.state.contacts}/>
      </div>
    )
  }
}

export default App;
