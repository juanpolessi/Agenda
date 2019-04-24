import React, { Component , PropTypes } from 'react'
import AddContact from './AddContact.js'
import {connect} from 'react-redux'
import { addContact } from '../actions/ActionsCreator.js';

class App extends Component {

    render () {
        const { dispatch } = this.props
        return(
            <main>
                <AddContact
                    onAddContact = {
                        text => dispatch(addContact(text))
                    }
                ></AddContact>
            </main>
        )
    }
}

App = connect()(App)
export default App