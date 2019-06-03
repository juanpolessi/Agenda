import { SEARCH_CONTACT, ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from './../constants/ActionsType'

let id = 0;

export function searchContact(contact) {
    return {
        type: SEARCH_CONTACT,
        contact
    }
}

export function addContact(name, phone) {
    return {
        type: ADD_CONTACT,
        name,
        phone,
        id: id++
    }
}

export function deleteContact(index) {
    return{
        type: DELETE_CONTACT,
        index
    }
}

export function editContact(index, name, phone) {
    return{
        type: EDIT_CONTACT,
        index,
        name,
        phone
    }
}