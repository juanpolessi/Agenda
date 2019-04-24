import {ADD_CONTACT} from './../constants/ActionsType'

function contact(state = [], action) {
    switch (action.type) {
        case ADD_CONTACT:
        let obj = [
            ...state,
            {
                name: action.name,
                id  : action.id
            }
        ]
        console.log(obj)
            return obj
        default:
            return state
    }
}

export default contact