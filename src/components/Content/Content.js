import React, { Component } from 'react'
import ListContact from './../Contact/ListContact'
import Menu from './Menu/Menu'

import './Content.css'

class Content extends Component {

    render(){
        return(
            <div className="content">
                <Menu />
                <ListContact />
            </div>
        )
    }
}

export default Content