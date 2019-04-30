import React, {Component } from 'react'

import './ContactItem.css'

class ContactItem extends Component{

    
    render(){
        return(
            <div className="itemContatc">
                <div className="row">
                    <div className="circleLetter">
                        {/* <label>{ this.props.contact.name.substr(0,1) }</label> */}
                    </div>
                    <span className="btnDeleteContact" onClick={ (e) => this.deleteItem(e) }>
                        <i className="fas fa-times"></i>
                    </span>
                </div>
                <div className="row">
                    <i className="fas fa-user"></i>
                    <label className="lblNome">{ this.props.contact.name }</label>
                </div>
                <div className="row">
                    {/* <button onClick={ (e) => this.editItem(e) }> Edit </button> */}
                    <i className="fas fa-phone"></i>
                    <label> { this.props.contact.phone } </label>
                </div>
            </div>
        )
    }

    deleteItem(event) {
        debugger;
        event.preventDefault();

        this.props.onDeleteItem(this.props.key)
    }

    editItem(event) {
        event.preventDefault()

        this.props.onEditItem(this.props.key)
    }
}

export default ContactItem