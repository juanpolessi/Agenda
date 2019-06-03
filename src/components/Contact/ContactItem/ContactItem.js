import React, { Component, Fragment } from 'react'
import EditContactModal from '../AddContact/ContactModal/ContactModal'

import './ContactItem.css'

import { connect } from 'react-redux'
import { editContact } from './../../../actions/ActionsCreator'

class ContactItem extends Component{

    constructor(props){
        super(props)

        this.state = { isOpen: false }
    }

    deleteItem(event) {
        event.preventDefault();

        this.props.onDeleteItem(this.props.contact.id)
    }

    toogleContactModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    
    render(){
        const { dispatch } = this.props
        const { isOpen } = this.state

        return(
            <Fragment>
                <div className="itemContatc" onClick={ () => this.toogleContactModal() }>
                    <div className="row">
                        <div className="circleLetter">
                            <label>{ this.props.contact.name.substr(0,1) }</label>
                        </div>
                        {/* <span className="btnEditContact" onClick={ () => this.toogleContactModal() }>
                        <i className="fas fa-user-edit"></i>
                        </span> */}
                        
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
                {
                    !isOpen
                    ? ''
                    :
                    <EditContactModal
                        show= { this.state.isOpen }
                        onClose= { this.toogleContactModal }
                        contact = { this.props.contact }
                        onEditContact = {
                            (id, name, phone) => dispatch(editContact(id, name, phone))
                        }>
                    </EditContactModal>
                }
            </Fragment>
        )
    }
}

ContactItem = connect()(ContactItem)
export default ContactItem