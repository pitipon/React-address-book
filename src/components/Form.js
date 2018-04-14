import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}

export default Form