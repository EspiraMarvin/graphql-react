import {graphql} from 'react-apollo'
import {getBookQuery} from '../queries/queries'

const BookDetails = (props) => {
    console.log(props);

    const displayBookDetails = () => {
        // const book = props.data.data// same as below..below is destructured to get books
        const {book} = props.data;
        if (book){
            return (
                <div>
                    <h2>{book.title}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All book by this author:</p>
                    <ul className="other-books">
                        {
                            book.author.books.map(item => {
                                return (
                                    <li key={item.id}> {item.title} </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        }else {
            return (
                <div>No book selected... </div>
            )
        }
    }

        return (
            <div id="book-details">
                {displayBookDetails()}
            </div>
        )

};

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails)
