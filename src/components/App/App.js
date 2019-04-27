import React, { Component } from 'react'
import Menu from './../Menu/Menu'
import Content from './../Content/Content'

import './App.css'

class App extends Component {

    render () {    
        return(
            <main className="main">
                <Menu />
                <Content />
            </main>
        )
    }
}

export default App