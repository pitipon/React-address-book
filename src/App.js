import React, { Component } from 'react';
import './App.css';
import { list } from 'postcss';

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
          <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name"/>
            </div>

            <div className="form-group"> 
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address"/>
            </div>
            <button type="submit" class="button-primary">Create</button>
          </form>
          <hr/>
          <ul>
              {
                this.state.contacts.map(
                  (contact, index) => (<li key={index}>{contact.name} - {contact.address}</li>)
                )
              }
          </ul>
      </div>
    )
  }
}

export default App;
