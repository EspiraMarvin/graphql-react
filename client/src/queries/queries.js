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
mutation($title: String!, $genre: String!, $authorId: ID!) {
    addBook(title: $title, genre: $genre, authorId: $authorId){
       title
       id
    }
}
`

export { getAuthorsQuery, getBooksQuery, addBookMutation};
