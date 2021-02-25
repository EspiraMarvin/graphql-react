import {gql} from 'apollo-boost'

const getBooksQuery = gql`
{
    books{
       title
       id
    }
}
`

const getAuthorsQuery = gql`
{
    authors{
        name
        age
        id
    }
}
`

const addBookMutation = gql`
mutation {
    addBook(title: "", genre: "", authorId: ""){
       title
       id
    }
}
`

export { getAuthorsQuery, getBooksQuery, addBookMutation};
