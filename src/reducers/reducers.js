import { SEARCH_CONTACT, ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from './../constants/ActionsType'

function contact(state = [], action) {
    switch (action.type) {
        case SEARCH_CONTACT:
            let contact =   action.contact.length === 0
                            ? state
                            : state.filter(contact => contact.name.toUpperCase().indexOf(action.contact.toUpperCase()) !== -1)

            return contact

        case ADD_CONTACT:
        let obj = [
            ...state,
            {
                name: action.name,
                phone: action.phone,
                id  : action.id
            }
        ]
            return obj

        case DELETE_CONTACT:
            return [
                state.slice(0, action.index )
            ]

        case EDIT_CONTACT:
            return [
                state.slice(0, action.index),
                Object.assign({}, { name: 'Juan' })
            ]
        default:
            return state
    }
}

export default contact