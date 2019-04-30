import React, { Component } from 'react'

import './NewContactModal.css'

class NewContactModal extends Component {

    handleClick() {
        let name = this.refs.name.value || '';
        let phone = this.refs.phone.value || '';

        this.props.onAddContact(name, phone);

        this.props.onClose();

        this.refs.name.value = '';
        this.refs.phone.value = '';
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

export default NewContactModal