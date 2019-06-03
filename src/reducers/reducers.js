import { SEARCH_CONTACT, ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from './../constants/ActionsType'

import Contacts from './../helpers/contacts'

const initialState = Contacts

function contact(state = initialState, action) {
    switch (action.type) {
        case SEARCH_CONTACT:
            let contact =   action.contact.length === 0
                            ? initialState
                            : initialState.filter(contact => contact.name.toUpperCase().indexOf(action.contact.toUpperCase()) !== -1)

            return contact

        case ADD_CONTACT:
            return [
                ...state,
                {
                    id  : state.length + 1,
                    name: action.name,
                    phone: action.phone,
                }
            ]         

        case DELETE_CONTACT:
            return [
                ...state.filter( obj => obj.id !== action.index )
            ]

        case EDIT_CONTACT:
            return state.map((todo, index) => {
                if (index === action.index -1 ) {
                    todo.name = action.name
                    todo.phone = action.phone
                }
                return todo
            })

        default:
            return state
    }
}

export default contact