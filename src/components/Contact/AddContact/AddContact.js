import React, { Component } from 'react'
import NewContactModal from './NewContactModal/NewContactModal'
import { conect } from 'react-redux'
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
        const { isOpen } = this.state

        return (
            <div>
                <button type="button" className="btnAddContact" onClick={() => this.toogleContactModal()}>
                    <i class="fas fa-user-plus"></i>
                    <span>New Contact</span>
                </button>
                {
                    !isOpen
                    ? ''
                    :
                    <NewContactModal
                        show= { this.state.isOpen }
                        onClose= { this.toogleContactModal }>
                    </NewContactModal>
                }
            </div>
        )
    }    
}

export default AddContact