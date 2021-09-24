import { writable } from 'svelte/store';
import { graphQLClientConn } from '../graphQLClient';
import { SEARCH_ALL_USERS, SEARCH_USER, DELETE_USER, REGISTER_USER } from '../queries/user_queries';

export const users = writable([])
let user_detail = {}
let loaded = false

export const GET_ALL_USERS = async () => {
    graphQLClientConn.request(SEARCH_ALL_USERS).then(response => {
        users.set(response.getUsers)
    })
}

export const GET_ONE_USER = async (variables) => {
    const { getUser } = await graphQLClientConn.request(SEARCH_USER, variables)
    user_detail = getUser
    return getUser
}

export const REGISTER_ONE_USER = async (variables) => {
    const { createUser } = await graphQLClientConn.request(REGISTER_USER, variables)
    return createUser
}

export const DELETE_USER_BY_ID = async (variables) => {
    const { deleteUser } = await graphQLClientConn.request(DELETE_USER, variables)
    return { id: deleteUser }
}