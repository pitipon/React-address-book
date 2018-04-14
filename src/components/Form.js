import React, { Component } from 'react'

class Form extends Component {

    state = {
        name: '',
        address: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(123131321, this.state)

        const {name,address} = this.state

        this.props.onSubmit({
            name: name,
            address: address
        })

        this.clearForm()
    }

    clearForm = () => {
        this.setState({name:'', address:''})
    }

    // changeName = (e) => {
    //     this.setState({name: e.target.value})
    // }

    // changeAddress = (e) => {
    //     this.setState({address: e.target.value})
    // }

    // changeState = (state) => {
    //     return (e) => {
    //         this.setState({[state]: e.target.value})
    //     }
    // }

    changeState = (state) => (e) => (this.setState({[state]: e.target.value}))
    

    render() {
        const { name, address } = this.state
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input  type="text" 
                                className="form-control" 
                                id="name"
                                value={name}
                                onChange={this.changeState('name')}
                                ref={input => this.nameInput = input}/>
                    </div>

                    <div className="form-group"> 
                        <label htmlFor="address">Address</label>
                        <input  type="text" 
                                className="form-control" 
                                id="address"
                                value={address}
                                onChange={this.changeState('address')}
                                ref={input => this.addressInput = input}/>
                    </div>
                    <button type="submit" 
                            class="button-primary"
                            onClick={this.handleSubmit}>Create</button>
                </form>
            </div>
        )
    }
}

export default Form