import React, { Component } from 'react'
import AddContact from '../Contact/AddContact/AddContact'

import './Menu.css'

class Menu extends Component {
    
    render(){
        const { dispatch } = this.props

        return(
            <div id="menu" className="menu">
                <div className="divLogo">
                    <i class="fas fa-user-circle"></i>
                    <span>Contacts</span>
                </div>
                <div className="menuButtons">
                    <AddContact />
                </div>
            </div>
        )
    }    
}

export default Menu