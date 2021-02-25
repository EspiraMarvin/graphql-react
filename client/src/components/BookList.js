import {graphql} from 'react-apollo'
import { getBooksQuery } from "../queries/queries";


const BookList = (props) => {
    const displayBooks = () => {
        let data = props.data;
        if (data.loading){
            return ( <div>Loading Books...</div> )
        }else {
            return data.books.map(book => {
                return (
                    <li key={book.id}>{ book.title }</li>
                )
            })
        }
    };

    return (
        <div>
            <ul id="book-list">
                { displayBooks() }
            </ul>
        </div>
    )
};

export default graphql(getBooksQuery)(BookList);
