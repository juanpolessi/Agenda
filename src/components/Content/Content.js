import React, { Component } from 'react'
import ListContacts from './../Contact/ListContacts/ListContacts'
import Menu from './../Menu/Menu'

import Contacts from './../../helpers/contacts'

import { connect } from 'react-redux'
import { deleteContact, editContact } from './../../actions/ActionsCreator.js';

import './Content.css'

class Content extends Component {

    render(){
        const { dispatch, contacts } = this.props

        return(
            <div className="content">
                <Menu />
                <ListContacts 
                    contacts = { contacts } 
                    deleteItemAct = { index => {
                        dispatch(deleteContact(index))
                    }}
                    editItemAct = { (index, contact) => {
                        dispatch(editContact(index, contact))
                    }}
                />
            </div>
        )
    }
}

function list(state) {
    return {
        contacts: state
    }
}

Content = connect(list)(Content)
export default Content