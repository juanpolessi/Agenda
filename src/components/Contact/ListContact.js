import React, { Component } from 'react'
import ContactItem from './ContactItem'

class ListContact extends Component{

    render(){
        return(
            <div>
                {/* {this.props.contacts.map((contact, index) => {
                    return <ContactItem contact = { contact } 
                                        key = { index } 
                                        onDeleteItem = { this.props.deleteItemAct }
                                        onEditItem = { this.props.editItemAct }>
                            </ContactItem>
                })} */}
            </div>
        )
    }
}

export default ListContact