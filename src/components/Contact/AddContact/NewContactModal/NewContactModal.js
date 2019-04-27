import React, { Component } from 'react'

import './NewContactModal.css'

class NewContactModal extends Component {

    render() {
        return (
            <div className="backdrop">
                <div className="modalNewContact">

                    <div className="headerNewContact">
                        <span className="spnTitle"> Add New Contact </span>
                        <span className="btnCloseModal" onClick={ this.props.onClose }>
                            <i class="fas fa-times"></i>
                        </span>
                    </div>  

                    <div className="formNewContact"> 
                        <div className="row">
                            <i class="fas fa-user"></i>
                            <input id="txtNameContact" type="text" type="text" placeholder='Name'/>
                        </div>

                        <div className="row">
                            <i class="fas fa-phone"></i>
                            <input id="txtPhoneContact" type="text" placeholder='Phone Number'/>
                        </div>

                    </div>

                    <div className="footerNewContact">
                        <button type="button" id="btnSaveContact" className="btn btnSaveContact">Save</button>
                        <button type="button" id="btnCancel" className="btn btnCancel" onClick={ this.props.onClose }>Cancel</button>
                    </div>                  
                </div>
            </div>
        )
    }
}

export default NewContactModal