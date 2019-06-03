import React, { Component } from 'react'
import NewContactModal from './ContactModal/ContactModal'
import { connect } from 'react-redux'
import { addContact } from './../../../actions/ActionsCreator'

import './AddContact.css'

class AddContact extends Component {

    constructor(props){
        super(props)

        this.state = { isOpen: false }
    }

    toogleContactModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render (){
        const { dispatch } = this.props
        const { isOpen } = this.state

        return (
            <div>
                <button type="button" className="btnAddContact" onClick={() => this.toogleContactModal()}>
                    <i className="fas fa-user-plus"></i>
                    <span>New Contact</span>
                </button>
                {
                    !isOpen
                    ? ''
                    :
                    <NewContactModal
                        show= { this.state.isOpen }
                        onClose= { this.toogleContactModal }
                        onAddContact = {
                            (name, phone) => dispatch(addContact(name, phone))
                        }>
                    </NewContactModal>
                }
            </div>
        )
    }    
}

AddContact = connect()(AddContact)
export default AddContact