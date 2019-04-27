import React, { Component } from 'react'

import './Search.css'

class Search extends Component {

    render(){
        return(
            <div className="search">
                <div className="rowSearch">
                    <input id="txtSearch" className="txtSearch" type="text" placeholder="Search" />
                    <i class="fas fa-search"></i>
                </div>
            </div>
        )
    }
}

export default Search