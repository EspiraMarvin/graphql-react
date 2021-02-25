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

const getBookQuery = gql`
    query($id: ID){
        book(id: $id){
            id
            title
            genre
            author{
                id
                name
                age
                books{
                    title 
                    id
                }
            }
        }
    }
`

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery};
