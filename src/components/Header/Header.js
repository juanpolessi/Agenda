import React, { Component } from 'react'
import Search from './Search/Search'

import './Header.css'

class Header extends Component {
    
    render(){
        const { dispatch } = this.props

        return(
            <div id="header" className="header">
                <div className="divLogo">
                    <i class="fas fa-user-circle"></i>
                    <span>Contacts</span>
                </div>
            
                <Search />
            </div>
        )
    }    
}

export default Header