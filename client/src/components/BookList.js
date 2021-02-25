import {graphql} from 'react-apollo'
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";
import { useState } from 'react'


const BookList = (props) => {


    const [selected, setSelected ] = useState(null);


    const displayBooks = () => {

        let data = props.data;
        if (data.loading){
            return ( <div> Loading Books...</div> )
        }else {
            return data.books.map(book => {
                return (
                    <li
                        onClick={() => {
                        setSelected(book.id)
                    }} key={book.id}
                    >
                        { book.title }
                    </li>
                )
            })
        }
    };


    return (
        <div>
            <ul id="book-list">
                { displayBooks() }
            </ul>
            <BookDetails bookId={selected} />
        </div>
    )
};

export default graphql(getBooksQuery)(BookList);
