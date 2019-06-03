import React, { Component } from 'react'

import './ContactModal.css'

class ContactModal extends Component {

    handleClick() {
        let name = this.refs.name.value || '';
        let phone = this.refs.phone.value || '';
        
        if(this.props.onAddContact !== undefined)
            this.props.onAddContact(name, phone);
        else
            this.props.onEditContact(this.props.contact.id, name, phone)

        this.props.onClose();

        this.refs.name.value = '';
        this.refs.phone.value = '';
    }

    handleNameLoad(value) {
        if(value !== undefined)
            this.refs.name.value = value
        else 
            this.refs.name.value = ""
    }

    handlePhoneLoad(value) {
        if(value !== undefined)
            this.refs.phone.value = value
        else 
            this.refs.phone.value = ""
    }

    componentDidMount(){
        if(this.props.contact !== undefined)
            this.handleNameLoad(this.props.contact.name);
        
        if(this.props.contact !== undefined)
            this.handlePhoneLoad(this.props.contact.phone);
    }

    render() {
        return (
            <div className="backdrop">
                <div className="modalNewContact">

                    <div className="headerNewContact">
                        <span className="spnTitle"> Add New Contact </span>
                        <span className="btnCloseModal" onClick={ this.props.onClose }>
                            <i className="fas fa-times"></i>
                        </span>
                    </div>  

                    <div className="formNewContact"> 
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <input id="txtNameContact" type="text" placeholder='Name' ref="name"/>
                        </div>

                        <div className="row">
                            <i className="fas fa-phone"></i>
                            <input id="txtPhoneContact" type="text" placeholder='Phone Number' ref="phone"/>
                        </div>

                    </div>

                    <div className="footerNewContact">
                        <button type="button" id="btnSaveContact" className="btn btnSaveContact" onClick={ () => this.handleClick() }>Save</button>
                        <button type="button" id="btnCancel" className="btn btnCancel" onClick={ this.props.onClose }>Cancel</button>
                    </div>                  
                </div>
            </div>
        )
    }
}

export default ContactModal