import React, { Component } from 'react'
import Search from './../Search/Search'
import ListContact from './../Contact/ListContact'

import './Content.css'

class Content extends Component {

    render(){
        return(
            <div className="content">
                <Search />
                <ListContact />
            </div>
        )
    }
}

export default Content