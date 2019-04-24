import { ADD_CONTACT } from './../constants/ActionsType'

let id = 0;

export function addContact(name) {
    return {
        type: ADD_CONTACT,
        name,
        id: id++
    }
}