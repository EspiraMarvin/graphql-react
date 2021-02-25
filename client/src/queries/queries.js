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

export { getAuthorsQuery, getBooksQuery };
