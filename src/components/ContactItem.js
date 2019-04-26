import React, {Component, PropTypes } from 'react'

class ContactItem extends Component{

    render(){
        return(
            <div>
                <h4> { this.props.contact.name } </h4>
                <button onClick={ (e) => this.deleteItem(e) }> - </button>
                <button onClick={ (e) => this.editItem(e) }> Edit </button>
            </div>
        )
    }

    deleteItem(event) {
        event.preventDefault();

        this.props.onDeleteItem(this.props.key)
    }

    editItem(event) {
        event.preventDefault()

        this.props.onEditItem(this.props.key)
    }
}

export default ContactItem