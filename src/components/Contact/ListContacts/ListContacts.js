import React, { Component } from 'react'
import ContactItem from '../ContactItem/ContactItem'

import './ListContacts.css'

class ListContacts extends Component{

    render(){
        return(
            <div className="listContacts">
                {this.props.contacts.map((contact, index) => {
                    return <ContactItem contact = { contact } 
                                        key = { index } 
                                        onDeleteItem = { this.props.deleteItemAct }
                                        onEditItem = { this.props.editItemAct }>
                            </ContactItem>
                })}
            </div>
        )
    }
}

export default ListContacts