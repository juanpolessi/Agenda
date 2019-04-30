import React, { Component } from 'react'
import AddContact from '../Contact/AddContact/AddContact'

import './Menu.css'

class Menu extends Component{
    
    render(){
        return(
            <div id="menu" className="menu">
                <AddContact />
            </div>
        )
    }
}

export default Menu