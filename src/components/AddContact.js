import React, {Component, PropTypes} from 'react'

class AddContact extends Component{

    handleClick() {
        let name = this.refs.name.value || '';

        this.props.onAddContact(name)

        name = ''
    }

    render (){
        return (
            <div>
                <form>
                    <input type="text" ref="name"/>
                    <button type="button" onClick= { () => this.handleClick() }>Click to save</button>
                </form>
            </div>
        )
    }    
}

export default AddContact