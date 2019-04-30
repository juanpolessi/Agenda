import React, { Component } from 'react'

import './Search.css'

class Search extends Component {

    handleInputChange = (event) => {
        this.props.onSearchContact(event.target.value);
    }

    render(){
        return(
            <div className="search">
                <div className="rowSearch">
                    <input id="txtSearch" className="txtSearch" type="text" placeholder="Search" onChange={ this.handleInputChange } />
                    <i className="fas fa-search"></i>
                </div>
            </div>
        )
    }
}

export default Search