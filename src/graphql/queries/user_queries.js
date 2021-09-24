import { gql } from 'graphql-request'

export const SEARCH_ALL_USERS = gql`
    query {
        getUsers{
            _id
            nickname
            fullname
            phone
            city
        }
    }
`

export const SEARCH_USER = gql`
    query ($id: ID!) {
        getUser(id: $id) {
            _id
            nickname
            fullname
            phone
            city
        }
    }
`

export const REGISTER_USER = gql`
    mutation ($nickname: String!, $fullname: String!, $phone: String, $city: String) {
        createUser(nickname: $nickname, 
            fullname: $fullname, 
            phone: $phone, 
            city: $city) {
            _id
            nickname
            fullname
            phone
            city
        }
    }
`

export const DELETE_USER = gql`
    mutation ($id: ID!){
        deleteUser(id: $id) {
            _id
        }
    }
`