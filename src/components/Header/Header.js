import React, { Component } from 'react'
import Search from './Search/Search'
import { connect } from 'react-redux'
import { searchContact } from './../../actions/ActionsCreator.js';

import './Header.css'

class Header extends Component {
    
    render(){
        const { dispatch } = this.props

        return(
            <div id="header" className="header">
                <div className="divLogo">
                    <i className="fas fa-user-circle"></i>
                    <span>Contacts</span>
                </div>
            
                <Search                     
                    onSearchContact = { contacts => {
                        dispatch(searchContact(contacts))
                    }}
                />
            </div>
        )
    }    
}

Header = connect()(Header)
export default Header